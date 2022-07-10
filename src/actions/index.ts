/* eslint-disable no-console */
import { searchSong } from "@tbogard/itunes-search";
import { ReturnType } from '@tbogard/itunes-search/dist/typings/types';

import { ITPlayerState, ITPlayerStateStopped, ITPlaylistRepeatMode, ITSourceKind } from "../consts";
import { IITPlaylist } from "../interfaces/IITPlaylist";
import { IITTrack } from "../interfaces/IITTrack";
import { IITURLTrack } from "../interfaces/IITURLTrack";
import { iTunesObject } from "../iTunes/object";

export const getCurrentPlaylist = (): IITPlaylist => {
  return iTunesObject.CurrentPlaylist;
};

export const getCurrentTrack = (): IITTrack | IITURLTrack => {
  return iTunesObject.CurrentTrack;
};

export const getCurrentTrackType = (): ITSourceKind => {
  return getCurrentTrack().Kind;
};

export const playerStop = (): ITPlayerState => {
  iTunesObject.Stop();
  return iTunesObject.PlayerState;
};

export const togglePlay = (): ITPlayerState => {
  if(iTunesObject.PlayerState === ITPlayerStateStopped) {
    iTunesObject.Play();
  } else {
    iTunesObject.Pause();
  }
  return iTunesObject.PlayerState;
};

export const nextTrack = (): void => {
  iTunesObject.NextTrack();
};

export const backTrack = (): void => {
  iTunesObject.BackTrack();
};

export const shuffle = (): void => {
  const currentPlaylist = getCurrentPlaylist();
  currentPlaylist.Shuffle = !currentPlaylist.Shuffle;
};

export const repeat = (): void => {
  const currentPlaylist = getCurrentPlaylist();
  currentPlaylist.SongRepeat = (currentPlaylist.SongRepeat + 1) % 3 as ITPlaylistRepeatMode;
};

export const volumeUp = (): void => {
  const currentVolume = iTunesObject.SoundVolume;
  if (currentVolume <= 100) {
    iTunesObject.SoundVolume = currentVolume + 1;
  }
};

export const volumeDown = (): void => {
  const currentVolume = iTunesObject.SoundVolume;
  if (currentVolume >= 0) {
    iTunesObject.SoundVolume = currentVolume - 1;
  }
};

export const getCurrentTrackAlbumArtwork = (): void => {
  const currentTrack = getCurrentTrack();
  if (currentTrack.Artwork.Count === 0) {
    return;
  }
};

export const getSongInfo = async (songName: string): Promise<string | void> => {
  try {
    const result: ReturnType = await searchSong(songName, { limit: 1 });
    if (result.resultCount === 0) {
      return "";
    }
    return result.results[0].artworkUrl100.replace("100x100", "500x500");
  } catch (error: any) {
    console.error(`Search of artwork for song ${songName} failed: ${error.message}`);
  }
};

