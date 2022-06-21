import {
  ITPlaylistKind,
  ITPlaylistPrintKind,
  ITPlaylistRepeatMode,
  ITPlaylistSearchField
} from '../consts';
import { IITSource } from './IITSource';
import { IITTrackCollection } from './IITTrackCollection';

/**
 * Represents a playlist.
 * A playlist is always associated with an IITSource.
 * You can retrieve all the playlists defined for a source using IITSource::Playlists().
 * For convenience, you can retrieve the main library playlist using IiTunes::LibraryPlaylist().
 * You can create a new playlist using IiTunes::CreatePlaylist().
 */
export interface IITPlaylist {
  [key: string]: any | (() => any);
  /**
   * Delete this playlist.
   */
  Delete(): void;
  /**
   * Start playing the first track in this playlist.
   */
  PlayFirstTrack(): void;
  /**
   * Print this playlist.
   * @param showDialog
   * @param printKind
   * @param theme
   */
  Print(showDialog: boolean, printKind: ITPlaylistPrintKind, theme: string): void;
  /**
   * Returns a collection containing the tracks with the specified text.
   * @param searchText
   * @param searchFields
   */
  Search(searchText: string, searchFields: ITPlaylistSearchField): IITTrackCollection;
  /**
   * Returns the kind of the playlist.
   */
  Kind: ITPlaylistKind;
  /**
   * Returns an IITSource object corresponding to the source that contains the playlist.
   */
  Source: IITSource;
  /**
   * Returns the total length of all songs in the playlist (in seconds).
   */
  Duration: number;
  /**
   * Getter: Returns true if songs in the playlist are played in random order.
   * Setter: Set whether songs in the playlist should be played in random order.
   * Boolean attributes are 0/1 instead of false/true
   * @param setShuffle
   */
  Shuffle: boolean;
  /**
   * Returns the total size of all songs in the playlist (in bytes).
   */
  Size: number;
  /**
   * Getter: Returns the playback repeat mode.
   * Setter: Sets the playback repeat mode.
   * @param repeatMode
   */
  SongRepeat: ITPlaylistRepeatMode;
  /**
   * Returns the total length of all songs in the playlist (in MM:SS format).
   */
  Time: string;
  /**
   * Returns true if the playlist is visible in the Source list.
   */
  Visible: boolean;
  /**
   * Returns a collection containing the tracks in this playlist.
   */
  Tracks: IITTrackCollection;
}

