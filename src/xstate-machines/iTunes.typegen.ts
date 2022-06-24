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
    'done.invoke.invokeServiceGetArtwork': {
      type: 'done.invoke.invokeServiceGetArtwork';
      data: unknown;
      __tip: 'See the XState TS docs to learn how to strongly type this.';
    };
    'error.platform.invokeServiceGetArtwork': {
      type: 'error.platform.invokeServiceGetArtwork';
      data: unknown;
    };
  };
  invokeSrcNameMap: {
    serviceGetArtwork: 'done.invoke.invokeServiceGetArtwork';
  };
  missingImplementations: {
    actions: never;
    services: never;
    guards: never;
    delays: never;
  };
  eventsCausingServices: {
    serviceGetArtwork: 'fetchArtwork';
  };
  eventsCausingGuards: {
    guardVolume: 'setVolume';
    guardSearchArtwork: 'fetchArtwork';
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
    | 'Song Artwork'
    | 'Song Artwork.searchArtwork'
    | 'Song Artwork.searchCompleted'
    | 'Song Artwork.searchError'
    | 'Song Artwork.searchArtworkIdle'
    | {
        'Audio Play'?: 'Play' | 'Stop';
        'Song Artwork'?:
          | 'searchArtwork'
          | 'searchCompleted'
          | 'searchError'
          | 'searchArtworkIdle';
      };
  tags: never;
}
