/* eslint-disable no-console */
import { searchSong } from '@tbogard/itunes-search';
import axios from 'axios';
import fs from 'fs';
import jetpack from 'fs-jetpack';
import path from 'path';
import { Object as WinaxObject } from 'winax';
import { assign, createMachine } from 'xstate';

import { artNotFoundBase64, defaultImageArtBase64, ITArtworkFormatBMP, ITArtworkFormatJPEG, ITArtworkFormatPNG, ITPlayerStateStopped, ITPlaylistRepeatMode, ITTrackKindURL, LIBRARY_TYPE, loadingImageArtBase64, pluginId } from '../consts';
import { IITSource } from '../interfaces/IITSource';
import { _iTunes } from '../interfaces/iTunes';
import { ITPITunesStateContext } from './interfaces';

const iTunesObject = new WinaxObject("iTunes.Application") as _iTunes;

/* Creating a state machine. */

export const player
/** @xstate-layout N4IgpgJg5mDOIC5QBUD2BXAxgCwAqoCcAXAQwBsACAS2XQDs5cySBPMAigWRJyoYDoAgughVUFJq36SWAYlhgiaKFDJgZiUAAdUsKkTF1NIAB6IATAEYArPwAM1gJwBmRwBZLdy+fN2AHNYANCAsiNZ2jvwAbH7m1uZ+dv7Wzj5uAL7pwWhYeISklDT0jMxsHNy8AsKi4jL8AMpEqFryisqq6qXGOnoGqEZIphY29k6uHl4+ycGhCE5R-NYBUUuWzm5u5iuZ2Rg4+MTk1LQMsDLsXDzYfGBCImISpbIwRDKNJETo8IM9+obGZgQrkiflSdgA7OC-JDvFCojNEM5nH5+OD3I47FE1l4oX4MlkQDl9vkjkVTudylcbg1+lBnop6rTuro-v0AYgPLZvHZ1uYNr43FFHAiEJZBeZUZDIW5rODNo4fDtCXs8odCicSqwLhVrgJ6th0AAzQ1qelEfVGk1gZm9f6DQFuCL8BWOOUytyOUGOFYiyyQ50QmXOTHhPzufG7XIHArHYpnUraql6g3G00Kc0pq021kDUAOyyWfhxZyWKJIqLgsvgoIhRCOQtJNypcwueuOeLOJVE1UxsmasqXSq3ABKYC0YA+ZtH44+2b6uaGCEdkRbyKSfhicVdIt8qX461S1k2bjDsXMXZV0dJGvjWspQ-404nRFaRCfs5+LPn7KXnmifvMZFXQxLxt1rUV3FsDYcXBP0NwCc8CW7K91TjClB11W4AGF0AIAgwDoIgKGQAgeAAa0eVgDAAWzAM0cLwgilFIzAyJkGjrU-W02XtREViLCE8WsJxS18CEd0sFwi2DcEIRLR1wUAi8oxJVDyQTe9MOkUoyCoWAXxeGRdP075tC-O08w5CF+G8Pw-TlRxXUk5wRU9NwbM9LYj2sKJi2sZTiTVWN1LvDDqSMvSX3TGQIv0ucLMXYEbK8XzIQhNZIRFMNwSLds1hSYNnCcRDI0C3sb3QnVwp0yLXwAOTAExmPI+KeMspc7AlEsfPBYMNxlWIsr-VwxPiOwNm2JDL1U4L+0TB9YqixRcHwgA3MQvhIlquJzH9XDsfg7MU8wYUktI3BFRTnH4E9oT8WIoh5Xw-ACntrzQjSwoEAA1VAyHQWizV+-7aNahcHX8ewMRiRIEjxZFfWDQsw3G-xUjleIolelDZtvAcqp+v6Abo9NgeJsG9qFVFPEcvkqxAlzwILGV7ACWCELWeVsZmvs8fmrTuwAeToAAJP6IFfIXRfFineKBDEi3CcbHXhqFLF9KF3OEk6+QLIr2xeqaVKC3nKqTbDcPwwjiJYijBGIAB3QgyIaUhiHqCcCBwWQIH6W4+FW1AyNuZCeYqz6CYtxjra21iKHtognYIF33ndz2cAQAPUEwD5DAAbTsABdWX2viSJZKieVN02KJ4XAuJfHsBxhMDKxYm5k3w9CyP+AYq2iNju3Hed12SDTsfvfYAhCH4LRmCIQ1CGo-hQ87j7u-N3vLaYm3yPj4fk9H8evewTO6EDnP5wL4udu-OWy9RTEq9iGu69mPkkWSvlQRLUFZQjZUxtyrr3xpvPuO9B770Ts7WQPB5wewntgEui5FI7ibO5PqQYFTWD9ONDuwCQqgIfN2CQM0PZEAMHQKAsBXzkModQ5BEMcoViOgWDKR5eq+l8tdWu8QTplhcHZLGSo6CoAgHAYwq8CFzU0tSaoDw6gaFvglQEzhZKLEFNCWuMoXQXXAikCUrovK+HrHKSs+D3qEP5nI+4tRSiu2aIwxAmV9HBhuopJwSxfArG9BYtSMivq3HkXY1gTi5iM1mE2BYQo7IbBwWwv0fjcZmwfIyKhYS3Dgl9MJdyMR-BYhbJ4LEnYjZlUsQEnuFpUycTMtxcGHIsn1ypnZBwoJJIRFBMI0qb1-F81kQId8RAMmNPft4dydMkRrDOmiQ23ScamwjmA7eMdbaURYBxYZO4EhciRJrZEUT3BJIWRvBaNU4rKLaouWUN0YjVldJiSsXk9GzE8JWZKax2xeLFJCI5XciFaTJqDC59SEBvISONR67ZMmCn8IjKSaJ1g4LLOEV0vyQHWIEFLMWZAICbKZlom6wkWmgh5JNOZYd0X9Kjv3XeccE5JxTm7c06ckHAr2msKGAQFTrDshuEZFgmw5VkjKWS0IEhbDRVYqlW9o4D1WfSkeABROgEAEEnzCbBCUj00Q4KPHiWCaDhKLGKuK6F3oSnkrXlKwJMqaWQIVcnDJfgdw8pspYRIjlYgRGcGSwBZTekpIFiqUhQU6F8AYWyuWmSNYjB8m0psPkbAQklRU82YTAK+hRKBUEQYUiZIepkTIQA */
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
    TouchPortalSettings: {},
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
        | 'getArtwork'
        | 'setShuffle'
        | 'setRepeat'
        | 'setTogglePlay'
        | 'setPlayPlaylist'
        | 'setNextTrack'
        | 'setPreviousTrack'
        | 'setVolume'
        | 'setTouchOnHold'
        | 'setSettings'
        | 'guardVolume'
        | 'guardGetArtwork'
        | 'lockSearchArtwork'
        | 'actionSearch'
        | 'runSearch';
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
    'Current Track Artwork': {
      initial:'StartSearch',
      states: {
        StartSearch: {
          entry: 'LoadingArtwork',
          invoke: {
            src: 'GetArtwork',
            onDone: [
              {
                actions: 'ApplyArtwork',
                target: 'EndSearch',
              },
            ],
            onError: [
              {
                actions: 'ApplyArtwork',
                target: 'EndSearch',
              },
            ],
          },
        },
        EndSearch: {type: 'final'},
      },
      on: {
        actionSearch: {
          cond: 'guardGetArtwork',
          target: '.StartSearch',
        },
      },
    },
    'Touch Portal Settings': {on: {setSettings: {actions: 'SetSettings'}}},
  },
  id: 'TouchPortal iTunesPlayer Machine',
}, {
  actions: {
    GetSong: assign((context: any) => {
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
    GetVolume: assign((context: any) => {
      context.Volume.value = iTunesObject.SoundVolume.toString();
      return context;
    }),
    GetShuffle: assign((context: any) => {
      if (iTunesObject.PlayerState !== ITPlayerStateStopped) {
        context.Shuffle.value = iTunesObject.CurrentPlaylist.Shuffle ? "On" : "Off";
      }
      return context;
    }),
    GetRepeat: assign((context: any) => {
      const repeatMode = [ 'Off',
        'Song',
        'Playlist' ];
      if (iTunesObject.PlayerState !== ITPlayerStateStopped) {
        context.Repeat.value = repeatMode[iTunesObject.CurrentPlaylist.SongRepeat];
      }
      return context;
    }),
    GetCurrentTrackPlaytime: assign((context: any) => {
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
    GetPlayStatus: assign((context: any) => {
      context.PlayerState.value = iTunesObject.PlayerState === 1 ? "Playing" : "Stopped";
      return context;
    }),
    GetPlaylists: assign((context: any, event: any) => {
      const { TouchPortalClient } = event.payload;
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
    SetTogglePlay: assign((context: any) => {
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

    SetPlayPlaylist: assign((context: any, event:any) => {
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
    SetVolume: assign((context: any, event: any) => {
      const currentVolume = iTunesObject.SoundVolume;
      const desiredRange = Number(event.TPEvent.data[0].value);
      if (context?._HoldAction[event.TPEvent.actionId]
        || [ "down", "up" ].includes(event.TPEvent.type)) {
        iTunesObject.SoundVolume = currentVolume + desiredRange;
      }
      return context;
    }),
    SetTouchOnHold: assign((context: any, event:any) => {
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
    SetSettings: assign((context: any, event: any) => {
      const { payload } = event;
      context.TouchPortalSettings = {...payload};
      return context;
    }),
    ApplyArtwork: assign((context:any, event:any) => {
      const songName = context.CurrentTrackName.value;
      const artist = context.CurrentTrackArtist.value;
      context.lastSearchSong = `${songName} - ${artist}`;
      context.CurrentTrackAlbumArtwork.value = event.data as string;
      return context;
    }),
    LoadingArtwork: assign((context: any) => {
      context.CurrentTrackAlbumArtwork.value = loadingImageArtBase64;
      return context;
    })
  },
  guards: {
    guardVolume: (context: any) => {
      return Number(context.Volume.value) >= 0 && Number(context.Volume.value) <= 100;
    },
    guardGetArtwork: (context: any) => {
      const songName = context.CurrentTrackName.value;
      const artist = context.CurrentTrackArtist.value;
      if (context.PlayerState.value === "Stopped") {
        return false;
      }
      return context.canSearchImage === true && context.lastSearchSong !== `${songName} - ${artist}`;
    }
  },
  services: {
    GetArtwork: () => {
      if (iTunesObject.CurrentStreamTitle) {
        const streamTitle = iTunesObject.CurrentStreamTitle.split(' - ');
        return getSongInfo(`${streamTitle[1]} - ${streamTitle[0]}`);
      }
      const songName = iTunesObject?.CurrentTrack?.Name;
      const artist = iTunesObject?.CurrentTrack?.Artist;
      if (songName && artist) {
        const lastSearchSong = `${songName} - ${artist}`;
        return getSongInfo(lastSearchSong);
      }
      return getSongInfo(null);
    },
  }
});

// const getSongInfo = async (songName:string)

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

const getSongInfo = async (song: string|null): Promise<string | null> => {
  // we can inquire right away if the media we are playing online media
  if (song === null) {
    console.log('Song was passed as null string, returning default artwork image.');
    return defaultImageArtBase64;
  }
  if (iTunesObject.CurrentTrack.Kind === ITTrackKindURL) {
    try {
      console.log(`Searching artwork for track "${song}"`);
      const result = await searchSong(song, { limit: 1, timeout: 5000});
      if (result.resultCount > 0) {
        const url = result.results[0].artworkUrl100.replace("100x100", "500x500");
        const response = await axios.get(url, {responseType:'arraybuffer'});
        const data = Buffer.from(response.data);
        console.log(`Track "${song}" has an online artwork!`);
        return data.toString('base64');
      }
      console.log(`Track "${song}" doesn't has an artwork, using default for not found.`);
      return artNotFoundBase64;
    } catch (e: Error | any) {
      console.log('Image not found', e);
      return artNotFoundBase64;
    }
  }

  //otherwise we can catch the image offline...
  if (iTunesObject.CurrentTrack.Artwork.Count === 0) {
    console.log(`Current Track "${iTunesObject.CurrentTrack.Name}" has no artwork, using TPiTunesX default one`);
    return defaultImageArtBase64;
  }

  let originImage;
  // checking if output exists.

  if (!jetpack.exists(path.resolve(process.cwd(), 'output'))) {
    console.log('creating output folder for artworks');
    jetpack.cwd(process.cwd());
    jetpack.dir('output');
  }

  switch (iTunesObject.CurrentTrack.Artwork.Item[1].Format) {
    case ITArtworkFormatJPEG:
      originImage = path.join(process.cwd(), 'output', "album_artwork_temp_orig.jpg");
      break;
    case ITArtworkFormatPNG:
      originImage = path.join(process.cwd(), 'output', "album_artwork_temp_orig.png");
      break;
    case ITArtworkFormatBMP:
      originImage = path.join(process.cwd(), 'output', "album_artwork_temp_orig.bmp");
      break;
    default:
      return "";
  }
  iTunesObject.CurrentTrack.Artwork.Item[1].SaveArtworkToFile(originImage);
  console.log(`Current Track "${iTunesObject.CurrentTrack.Name}" has artwork embebed. using it for display.`);
  return fs.readFileSync(originImage).toString("base64");
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
