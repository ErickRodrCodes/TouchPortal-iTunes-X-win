import {
  E_FAIL,
  E_POINTER,
  S_OK
} from '../iTunes/consts';
import { IITArtwork } from './IITArtwork';

/**
 * Represents a collection of iTunes artwork objects.
 * An artwork collection is always associated with an individual track.
 * The IITTrack::Artwork property returns the collection of artwork for the track.
 */
export interface IITArtworkCollection {
  [key: string]: any | (() => any);
  /**
   * Returns the number of pieces of artwork in the collection.
   */
  Count: number;
  /**
   * Returns an IITArtwork object corresponding to the given index (1-based).
   */
  Item: IITArtwork[];
  /**
   * Returns an IEnumVARIANT object which can enumerate the collection.
   */
  _NewEnum(): S_OK | E_POINTER | E_FAIL;
}
