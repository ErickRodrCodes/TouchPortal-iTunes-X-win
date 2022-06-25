import { Object as WinaxObject } from 'winax';
import { Console } from 'winston/lib/winston/transports';
import { assign, createMachine } from 'xstate';

import { defaultImageArtBase64, ITPlayerStateStopped, ITPlaylistRepeatMode, LIBRARY_TYPE, pluginId } from '../consts';
import { IITSource } from '../interfaces/IITSource';
import { _iTunes } from '../interfaces/iTunes';
import { ITPITunesStateContext } from './interfaces';

const iTunesObject = new WinaxObject("iTunes.Application") as _iTunes;

/* Creating a state machine. */

export const player
/** @xstate-layout N4IgpgJg5mDOIC5QBUD2BXAxgCwAqoCcAXAQwBsACAS2XQDs5cySBPMAigWRJyoYDoAgughVUFJq36SWAYlhgiaKFDJgZiUAAdUsKkTF1NIAB6IATAEYArPwAM1gJwBmABzmALI6eXzrgDQgLIjWdo78AGzu1hHeER525tYeAOwAvmmBaFh4hKSUNPSMzGwc3LwCwqLiMvwAykSoWvKKyqrqJcY6egaoRkimFjb2Tm6e3o6+AUEhjhH81q4xKS52sa6+GVkYOPjE5NS0DLAy7Fw82HxgQiJiEiWyMEQyDSRE6PAD3fqGxmYIUTs9giSWslhsjiSEWcgWCCGcbn4KzBKQ8CPMzksjg8WxA2V2eQOhWOpzKFyu9T6UEeijqVK6uh+fT+iFitmcoVcHks3McKTW1lhiB5IKRKVR7imHic1lx+Ny+wKR2KrDO5UuAjq2HQADMdWoaUQtbr9WAGT1fgN-rEgZYIokHJjkklHEKEJZxfxHHZUbE3BtHN45TsFflDkUTiU1eTNdq9QaFEa46bzUz+qBrZN+B5XM5oeZ82ifW6s3Y7GinPFrJ5nClLMGcnsw8SVaVzhVrgAlMBaMBvQ3d3tvVO9dODAGucLVjxJDE8yx2HluyyuOvZ6yLazODweCJ7lKuBsExXhklRskd-iDvtEFpEa-Dr6M0csgHe-hc8U86vuFYpZcHh4CzVose57miK5HqGRLKpGqoXhq1wAMLoAQBBgHQRAUMgBA8AA1vcrAGAAtmAhooWhGFKLhmB4TIJFmk+FrMlarLStmbjbtu8SAtMcLmHYzjmPwXFJM45YOAJzhQU2MERqS7aIdIJRkFQsC3k8MiqepnzaM+loZqyq4iaB25rEJPL-jMCCOFy-BYlyQkcgiESypkeIhrJSryeeikUlpam3omMgBepI4GeOEQrCJQl2KurgJeCSRupOKT8OY3hCQWC4JJMMmEt5Z7wX5AihUFigAHJgCY1H4eFLGGROwnJBEPKuGEK6ASlC4iZCDiLOJHoZflJ4tnBbbqv5KmBXeuDoQAbmIHw4XVTFpq+UWWPYqRsuYc7QjC1kpBi2YJdi9qrlYKTSe58peaerbRpeABqqBkOgpGGq972kfVY7WglIlWFM8SLtiy6DR+3rOJCnj8gJEQjc2sEKZNAjfR9ZGJhjv1rS+rEAl4XrcqkqQrkkM7Lt+9hLL+m4+vWt2eQVD3jU9SnygA8nQAASb0QHeXO8-zf0bfyp2SZOvjHVZcJ2ide5gquPpJCsN3bI2LNjajMbXHSdBQBQgjEAA7oQeH8AoJAEDgxtEGbBB4bIEB9NcfDzageFu3QHte3U7CLZgYAAOKKHbDt4aLBPYq46VcrudoxHulhuntB7pbW0LxJYtY5kjclFRNuuUgbRum+blt9jb2Dh+bsjsAQhD8FozBEDqhDEfw7ue2A-sEIHIdh+XjtR41MdxzurWuWBKfWRiqTpVd8SuK5V3pEzmujSjvlo3rVJl-bFdW9XteOwAkhABo6ootvD5HeMRf8fi2A4ZbghuKxonxFgZVt9qJMrbwYQMjuToKgCAcBjB3S1tvYqu8bjVEIiwZSrBR7jlrECFqkw1jxEmOCDwbotzCT5AWaU5YUjOkZhrY8yMfJwOLlUO4tQGhNDQf8cUhDxLZmOmyFwkItzqw8pvWhhd2YUkYTUToD8Grji3G6NE8x1h+ASBQ8wqj86FUeghCk+soBsMQKkZcG4gKAglN6Fe3g3LUOgpotm2jYwmjUPohAhi56xA-Aua6U9HLGI0azHWl4HxEGca4uWcxnAmUSjmFIe48yIw3jQguWiSrIVQuhTC2EaIEXolQXGelmL-QMbLIYnh0q7isDufkOZHB+O1jvYuZVnHWDSruVcrkOSpBiAiZcPp5gLhsDOMI+Y4q1NgUXF6b1MbOJiXHcsW44obBzCCCGLgkQuGclFdYQYEk2P8fUy8Qs+ZkAgCE4p7o6y2BiIspYiRkjuFGXQ8ZSldEHwjpXa2t9D4j2kYUhAdyRKCTtOslyro55+AiWWFYUQbC5hiQ80R9i96l1PhbY+OAkKoGIi3RQkBnG+CSEiKIK98UzjrOYVOajhJWFCN6FY0R17WPunU+hl4XkovedXAAomhQgeK9q2BiQlVqe1SW+FTtuLaWJIRYnGDLeFyT4Fsrvhyz5EcL5OJ+a+Y64qBILHBd6QZ0otzyrsSkkuhsUUhO-ggKwgYM4CgLFxa6JqAmIWcRiZcscwaBh9b6wM8SMhAA */
= createMachine({
  context: {
    PlayerState: { id: 'itunes_playing_state', value: '' },
    Volume: { id: 'itunes_volume', value: '' },
    CurrentTrackAlbum: { id: 'itunes_current_track_album', value: '' },
    CurrentTrackName: { id: 'itunes_current_track_name', value: '' },
    CurrentTrackArtist: { id: 'itunes_current_track_artist', value: '' },
    CurrentTrackAlbumArtwork: {
      id: 'itunes_current_track_album_artwork',
      value: defaultImageArtBase64,
    },
    CurrentTrackPlayedTime: { id: 'itunes_current_track_play_time', value: '' },
    CurrentTrackRemainingTime: {
      id: 'itunes_current_track_remaining_time',
      value: '',
    },
    Shuffle: { id: 'itunes_shuffle', value: '' },
    Repeat: { id: 'itunes_repeat', value: '' },
    PlayLists: {
      id: 'itunes_playlists',
      value: '',
      valueChoices: [],
      index: {},
      currentName: '',
    },
    CurrentStreamTitle: {
      id: 'itunes_current_stream_title',
      value: '',
    },
    CurrentStreamURL: {
      id: 'itunes_current_stream_url',
      value: '',
    },
    _HoldAction: {},
    canSearchImage: true,
    lastSearchSong: '',
  },
  tsTypes: {} as import('./iTunes.typegen').Typegen0,
  schema: {
    context: {} as ITPITunesStateContext,
    events: {} as {
      type:
        | 'getSong'
        | 'getVolume'
        | 'getShuffle'
        | 'getPlayStatus'
        | 'getRepeat'
        | 'getCurrentTrackPlaytime'
        | 'getPlaylists'
        | 'getCurrentTrackAlbum'
        | 'setShuffle'
        | 'setRepeat'
        | 'setTogglePlay'
        | 'setPlayPlaylist'
        | 'setNextTrack'
        | 'setPreviousTrack'
        | 'setVolume'
        | 'setTouchOnHold'
        | 'guardVolume'
    },
  },
  type: 'parallel',
  states: {
    'Audio Play': {
      initial: 'Stop',
      states: {
        Play: {
          on: {
            setTogglePlay: {
              actions: 'SetTogglePlay',
              target: 'Stop',
            },
          },
        },
        Stop: {
          on: {
            setTogglePlay: {
              actions: 'SetTogglePlay',
              target: 'Play',
            },
          },
        },
      },
      on: {getPlayStatus: {actions: 'GetPlayStatus'}},
    },
    Song: {on: {getSong: {actions: 'GetSong'}}},
    Shuffle: {
      on: {
        getShuffle: {actions: 'GetShuffle'},
        setShuffle: {actions: 'SetShuffle'},
      },
    },
    Repeat: {
      on: {
        getRepeat: {actions: 'GetRepeat'},
        setRepeat: {actions: 'SetRepeat'},
      },
    },
    'Current Track Playtime': {on: {getCurrentTrackPlaytime: {actions: 'GetCurrentTrackPlaytime'}}},
    Playlist: {
      on: {
        getPlaylists: {actions: 'GetPlaylists'},
        setPlayPlaylist: {actions: 'SetPlayPlaylist'},
        setNextTrack: {actions: 'SetNextTrack'},
        setPreviousTrack: {actions: 'SetPreviousTrack'},
      },
    },
    Volume: {
      on: {
        getVolume: {actions: 'GetVolume'},
        setVolume: {
          actions: 'SetVolume',
          cond: 'guardVolume',
        },
      },
    },
    TouchOnHold: {on: {setTouchOnHold: {actions: 'SetTouchOnHold'}}},
  },
  id: 'TouchPortal iTunesPlayer Machine',
}, {
  actions: {
    GetSong: assign((context) => {
      let songName = '';
      if (iTunesObject.PlayerState !== ITPlayerStateStopped) {
        if (iTunesObject.CurrentStreamTitle) {
          if (iTunesObject.CurrentStreamTitle !== songName) {
            songName = iTunesObject.CurrentStreamTitle;
            const songObject = formatCurrentStreamTitle(songName);
            context.CurrentTrackName.value = songObject.track_name;
            context.CurrentTrackAlbum.value = `${context.PlayLists.currentName}`;
            context.CurrentTrackArtist.value = songObject.track_artist;

            return context;
          }
          return context;
        } else if (iTunesObject.CurrentTrack) {
          if (`${iTunesObject.CurrentTrack?.Name} | ${iTunesObject.CurrentTrack?.Album} | ${iTunesObject.CurrentTrack?.Artist}` !== songName) {
            const track_name = iTunesObject.CurrentTrack?.Name;
            const track_album = iTunesObject.CurrentTrack?.Album;
            const track_artist = iTunesObject.CurrentTrack?.Artist;

            context.CurrentTrackName.value = track_name;
            context.CurrentTrackAlbum.value = track_album;
            context.CurrentTrackArtist.value = track_artist;
            return context;

          }
        }
      }
      return context;
    }),
    GetVolume: assign((context) => {
      context.Volume.value = iTunesObject.SoundVolume.toString();
      return context;
    }),
    GetShuffle: assign((context) => {
      if (iTunesObject.PlayerState !== ITPlayerStateStopped) {
        context.Shuffle.value = iTunesObject.CurrentPlaylist.Shuffle ? "On" : "Off";
      }
      return context;
    }),
    GetRepeat: assign((context) => {
      const repeatMode = [ 'Off',
        'Song',
        'Playlist' ];
      if (iTunesObject.PlayerState !== ITPlayerStateStopped) {
        context.Repeat.value = repeatMode[iTunesObject.CurrentPlaylist.SongRepeat];
      }
      return context;
    }),
    GetCurrentTrackPlaytime: assign((context) => {
      if (iTunesObject.PlayerState !== ITPlayerStateStopped) {
        if (iTunesObject.CurrentStreamTitle) {
          context.CurrentTrackPlayedTime.value = "∞";
          context.CurrentTrackRemainingTime.value = "∞";
          return context;
        }

        const { PlayerPosition, CurrentTrack } = iTunesObject;
        const [ playedTime, remainingTime ] = parseTrackLenght({ PlayerPosition, CurrentTrack });
        context.CurrentTrackPlayedTime.value = playedTime;
        context.CurrentTrackRemainingTime.value = remainingTime;
      }
      return context;
    }),
    GetPlayStatus: assign((context) => {
      context.PlayerState.value = iTunesObject.PlayerState === 1 ? "Playing" : "Stopped";
      return context;
    }),
    GetPlaylists: assign((context, event: any) => {
      const { TouchPortalClient } = event.payload;
      // if (iTunesObject.PlayerState !== ITPlayerStateStopped) {
      const iTunesLibrary = getiTunesLibrary();
      if (!iTunesLibrary) {
        return context;
      }
      const playlists = iTunesLibrary.Playlists;
      const playlistNames = [];
      let updateNeeded = false;
      for (let i = 1; i <= playlists.Count; i++) {
        const playlist = playlists.Item[i];
        const playlistName = playlist.Name.replace(/’/, "'");
        const item = context.PlayLists.index[playlistName];
        if (item === undefined) {
          context.PlayLists.index[playlistName] = playlist;
          context.PlayLists.currentName = playlistName;
          updateNeeded = true;
        }
        playlistNames[playlist.Index] = playlistName;
      }

      context.PlayLists.value = playlistNames;
      if (context.PlayerState.value === 'Playing') {
        if (iTunesObject.CurrentPlaylist.Kind === 2) {
          context.CurrentTrackAlbum.value = iTunesObject.CurrentTrack.Album;
        } else {
          context.CurrentTrackAlbum.value = iTunesObject.CurrentPlaylist.Name;
        }
      }

      if (updateNeeded) {
        TouchPortalClient.choiceUpdateSpecific(
          context.PlayLists.id,
          context.PlayLists.value,
          'itunes_play_playlist'
        );
      }
      // }
      return context;
    }),
    SetTogglePlay: assign((context) => {
      const newState = context.PlayerState.value === 'Playing' ? 'Stopped' : 'Playing';
      context.PlayerState.value = newState;
      if (newState === 'Playing') {
        console.log(iTunesObject.PlayerState);
        iTunesObject.Play();
        // context.PlayLists.
        return context;
      }
      iTunesObject.Stop();
      return context;
    }),

    SetPlayPlaylist: assign((context, event:any) => {
      const { playlistName, shuffleStatus, repeatStatus } = event;
      const playlist = context.PlayLists.index[playlistName];
      // TODO: check if playlist is valid
      playlist.Shuffle = shuffleStatus === 'On' ? true : false;
      if (repeatStatus === 'Off') {
        playlist.SongRepeat = 0;
      }
      if (repeatStatus === 'Song') {
        playlist.SongRepeat = 1;
      } else {
        playlist.SongRepeat = 2;
      }

      context.Repeat.value = repeatStatus;
      context.Shuffle.value = shuffleStatus;
      context.PlayLists.currentName = playlistName;

      playlist.PlayFirstTrack();
      return context;
    }),
    SetNextTrack: () => {
      iTunesObject.NextTrack();
    },
    SetPreviousTrack: () => {
      iTunesObject.BackTrack();
    },
    SetVolume: assign((context, event: any) => {
      const currentVolume = iTunesObject.SoundVolume;
      const desiredRange = Number(event.TPEvent.data[0].value);
      if (context?._HoldAction[event.TPEvent.actionId]
        || [ "down", "up" ].includes(event.TPEvent.type)) {
        iTunesObject.SoundVolume = currentVolume + desiredRange;
      }
      return context;
    }),
    SetTouchOnHold: assign((context, event:any) => {
      context._HoldAction[event.TPEvent.actionId] = event.hold ? true : false;
      return context;
    }),
    SetRepeat: () => {
      const currentRepeat = iTunesObject.CurrentPlaylist.SongRepeat;
      iTunesObject.CurrentPlaylist.SongRepeat = (currentRepeat + 1) % 3 as ITPlaylistRepeatMode;
    },
    SetShuffle: () => {
      const currentShuffle = iTunesObject.CurrentPlaylist.Shuffle;
      iTunesObject.CurrentPlaylist.Shuffle = !currentShuffle;
    },
  },
  guards: {
    guardVolume: (context) => {
      return Number(context.Volume.value) >= 0 && Number(context.Volume.value) <= 100;
    },
  },
  services: {}
});

const getiTunesLibrary = (): IITSource | undefined  => {
  if (!iTunesObject.Sources) {
    console.log(pluginId, ': ERROR : iTunes.Sources does not exist');
    return;
  }
  for (let i = 1; i <= iTunesObject.Sources.Count; i++) {
    if (iTunesObject.Sources.Item[i].Kind == LIBRARY_TYPE) {
      return iTunesObject.Sources.Item[i];
    }
  }
  return;
};

const formatCurrentStreamTitle = (songName: string) => {
  const songObject = {
    track_name: '',
    track_album: '',
    track_artist: '',
  };
  const songNameArray = songName.split(' - ');
  if (songNameArray.length === 3) {
    songObject.track_album = songNameArray[2];
    songObject.track_name = songNameArray[1];
    songObject.track_artist = songNameArray[0];
  } else if (songNameArray.length === 2) {
    songObject.track_name = songNameArray[1];
    songObject.track_artist = songNameArray[0];
  } else if (songNameArray.length === 1) {
    songObject.track_name = songNameArray[0];
  }
  return songObject;
};

const parseTrackLenght = ({ PlayerPosition, CurrentTrack } : any) => {
  const trackDuration = CurrentTrack.Duration;
  const sec_per_min = 60;
  const playedMins = Math.floor(PlayerPosition / sec_per_min);
  const playedSec = PlayerPosition % sec_per_min;
  const playedTime
    = playedMins + ':' + (playedSec < 10 ? `0${playedSec}` : playedSec);
  const remaining = trackDuration - PlayerPosition;
  const remainingMins = Math.floor(remaining / sec_per_min);
  const remainingSec = remaining % sec_per_min;
  const remainingTime
    = '-'
    + remainingMins
    + ':'
    + (remainingSec < 10 ? `0${remainingSec}` : remainingSec);
  return [ playedTime, remainingTime ];
};

