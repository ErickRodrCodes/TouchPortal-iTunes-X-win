import { Client } from 'touchportal-api';
import { peekAndDispatchMessages, Object as WinaxObject } from 'winax';
import { interpret, Interpreter } from 'xstate';

import { _iTunes } from './interfaces/iTunes';
import { player } from './xstate-machines/iTunes';

const pluginId = "TPiTunes";
const updateUrl = '';
const TPClient = new Client({ pluginId, updateUrl });
TPClient.connect({ pluginId });
const TPITunesState = {app: interpret(player)};

// Do this ONLY when you are connected. This is the only time you should call this function.
TPClient.on('connected', (data) => {

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
    // console.log(new Date(), {stateArray});
    TPClient.stateUpdateMany(stateArray);
  }, 1000);

  //finally we integrate any message of touchportal and trigger the respective transitions.
  TPClient.on('Action', async (data, hold) => {
    console.log({data});
    const { actionId } = data;
    switch (actionId) {
      case 'itunes_toggle_play_action':
        TPITunesState.app.send(TPITunesState.app.state.context.PlayerState.value === 'Playing' ? 'setStop' : 'setPlay');
        break;
    }
  });
});

