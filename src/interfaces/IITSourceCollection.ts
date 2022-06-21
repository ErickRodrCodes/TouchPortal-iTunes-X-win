import {
  E_FAIL,
  E_POINTER,
  S_OK
} from "../iTunes/consts";
import { IITSource } from "./IITSource";

/**
 * Represents a collection of source objects.
 * Note that collection indices are always 1-based.
 */
export interface IITSourceCollection {
  [key: string]: any | (() => any);
  /**
   * Returns the number of sources in the collection.
   */
  Count: number;
  /**
   * Returns an IITSource object corresponding to the given index (1-based)
   */
  Item: IITSource[];
  /**
   * Returns an IITSource object with the specified name.
   * @param name
   */
  ItemByName(name: string): IITSource;
  /**
   * Returns an IEnumVARIANT object which can enumerate the collection.
   */
  _NewEnum(): S_OK | E_POINTER | E_FAIL;
  /**
   * Returns an IITSource object with the specified persistent ID.
   * See the documentation on IITObject for more information on persistent IDs.
   * @param highID
   * @param lowID
   */
  ItemByPersistentID(highID: number, lowID: number): IITSource;
}
