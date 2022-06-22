import { Object as WinaxObject } from 'winax';
import { assign, createMachine } from 'xstate';

import { ITPlayerStateStopped, LIBRARY_TYPE, pluginId } from '../consts';
import { IITSource } from '../interfaces/IITSource';
import { _iTunes } from '../interfaces/iTunes';
import { ITPITunesStateContext } from './interfaces';

const iTunesObject = new WinaxObject("iTunes.Application") as _iTunes;

/* Creating a state machine. */

export const player
/** @xstate-layout N4IgpgJg5mDOIC5QBUD2BXAxgCwAqoCcAXAQwBsACAS2XQDs5cySBPMAigWRJyoYDoAgughVUFJq36SWAYlhgiAZSKoADolBrUsKkTF1NIAB6IAtACYAjABZ+AZgCsADgsAGG1ccB2b27cAbDYANCAsiG78AfZWAJz2sTY23u6OLnEAvhmhaFh4hKSUNPSMzGwc3LwCwqLiMvwq6vKKMkbauvqohkgm5tZ2Tq4eXr7+QaHhCM7eUTHxicmpLlk5GDj4xOTUtAywMuxcPNh8YEIiYhJlsjBEMiokROjwPe16BkamCJb2FlHezo44j8LLFYlYfhNzFY-A4As43LE4f5vMkbM4ViBcusCltirt9hUjicGl0oNdFEpSW0dG8uh8+nF+M5nFYgqD3FY3NDIQhvLEZtFUjZHG4hl4MVj8psijtSqwDpVjgIlNh0AAzNVkMDk5SqjVa6kdd49T6WCyOfhubwBRG+EVw+xuRw82IuWbuewokX2TwWCVrKWFbYlPZlBVEgQAJTAajADx10djD0NtO6oFNFnN-D8-JZTrcFj8FhCYUQVnLsXdBbcCWL8Ni-ryGyDeLl5UOVVOAGF0AQCGA6EQKMgCDwANaXVj6AC22puPb7A6II-HMhnYBTnTTvS+FhtTLitmZjgSAKSPP6syBCxSTuW2UxAebuNloflhM70jKZCosCIOpkH8-2eLQaS3eld0LJkWQCE9y2cYUnQsHlogCKsQX8BFvEyB9JWfGUQwJDslVOQDf3-BRbjKMi-03Y10z6Jx+DBDCuWcAJolFHlHBsStBQLWJMP5P1cKfHECPxMMPxIr9WCAijFAAOTAYxl1HTAxzoukTUY34bU8HxbALHjnB5GwAj0n4BKElJG2xaVg0k99iOJGiFNufsADcxCeFcNK07cMySfg4gM2JphiFILHsHlPQtfjWKwkTVibcTHLbcNPwANVQMh0FnHUcry2cAogs00JY5xQViDkuW8HkzHsGJYXhPkUQsZlbNE1KHNbN920VYkivy7VKOGkqXjA+idzMRwLIcZwfVcEFzW5UsviaqwWqtfkbA66ZksfHqW1fIjBoESUAHk6AACVyiBmmXANrrusgIFKnSvhGBxorm60fk8KqeSsEEtprQElvNESHzoVAIDgIw8LSvqzojU4aguepWkmo1tIYr5ERC0VrD3djONM9bouY2DCwQjjeN+uzAxfQipJc6pzjqMoGlUDQcdTMqnC2wZ3CqtJM3sdiLy28zHFp8y2UZ7r7JO1nnPO9HOcnSZQNxwLzDihwXFF105eiqX1rMFJtpsJ1ywScL7CZ-D0v6zKZMpOgoA+-HGpZI2hjFs3JYCHlmT4qyeJFMVHGd5HTrZjWGj1TUN358DPr94XjdFU2JYtyZORFKtPUQn0rDj3qE-VtH+ETOMiB9mbJezwO8-N0P1pB8t0JrGq0QRSvVacgba4XftB2HdSJzXKgJt1gXM5bgOTfFjvYsCK95iSW85qHlmR-d1zv3IpvTU9SIItcKqkmmOWeRSZx0ME-x+RwlKVYPjLpKG3KRrP8wtsZgFmwvYAIHhXDtU7pMb4YMEgpHLCKfM94P7Mwkt-dmpwrq3XugAjarpLQIWtKyCye5bTA0dHYcGIN3DYRcHLfe6C3Y-wYHg2a7EFqQxWoCeqltbYDCRK4ZILgPABCyFkIAA */
= createMachine({
  context: {
    PlayerState: { id: 'itunes_playing_state', value: '' },
    Volume: { id: 'itunes_volume', value: '' },
    CurrentTrackAlbum: { id: 'itunes_current_track_album', value: '' },
    CurrentTrackName: { id: 'itunes_current_track_name', value: '' },
    CurrentTrackArtist: { id: 'itunes_current_track_artist', value: '' },
    CurrentTrackAlbumArtwork: {
      id: 'itunes_current_track_album_artwork',
      value: '',
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
        | 'setStop'
        | 'setPlay'
        | 'setPlayPlaylist'
        | 'setNextTrack'
        | 'setPreviousTrack'
        | 'setVolume'
        | 'setTouchOnHold'
        | 'guardVolume'
        | 'searchArtwork'
        | 'searchArtworkSuccess'
        | 'searchArtworkFailure'
        | 'onError'
        | 'onDone';
    },
  },
  type: 'parallel',
  states: {
    'Audio Play': {
      initial: 'Stop',
      states: {
        Play: {
          on: {
            setStop: {
              actions: 'SetStop',
              target: 'Stop',
            },
          },
        },
        Stop: {
          on: {
            setPlay: {
              actions: 'SetPlay',
              target: 'Play',
            },
          },
        },
      },
      on: {getPlayStatus: {actions: 'GetPlayStatus'}},
    },
    Song: {on: {getSong: {actions: 'GetSong'}}},
    Shuffle: {on: {getShuffle: {actions: 'GetShuffle'}}},
    Repeat: {on: {getRepeat: {actions: 'GetRepeat'}}},
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
        playlistNames.push(playlistName);
      }
      context.PlayLists.value = playlistNames;

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

    SetPlay: assign((context) => {
      context.PlayerState.value = "Playing";
      iTunesObject.Play();
      return context;
    }),
    SetStop: assign((context) => {
      context.PlayerState.value = "Stopped";
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
    })
  },
  guards: {
    guardVolume: (context) => {
      return Number(context.Volume.value) >= 0 && Number(context.Volume.value) <= 100;
    }
  }
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

