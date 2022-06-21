import { ITArtworkFormat } from "../consts";

/**
 * Defines a single piece of artwork. Artwork is always associated with an individual track.
 * To add a piece of artwork to a track, use IITTrack::AddArtworkFromFile().
 * The IITTrack::Artwork property returns the collection of artwork for the track.
 */
export interface IITArtwork {
  [key: string]: any | (() => any);
  /**
   * Delete this piece of artwork from the track.
   */
  Delete(): void;
  /**
   * Replace existing artwork data with new artwork from an image file.
   */
  SetArtworkFromFile(filePath: string): any;
  /**
   * Save artwork data to an image file.
   */
  SaveArtworkToFile(filePath: string): any;
  /**
   * Returns the format of the artwork.
   */
  Format: ITArtworkFormat;
  /**
   * Returns true if the artwork was downloaded by iTunes.
   */
  IsDownloadedArtwork: boolean;
  /**
   * Getter: Returns the description for the artwork. Artwork descriptions are only supported in files
   * that use ID3 tags (i.e. MP3 files).
   * Setter: Sets the description for the artwork. Artwork descriptions are only supported in files that
   * use ID3 tags (i.e. MP3 files).
   * @param description
   */
  Description: string;
}

/** definitions for setters are below */
export type SetterDescription = (description: string) => string;
