import {
  E_FAIL,
  E_POINTER,
  S_OK
} from "../iTunes/consts";
import { IITTrack } from "./IITTrack";

/**
 * Represents a collection of track objects.
 * Note that collection indices are always 1-based.
 * You can retrieve all the tracks defined for a playlist
 * using IITPlaylist::Tracks().
 * You can retrieve the currently selected track or tracks using
 * IiTunes::SelectedTracks().
 * After calling IITLibraryPlaylist::AddFile(), IITLibraryPlaylist::AddFiles(),
 * IITUserPlaylist::AddFile(), IITUserPlaylist::AddFiles(), IiTunes::ConvertFile(),
 * IiTunes::ConvertFile2(), IiTunes::ConvertFiles(), IiTunes::ConvertFiles2(),
 * IiTunes::ConvertTrack(), IiTunes::ConvertTrack2(), IiTunes::ConvertTracks(),
 * or IiTunes::ConvertTracks2(), you can retrieve the added or
 * converted tracks using IITOperationStatus::Tracks().
 */
export interface IITTrackCollection {
  [key: string]: any | (() => any);
  /**
   * Returns the number of tracks in the collection.
   */
  Count: number;

  /**
   * Returns an IITTrack object corresponding to the given index (1-based).
   * @param track
   */
  Item(track: number): IITTrack;

  /**
   * Returns an IITTrack object corresponding to the given index (1-based).
   * @param track
   */
  ItemByPlayOrder(track: number): IITTrack;

  /**
   * Returns an IITTrack object with the specified name.
   * @param itemName
   */
  ItemByName(itemName: string): IITTrack;

  /**
   * Returns an IEnumVARIANT object which can enumerate the collection.
   */
  _NewEnum(): S_OK | E_POINTER | E_FAIL;

  /**
   * Returns an IITTrack object with the specified persistent ID.
   * See the documentation on IITObject for more information on persistent IDs.
   * @param highID
   * @param lowID
   */
  ItemByPersistentID(highID: number, lowID: number): IITTrack;
}
