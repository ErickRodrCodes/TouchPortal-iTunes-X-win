import { ITSourceKind } from '../iTunes/consts';
import { IITPlaylistCollection } from "./IITPlaylistCollection";

/**
 * Represents an entry in the Source list (music library, CD, device, etc.).
 * You can retrieve all the sources using IiTunes::Sources().
 */
export interface IITSource {
  [key: string]: any | (() => any);
  /**
   * Returns the kind of the source.
   */
  Kind: ITSourceKind;
  /**
   * Returns the total size of the source, if it has a fixed size.
   */
  Capacity: number;
  /**
   * Returns the free space on the source, if it has a fixed size.
   */
  FreeSpace: number;
  /**
   * 	Returns a collection containing the playlists in this source.
   */
  Playlists: IITPlaylistCollection;
  /**
   * Name of the collection
   */
  Name: string;
}
