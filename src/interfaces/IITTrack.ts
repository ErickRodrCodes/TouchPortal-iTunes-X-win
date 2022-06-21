import { ITTrackKind } from '../consts';
import { IITArtwork } from "./IITArtwork";
import { IITArtworkCollection } from "./IITArtworkCollection";
import { IITPlaylist } from "./IITPlaylist";

/**
 * Represents a track.
 * A track represents a song in a single playlist. A song may be in more than one playlist,
 * in which case it would be represented by multiple tracks.
 * You can retrieve the currently targeted (playing) track using IiTunes::CurrentTrack().
 * Typically, an IITrack is accessed through an IITTrackCollection.
 * You can retrieve all the tracks defined for a playlist using IITPlaylist::Tracks().
 * You can retrieve the currently selected track or tracks using IiTunes::SelectedTracks().
 * After calling IITLibraryPlaylist::AddFile(), IITLibraryPlaylist::AddFiles(),
 * IITUserPlaylist::AddFile(), IITUserPlaylist::AddFiles(), IiTunes::ConvertFile(),
 * IiTunes::ConvertFile2(), IiTunes::ConvertFiles(), IiTunes::ConvertFiles2(),
 * IiTunes::ConvertTrack(), IiTunes::ConvertTrack2(), IiTunes::ConvertTracks(),
 * or IiTunes::ConvertTracks2(), you can retrieve the added or converted tracks using
 * IITOperationStatus::Tracks().
 */
export interface IITTrack {
  [key: string]: any | (() => any);
  // ####### Methods ########
  /**
   * Delete this track.
   */
  Delete(): void;
  /**
   * Start playing this track.
   */
  Play(): void;
  /**
   * Add artwork from an image file to this track.
   */
  AddArtworkFromFile(filePath: string): IITArtwork;

  // ###### Properties ######
  /**
   * Returns the kind of the track.
   */
  Kind: ITTrackKind;
  /**
   * Returns an IITPlaylist object corresponding to the playlist that contains the track.
   * Use IITFileOrCDTrack::Playlists() or IITURLTrack::Playlists() to get
   * the collection of all playlists that contain the song this track represents.
   */
  Playlist: IITPlaylist;
  /**
   * Getter: Returns the name of the album containing the track.
   * Setter: Set the name of the album containing the track.
   */
  Album: string ;
  /**
   * Getter: Returns the name of the artist/source of the track.
   * Setter: Returns the name of the album containing the track.
   */
  Artist: any;
  /**
   * Returns the bit rate of the track (in kbps).
   */
  BitRate: number;
  /**
   * Getter: Returns the tempo of the track (in beats per minute).
   * Setter: Set the tempo of the track (in beats per minute).
   */
  BPM: number | SetterBMP;
  /**
   * Getter: Returns freeform notes about the track.
   * Setter: Set freeform notes about the track.
   */
  Comment: string | SetterComment;
  /**
   * Getter: Returns true if this track is from a compilation album.
   * Setter: Set whether this track is from a compilation album.
   */
  Compilation: boolean | SetterCompilation;
  /**
   * Getter: Returns the composer of the track.
   * Setter: Set the composer of the track.
   */
  Composer: string | SetterComposer;
  /**
   * Returns the date the track was added to the playlist.
   */
  DateAdded: string;
  /**
   * Getter: Returns the total number of discs in the source album.
   * Setter: Set the total number of discs in the source album.
   */
  DiscCount: number | SetterDiscCount;
  /**
   * Getter: Returns the index of the disc containing the track on the source album.
   * Setter: Set the index of the disc containing the track on the source album.
   */
  DiscNumber: number | SetterDiscNumber;
  /**
   * Returns the length of the track (in seconds).
   */
  Duration: number;
  /**
   * Getter: Returns true if the track is checked for playback.
   * Setter: Set whether this track is checked for playback.
   */
  Enabled: boolean | SetterEnabled;
  /**
   * Getter: Returns the name of the EQ preset of the track.
   * Setter: Returns the name of the EQ preset of the track.
   */
  EQ: string | SetterEQ;
  /**
   * Getter: Returns the stop time of the track (in seconds).
   * Setter: Set the stop time of the track (in seconds).
   */
  Finish: number | SetterFinish;
  /**
   * Getter: Returns the music/audio genre (category) of the track.
   * Setter: Set the music/audio genre (category) of the track.
   */
  Genre: string | SetterGenre;
  /**
   * Getter: Returns the grouping (piece) of the track.
   * Setter: Set the grouping (piece) of the track.
   */
  Grouping: string | SetterGrouping;
  /**
   * Returns the text description of the track (e.g. "AAC audio file").
   */
  KindAsString: string;
  /**
   * Returns the modification date of the content of the track.
   */
  ModificationDate: string;
  /**
   * Getter: Returns the number of times the track has been played.
   * Setter: Set the number of times the track has been played. This property
   * cannot be set if the track is not playable (e.g. a PDF file).
   */
  PlayedCount: number | SetterPlayedCount;
  /**
   * Getter: Returns the date and time the track was last played.
   * Setter: Set the date and time the track was last played. This property
   * cannot be set if the track is not playable (e.g. a PDF file).
   */
  PlayedDate: string | SetterPlayedDate;
  /**
   * Returns the play order index of the track in the owner playlist (1-based).
   */
  PlayOrderIndex: number;
  /**
   * Getter: Returns the rating of the track (0 to 100). If the track rating has never
   * been set, or has been set to 0, it will be computed based on the album rating.
   * Setter: Set the rating of the track (0 to 100). If the track rating is set to 0,
   * it will be computed based on the album rating.
   */
  Rating: number | SetterRating;
  /**
   * Returns the sample rate of the track (in Hz).
   */
  SampleRate: number;
  /**
   * Returns the size of the track (in bytes).
   */
  Size: number;
  /**
   * Getter: Returns the start time of the track (in seconds).
   * Setter: Set the start time of the track (in seconds).
   */
  Start: number | SetterStart;
  /**
   * Returns the length of the track (in MM:SS format).
   */
  Time: string;
  /**
   * Getter: Returns the total number of tracks on the source album.
   * Setter: Set the total number of tracks on the source album.
   */
  TrackCount: number | SetterTrackCount;
  /**
   * Getter: Returns the index of the track on the source album.
   * Setter: Set the index of the track on the source album.
   */
  TrackNumber: number | SetterTrackNumber;
  /**
   * Getter: Returns the relative volume adjustment of the track (-100% to 100%).
   * Setter: Set the relative volume adjustment of the track (-100% to 100%).
   */
  VolumeAdjustment: number | SetterVolumeAdjustment;
  /**
   * Getter: Returns the year the track was recorded/released.
   * Setter: Set the year the track was recorded/released.
   */
  Year: number | SetterYear;
  /**
   * Returns a collection containing the artwork for the track.
   */
  Artwork: IITArtworkCollection;
  /**
   * Returns the track Name
   */
  Name: string;
}

/** getter and setter definitions below */

export interface SetterAlbum {
  (nameAlbum:string): void
}

export interface SetterArtist {
  (nameArtist:string): void
}
export interface SetterBMP {
  (bmp:number): void
}

export interface SetterComment {
  (comment:string): void
}

export interface SetterCompilation {
  (isCompilation:boolean): void
}

export interface SetterComposer {
  (composer:string): void
}

export interface SetterDiscCount {
  (discCount:number): void
}

export interface SetterDiscNumber {
  (discNumber:number): void
}

export interface SetterEnabled {
  (shouldBeEnabled:boolean): void
}

export interface SetterEQ {
  (eq:string):void
}

export interface SetterGenre {
  (genre:string): void
}

export interface SetterGrouping {
  (grouping:string):void
}

export interface SetterPlayedCount {
  (PlayedCount:number):void
}
export interface SetterPlayedDate {
  (date:string):void
}

export interface SetterRating {
  (rating:number):void
}

export interface SetterStart {
  (start:number):void
}

export interface SetterTrackNumber {
  (trackNumber:number):void
}

export interface SetterVolumeAdjustment {
  (VolumeAdjustment:number):void
}

export interface SetterYear {
  (year:number):void
}
export interface SetterFinish{
  (finish:number):void
}

export interface SetterTrackCount {
  (trackCount:number):void
}
