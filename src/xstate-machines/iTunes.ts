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
/** @xstate-layout N4IgpgJg5mDOIC5QBUD2BXAxgCwAqoCcAXAQwBsACAS2XQDs5cySBPMAigWRJyoYDoAgughVUFJq36SWAYlhgiAZSKoADolBrUsKkTF1NIAB6IAtAGYAbAAZ+ViwFYATFYDsATjfO3F548cAGhAWRAsARit+Cw8ADmdnGwD3RwAWcMcAX0zgtCw8QlJKGnpGZjYObl4BYVFxGX4VdXlFGSNtXX1UQyQTc2s7Bxd3Lx8-AODQhFSbC2i4n3DY1KtYm3DU1OzcjBx8YnJqWgZYGXYuHmw+MCERMQly2RgiGRUSInR4Xo69AyNTBCWNyxfgeAKOCypCKRDw2WaTRAbRzzeIJWyxJy2LY5EB5PaFQ4lE5nSqXa6NbpQJ6KJSU9o6X7df79KxRDKxVnOCyxWEeZyxIIhRAC5woyKOSJOWbhba43YFA7FY5lVjnKpXAQANVQZHQAFswNSiNrdQb6Z0-r0AUC5ksPB5wlyeTY+QKEYCMvZ1m43BCZjZ0h5VrK8QqikdSqdymqyQIlNh0AAzRNkQ3PeNJlNgc2Mnqga0WNzhaIQuIS1JFmxc93hdZzGLxDYzcIeVICkPy-bhokqioXao3ABKYDUYHeRuHo-eOa6eb6gMLxbiq29jlmNis4Rr4TcqRRrmsMxi2J2+S7hOVUdVpIH-AAwugCAQwHQiBRkAQeABrB6sfQGo0HyfF8iA-b8ZH-bNvgZWdmUBdIohdTcrDSVlUjBNx3QhOwG0WZYVw2DszwJJVIxJfsNRuGQyCoWAiCNajaKIL4tBgy1836R1QSrRIoSsINYm8d1+OLXCljXCUXAsIj8UVCNiWjG9KOkcoaLoloXnKRi6Jndj50sRJQQsSE235OFwh3d0fRwhZ1yDVJ+WyHE6FQCA4CMUNz1IhTrwo8lanuBo2mgi0mStcxnAc6IRShJwpTLd1jI8fhfHZKs7WBQsZLDC8yMUvyajuepykaVQNBC3M4LMdC3HsJxIvCCx1lhTxMKFBBjNqrk0ucDLlmyrz5N7GNbwC4rWF0sKOMBFxiyGBqmpbGxYndSL6wWLl+O5RwvAGkihqvPt1XJWk6CgSa52tFxavm9JFthFb2tbPcG3FSU1wiPa5J7Q6RuUk19Sg1jQsu8xrrqlw7ua5arKiXDIpQ+1HDWaScU8-afvI464wTZNUwuqrwduxroceqYLKSfcm2atssjRzsMcvLHYyHEcxyIAnwpmnwIYW0ma1cOGFgcKwj1bL7uyZ-LsZuIDn1fd9P0wH8IKoM0KtgrmzCJ+qoaWsnECsBJ9yLfC1kI+niO+qXfJllTWDUjmNb0q6eeJ+6YfazKqYFJIMi5CXcp8o6Wc56btYlXm9Ye90zFiEFbB3MFXDieOPCczIgA */
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
      currentName:''
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
        | 'setPlayPlaylist'
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
    Playlist: {
      on: {
        getPlaylists: {actions: 'GetPlaylists'},
        setPlayPlaylist: {actions: 'SetPlayPlaylist'},
      },
    },
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

      context.PlayerState.value = iTunesObject.PlayerState === 1 ? "Playing" : "Stopped";
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
      }
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

