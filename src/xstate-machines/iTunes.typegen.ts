// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  '@@xstate/typegen': true;
  eventsCausingActions: {
    GetPlayStatus: 'getPlayStatus';
    SetTogglePlay: 'setTogglePlay';
    GetSong: 'getSong';
    GetShuffle: 'getShuffle';
    SetShuffle: 'setShuffle';
    GetRepeat: 'getRepeat';
    SetRepeat: 'setRepeat';
    GetCurrentTrackPlaytime: 'getCurrentTrackPlaytime';
    GetPlaylists: 'getPlaylists';
    SetPlayPlaylist: 'setPlayPlaylist';
    SetNextTrack: 'setNextTrack';
    SetPreviousTrack: 'setPreviousTrack';
    GetVolume: 'getVolume';
    SetVolume: 'setVolume';
    SetTouchOnHold: 'setTouchOnHold';
  };
  internalEvents: {
    'xstate.init': { type: 'xstate.init' };
  };
  invokeSrcNameMap: {};
  missingImplementations: {
    actions: never;
    services: never;
    guards: never;
    delays: never;
  };
  eventsCausingServices: {};
  eventsCausingGuards: {
    guardVolume: 'setVolume';
  };
  eventsCausingDelays: {};
  matchesStates:
    | 'Audio Play'
    | 'Audio Play.Play'
    | 'Audio Play.Stop'
    | 'Song'
    | 'Shuffle'
    | 'Repeat'
    | 'Current Track Playtime'
    | 'Playlist'
    | 'Volume'
    | 'TouchOnHold'
    | { 'Audio Play'?: 'Play' | 'Stop' };
  tags: never;
}
