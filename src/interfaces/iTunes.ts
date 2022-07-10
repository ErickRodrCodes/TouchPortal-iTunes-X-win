import { ITPlayerState } from '../consts';
import { IITPlaylist } from './IITPlaylist';
import { IITSourceCollection } from './IITSourceCollection';
import { IITTrack } from './IITTrack';

export interface _iTunes {
  /**
   * Gets the current Player Position
   */
  PlayerPosition: any; // Property => int PlayerPosition () {get} {set}
  /**
   * gets the current playlist
   */
  CurrentPlaylist: IITPlaylist; // Property => IITPlaylist CurrentPlaylist () {get}
  /**
   * Gets the current stream title
   */
  CurrentStreamTitle: any; // Property => string CurrentStreamTitle () {get}
  /**
   * gets the current stream url
   */
  CurrentStreamURL: any; // Property => string CurrentStreamURL () {get}
  /**
   * gets the current track
   */
  CurrentTrack: IITTrack; // Property => IITTrack CurrentTrack () {get}
  /**
   * gets the current visual
   */
  CurrentVisual: any; // Property => IITVisual CurrentVisual () {get} {set}
  /**
   * gets the sound volume
   */
  SoundVolume: number; // Property => int SoundVolume () {get} {set}

  /**
   * A method that is called when the user clicks the play button.
   */
  Play():void; // Method => void Play ()

  /**
   * It pauses the current track.
   */
  Pause(): void; // Method => void Pause ()

  /**
   * It stops the current track.
   */
  Stop(): void; // Method => void Stop ()

  /**
   * A method that is called when the user clicks the next button.
   */
  NextTrack(): void; // Method => void NextTrack ()

  /**
   * A method that is called when the user clicks the back button.
   */
  BackTrack(): void; // Method => void BackTrack ()

  /**
   * A method that is called when the user clicks the back button.
   */
  Rewind(): void; // Method => void Rewind ()

  /**
   * A method that is called when the user clicks the fast forward button.
   */
  FastForward(): void; // Method => void FastForward ()

  /**
   * A collection of sources.
   */
  Sources: IITSourceCollection;

  /**
   * A property that is used to get the current state of the player.
   */
  PlayerState: ITPlayerState; //Property => ITPlayerState PlayerState () {get}
}

/**
 * current types on the configuration
 * add as necessary
 */
export type iTunesTypes =
  "itunes_playing_state" |
  "itunes_volume" |
  "itunes_current_track_album" |
  "itunes_current_track_name" |
  "itunes_current_track_artist" |
  "itunes_current_track_album_artwork" |
  "itunes_current_track_play_time" |
  "itunes_current_track_remaining_time" |
  "itunes_repeat" |
  "itunes_shuffle" |
  "itunes_playlists" |
  "itunes_play_playlist" |
  "itunes_toggle_play_action" |
  "itunes_next_track" |
  "itunes_back_track" |
  "itunes_shuffle_action" |
  "itunes_repeat_action" |
  "itunes_volume_adjust" |
  "itunes_volume_up" |
  "itunes_volume_down" |
  "itunes_current_stream_url" |
  "itunes_current_stream_title";

/**
 * Sets the values for the state of iTunes
 */
export interface _iTunesVisualState {
  [key: string]: any | (() => any);
  PlayerState: {
    id: iTunesTypes;
    value: string;
  };
  Volume: {
    id: iTunesTypes;
    value: number;
  };
  CurrentTrackAlbum: {
    id: iTunesTypes;
    value: string;
  };
  CurrentTrackName: {
    id: iTunesTypes;
    value: string;
  };
  CurrentTrackArtist: {
    id: iTunesTypes;
    value: string;
  };
  CurrentTrackAlbumArtwork: {
    id: iTunesTypes;
    value: string;
  };
  CurrentTrackPlayedTime: {
    id: iTunesTypes;
    value: string;
  };
  CurrentTrackRemainingTime: {
    id: iTunesTypes;
    value: string;
  };
  CurrentStreamTitle: {
    id: iTunesTypes;
    value: string;
  };
  CurrentStreamURL: {
    id: iTunesTypes;
    value: string;
  };
  Repeat: {
    id: iTunesTypes;
    value: string;
  };
  Shuffle: {
    id: iTunesTypes;
    value: boolean;
  };
  Playlists: {
    id: string;
    valueChoices: any[];
    value: any;
    index: {
      [key: string]: IITPlaylist;
    }
  };
}

/* The configuration for the plugin. */
export interface iTunesTPConfig {
  pluginId: string;
  enableLogs?: boolean;
  displayArtwork?: boolean;
  trackTimers?: boolean;
  volumeRoundedByNumber?: number;
}
