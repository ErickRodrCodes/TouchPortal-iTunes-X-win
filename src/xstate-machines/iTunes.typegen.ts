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
    ApplyArtwork:
      | 'done.invoke.TouchPortal iTunesPlayer Machine.Current Track Artwork.StartSearch:invocation[0]'
      | 'error.platform.TouchPortal iTunesPlayer Machine.Current Track Artwork.StartSearch:invocation[0]';
    SetSettings: 'setSettings';
    LoadingArtwork: 'actionSearch';
  };
  internalEvents: {
    'done.invoke.TouchPortal iTunesPlayer Machine.Current Track Artwork.StartSearch:invocation[0]': {
      type: 'done.invoke.TouchPortal iTunesPlayer Machine.Current Track Artwork.StartSearch:invocation[0]';
      data: unknown;
      __tip: 'See the XState TS docs to learn how to strongly type this.';
    };
    'error.platform.TouchPortal iTunesPlayer Machine.Current Track Artwork.StartSearch:invocation[0]': {
      type: 'error.platform.TouchPortal iTunesPlayer Machine.Current Track Artwork.StartSearch:invocation[0]';
      data: unknown;
    };
    'xstate.init': { type: 'xstate.init' };
  };
  invokeSrcNameMap: {
    GetArtwork: 'done.invoke.TouchPortal iTunesPlayer Machine.Current Track Artwork.StartSearch:invocation[0]';
  };
  missingImplementations: {
    actions: never;
    services: never;
    guards: never;
    delays: never;
  };
  eventsCausingServices: {
    GetArtwork: 'actionSearch';
  };
  eventsCausingGuards: {
    guardVolume: 'setVolume';
    guardGetArtwork: 'actionSearch';
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
    | 'Current Track Artwork'
    | 'Current Track Artwork.StartSearch'
    | 'Current Track Artwork.EndSearch'
    | 'Touch Portal Settings'
    | {
        'Audio Play'?: 'Play' | 'Stop';
        'Current Track Artwork'?: 'StartSearch' | 'EndSearch';
      };
  tags: never;
}
