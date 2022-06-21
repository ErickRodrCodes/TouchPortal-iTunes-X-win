import {
  E_FAIL,
  E_POINTER,
  S_OK
} from "../iTunes/consts";
import { IITPlaylist } from "./IITPlaylist";

/**
 * Represents a collection of playlist objects.
 * Note that collection indices are always 1-based.
 * You can retrieve all the playlists defined for a source using IITSource::Playlists().
 */
export interface IITPlaylistCollection {
  [key: string]: any | (() => any);
  /**
   * Returns the number of playlists in the collection.
   */
  Count: number;

  /**
   * Returns an IITPlaylist object corresponding to the given index (1-based).
   */
  Item: IITPlaylist[];

  /**
   * Returns an IITPlaylist object with the specified name.
   */
  ItemByName(name: string): IITPlaylist;

  /**
   * Returns an IEnumVARIANT object which can enumerate the collection.
   */
  _NewEnum(): S_OK | E_POINTER | E_FAIL;

  /**
   * Returns an IITPlaylist object with the specified persistent ID.
   * See the documentation on IITObject for more information on persistent IDs.
   */
  ItemByPersistentID(highId: number, lowId: number): IITPlaylist;
}
