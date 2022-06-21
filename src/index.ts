import { Client } from 'touchportal-api';
import { peekAndDispatchMessages } from 'winax';
import { interpret } from 'xstate';

import { player } from './xstate-machines/iTunes';

const pluginId = "TPiTunes";
const updateUrl = '';
const TPClient = new Client({ pluginId, updateUrl });
TPClient.connect({ pluginId });
const TPITunesState = {app: interpret(player)};

// Do this ONLY when you are connected. This is the only time you should call this function.
TPClient.on('connected', (data) => {
  console.log(`${pluginId} connected`);
  // first, create a recurrent send of actions to xstate so this concurrent
  // machine can react to the actions
  TPITunesState.app.start();
  const setTransitions = setInterval(() => {
    peekAndDispatchMessages();
    TPITunesState.app.send([
      'getSong',
      'getVolume',
      'getShuffle',
      'getRepeat',
      'getCurrentTrackPlaytime',
      'getPlayStatus',
      'getCurrentTrackAlbum'
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

TPClient.on('Action', async (data, hold) => {
  const { actionId } = data;
  switch (actionId) {
    case 'itunes_toggle_play_action':
      if (TPITunesState.app.state.context.PlayerState.value === 'Playing') {
        TPITunesState.app.send('setStop');
      } else {
        TPITunesState.app.send('setPlay');
      }
      break;
    case 'itunes_play_playlist':
      if (data.data.length > 0) {
        const playlistName = data.data[0].value;
        const shuffleStatus = data.data[1].value;
        const repeatStatus = data.data[2].value;
        TPITunesState.app.send('setPlayPlaylist', { playlistName, shuffleStatus, repeatStatus });
      }
      break;
  }
});

