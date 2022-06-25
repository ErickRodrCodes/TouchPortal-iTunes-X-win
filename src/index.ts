import { Client } from 'touchportal-api';
import { peekAndDispatchMessages } from 'winax';
import { interpret } from 'xstate';

import { player } from './xstate-machines/iTunes';

const pluginId = "TPiTunes";
const updateUrl = '';
const TPClient = new Client({ pluginId, updateUrl });
TPClient.connect({ pluginId });
const TPITunesState = {app: interpret(player)};
// first, create a recurrent send of actions to xstate so this concurrent
// machine can react to the actions
TPITunesState.app.start();

TPClient.on('Settings', (message:any[]) => {
  const pluginSettings:Record<any, any> = {};
  message.forEach(setting => {
    const key = Object.keys(setting)[0];
    pluginSettings[key] = setting[key];
  });
  TPITunesState.app.send('setSettings', {payload: pluginSettings});
});

// Do this ONLY when you are connected. This is the only time you should call this function.
TPClient.on('connected', (data) => {
  console.log(`${pluginId} connected`);
  const setTransitions = setInterval(() => {
    peekAndDispatchMessages();
    TPITunesState.app.send([
      'getSong',
      'getVolume',
      'getShuffle',
      'getRepeat',
      'getCurrentTrackPlaytime',
      'getPlayStatus',
      'getCurrentTrackAlbum',
      'getArtwork',
      'actionSearch'
    ]);
    TPITunesState.app.send('getPlaylists', {payload: {TouchPortalClient: TPClient}});
  }, 100);

  // spit out the state machine context everyy 500ms so we get consistent data from the state machine
  // instead reacting to each transition, which will be a lot of data for the ui to handle
  const updateInterval = setInterval(() => {
    const stateArray: any[] = [];
    const iTunesStates = { ...TPITunesState.app.state.context } as { [key: string]: any };
    Object.keys(iTunesStates).forEach((key) => {
      if (iTunesStates[key].value != undefined) {
        stateArray.push(iTunesStates[key]);
      }
    });
    TPClient.stateUpdateMany(stateArray);
  }, 100);

  //finally we integrate any message of touchportal and trigger the respective transitions.
  TPClient.on('Close', () => {
    clearInterval(setTransitions);
    clearInterval(updateInterval);
  });

});

/* This is a type definition for the variable `timedDutDown` which is used to store the interval timer. */
let timedDutDown: ReturnType<typeof setInterval>;

TPClient.on('Action', async (data, hold) => {
  const { actionId } = data;
  switch (actionId) {
    case 'itunes_toggle_play_action':
      TPITunesState.app.send('setTogglePlay');
      break;
    case 'itunes_play_playlist':
      if (data.data.length > 0) {
        const playlistName = data.data[0].value;
        const shuffleStatus = data.data[1].value;
        const repeatStatus = data.data[2].value;
        TPITunesState.app.send('setPlayPlaylist', { playlistName, shuffleStatus, repeatStatus });
      }
      break;
    case 'itunes_next_track':
      TPITunesState.app.send('setNextTrack');
      break;
    case 'itunes_back_track':
      TPITunesState.app.send('setPreviousTrack');
      break;

    case 'itunes_volume_adjust':
      // eslint-disable-next-line no-case-declarations

      TPITunesState.app.send('setTouchOnHold', { TPEvent: data, hold });
      if (hold) {
        timedDutDown = setInterval(() => {
          TPITunesState.app.send('setVolume', { TPEvent: data, hold });
        }, 100);
      } else {
        clearInterval(timedDutDown);
      }

      if (data.type === "down") {
        TPITunesState.app.send('setVolume', { TPEvent: data, hold });
      }

      break;
  }
});

