import { searchSong } from '@tbogard/itunes-search';
import { Object as WinaxObject } from 'winax';
import { assign, createMachine } from 'xstate';

import { ITPlayerStateStopped, LIBRARY_TYPE, pluginId } from '../consts';
import { IITSource } from '../interfaces/IITSource';
import { _iTunes } from '../interfaces/iTunes';
import { ITPITunesStateContext } from './interfaces';

const iTunesObject = new WinaxObject("iTunes.Application") as _iTunes;

/* Creating a state machine. */

export const player
/** @xstate-layout N4IgpgJg5mDOIC5QBUD2BXAxgCwAqoCcAXAQwBsACAS2XQDs5cySBPMAigWRJyoYDoAgughVUFJq36SWAYlhgiAZSKoADolBrUsKkTF1NIAB6IATAEYAzPwCc92wHYrVs7YuOArABYzAGhAWRF8bAAYLBysADm9PCO8LAF9EgLQsPEJSShp6RmY2Dm5eAWFRcRl+FXV5RRkjbV19VEMkE3NrOwdnV3cvXwCghDjQ-lCzUNDY608zBO9k1IwcfGJyaloGWBl2Lh5sPjAhETEJfNkYIhkVEiJ0eFaGvQMjUwQIz34ANkcnUM-7MYeJwDcwzUYReyeKK2b4whYgNLLTJrHKbbaFPYHSrNKDnRRKHH1HRPZovcyhKL8byOT6eRzQixmKIWOIghC2Ty2cH2aJTWzeKxJFIIpYZVbZDZ5Vg7Ir7AQANVQZHQAFswHiiIrlWqiY1nq1XuMLFTYq4GUyWRY2e5ufYft4olYnPZ4YixVl1rktvkZZiBEpsOgAGZBsjqi4B4OhsC6kktUCG0I2C1mTyfFkO0JpxxsiyMkbhexRGm2JNRKKeV2ilYe1FSgq7YqHABKYDUYBuGtb7Zusaa8baCHGZi+DoFHLin3C5dzFtG4yT-yZjqdVfSNZRku90oxTf4AGF0AQCGA6EQKMgCDwANanVj6NUaw-H09ES83mQPmMPYn9slvKF+E8J1Qi8R0fEZKw2U+KxHHnCYpisGY5jXJFxU9NEfV3OVDhkMgqFgIgNTwgiiHuLRf31BNyRGalaU+VM2R+SlC3sIEkNsMwzGSYU6FQCA4CMN0NwlL10UbHCjjKO8WGkfI+yowcXBHWYun5R1bGZNlvG8T5+CQlxgM8UCEkdVD3U3MSsIkrFShOCoqg0H89VJA1EEcHNAmCAV+ArQykJMiwYnMkSMPrX09zs8p5OcuN-2AtkAttDloVhT4QuRUTMJ3Gz-UJWK-zchBqVzLNjVY3k4n5KwMvQuttwbWUsS1VVvwolyB1eEqvLeR1kvtDSolq2st3Epr-UDEMwwU1zqOKzzBkZRlbWLf4ywrYbLOyxq-RbNsOyIGbOuCBbEGsZx4MXTjyxcWxNqy8LsKxZ8TzPC8r0wW9PyoHUCsUrrToQRw3EuxDkIseZhWEzKwoaiLJJIwijv-brBmhAsIV6WwOK4+7YbG3bkaKswoJ6oLkocSny24nigA */
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
    },
    CurrentStreamTitle: {
      id: 'itunes_current_stream_title',
      value: '',
    },
    CurrentStreamURL: {
      id: 'itunes_current_stream_url',
      value: '',
    },
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
        | 'setVolume'
        | 'toggleShuffle'
        | 'setStop'
        | 'setPlay'
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
    Volume: {on: {getVolume: {actions: 'GetVolume'}}},
    Shuffle: {on: {getShuffle: {actions: 'GetShuffle'}}},
    Repeat: {on: {getRepeat: {actions: 'GetRepeat'}}},
    'Current Track Playtime': {on: {getCurrentTrackPlaytime: {actions: 'GetCurrentTrackPlaytime'}}},
    Playlist: {on: {getPlaylists: {actions: 'GetPlaylists'}}},
  },
  id: 'TouchPortal iTunesPlayer Machine',
}, {
  actions: {
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
    GetSong: assign((context) => {
      let songName = '';
      if (iTunesObject.PlayerState !== ITPlayerStateStopped) {
        if (iTunesObject.CurrentStreamTitle) {
          if (iTunesObject.CurrentStreamTitle !== songName) {
            songName = iTunesObject.CurrentStreamTitle;
            const songObject = formatCurrentStreamTitle(songName);
            context.CurrentTrackName.value = songObject.track_name;
            context.CurrentTrackAlbum.value = iTunesObject.CurrentStreamURL;
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
      context.Volume.value = iTunesObject.SoundVolume;
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

      context.PlayerState.value = iTunesObject.PlayerState ? "Playing" : "Stopped";
      return context;
    }),
    GetPlaylists: assign((context, event: any) => {
      const { TouchPortalClient } = event.payload;
      if (iTunesObject.PlayerState !== ITPlayerStateStopped) {
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
            context.PlayLists.index[playlistName] = playlistName;
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
      }
      return context;
    }),
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

