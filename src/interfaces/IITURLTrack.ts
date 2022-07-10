import { ITRatingKind } from "../consts";
import { IITPlaylistCollection } from "./IITPlaylistCollection";

export interface IITURLTrack {
  [key: string]: any | (() => any);
  /**
   * Getter: Returns the URL of the stream represented by this track.
   * Setter: Set the URL of the stream represented by this track.
   */
  URL: string | SetterURL;

  /**
   * Returns true if this track is a podcast track. If a podcast track is an IITURLTrack,
   * the podcast episode has not been downloaded.
   */
  Podcast: boolean;

  /**
   * Getter: Returns the category for the track.
   * Setter: Sets the category for the track.
   */
  Category: string | SetterCategory;

  /**
   * Getter: Returns the description for the track.
   * Setter: Sets the description for the track.
   */
  Description: string | SetterDescription;

  /**
   * Getter: Returns the long description for the track.
   * Setter: Sets the long description for the track.
   */
  LongDescription: string | SetterLongDescription;

  /**
   * Getter: Returns the user or computed rating of the album that this track belongs to (0 to 100).
   * If the album rating has never been set, or has been set to 0, it will be computed based
   * on the ratings of tracks in the album.
   * Setter: Set the album rating of the album that this track belongs to (0 to 100).
   * If the album rating is set to 0, it will be computed based on the ratings of tracks
   * in the album.
   */
  AlbumRating: number | SetterAlbumRating;

  /**
   * Returns the album rating kind. If the album rating has never been set, or has been set
   * to 0, the kind is ITRatingKindComputed. Otherwise, the kind is ITRatingKindUser.
   */
  AlbumRatingKind: ITRatingKind;

  /**
   * Returns the track rating kind. If the track rating has never been set, or has been set
   * to 0, the kind is ITRatingKindComputed. Otherwise, the kind is ITRatingKindUser.
  */
  RatingKind: ITRatingKind;

  /**
   * Returns a collection of playlists that contain the song that this track represents.
   */
  Playlists: IITPlaylistCollection;

  /**
   * Update the podcast feed for this track. This is equivalent to the user choosing Update
   * Podcast from the contextual menu for the podcast feed that contains this track.
   */
  UpdatePodcastFeed(): void;

  /**
   * Start downloading the podcast episode that corresponds to this track. This is equivalent
   * to the user clicking the Get button next to this track.
   */
  DownloadPodcastEpisode(): void;

  /**
   * Reveals the track in the main browser window.
   */
  Reveal(): void;
}

export interface SetterURL {
  (url:string):void
}
export interface SetterCategory {
  (category:string):void
}
export interface SetterDescription {
  (description:string):void
}
export interface SetterLongDescription {
  (longDescription:string):void
}
export interface SetterAlbumRating {
  (longDescription:string):void
}
