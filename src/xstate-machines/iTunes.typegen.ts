// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  '@@xstate/typegen': true;
  eventsCausingActions: {
    GetPlayStatus: 'getPlayStatus';
    SetStop: 'setStop';
    SetPlay: 'setPlay';
    GetSong: 'getSong';
    GetVolume: 'getVolume';
    GetShuffle: 'getShuffle';
    GetRepeat: 'getRepeat';
    GetCurrentTrackPlaytime: 'getCurrentTrackPlaytime';
    GetPlaylists: 'getPlaylists';
    SetPlayPlaylist: 'setPlayPlaylist';
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
  eventsCausingGuards: {};
  eventsCausingDelays: {};
  matchesStates:
    | 'Audio Play'
    | 'Audio Play.Play'
    | 'Audio Play.Stop'
    | 'Song'
    | 'Volume'
    | 'Shuffle'
    | 'Repeat'
    | 'Current Track Playtime'
    | 'Playlist'
    | { 'Audio Play'?: 'Play' | 'Stop' };
  tags: never;
}
