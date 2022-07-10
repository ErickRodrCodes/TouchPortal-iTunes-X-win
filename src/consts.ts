// Plugin ID
export const pluginId = "TPiTunesX";

/**
 * ITSourceKind
 */
export const ITSourceKindUnknown = 0; // Unknown source kind.
export const ITSourceKindLibrary = 1; // Library source.
export const ITSourceKindIPod = 2; // iPod source (ITIPodSource).
export const ITSourceKindAudioCD = 3; // Audio CD source.
export const ITSourceKindMP3CD = 4; // MP3 CD source.
export const ITSourceKindDevice = 5; // Device source.
export const ITSourceKindRadioTuner = 6; // Radio tuner source.
export const ITSourceKindSharedLibrary = 7; // Shared library source.
/**
 * ITSourceKind indicates the kind of source.
 * - 0 = Unknown source kind.
 * - 1 = Library source.
 * - 2 = iPod source (ITIPodSource).
 * - 3 = Audio CD source.
 * - 4 = MP3 CD source.
 * - 5 = Device source.
 * - 6 = Radio tuner source.
 * - 7 = Shared library source.
 */
export type ITSourceKind =
  typeof ITSourceKindUnknown |
  typeof ITSourceKindAudioCD |
  typeof ITSourceKindDevice |
  typeof ITSourceKindIPod |
  typeof ITSourceKindLibrary |
  typeof ITSourceKindMP3CD |
  typeof ITSourceKindRadioTuner |
  typeof ITSourceKindSharedLibrary;

/**
 * ITPlaylistKind
 */
export const ITPlaylistKindUnknown = 0; // Unknown playlist kind.
export const ITPlaylistKindLibrary = 1; // Library playlist (IITLibraryPlaylist).
export const ITPlaylistKindUser = 2; // User playlist (IITUserPlaylist).
export const ITPlaylistKindCD = 3; // CD playlist (IITAudioCDPlaylist).
export const ITPlaylistKindDevice = 4; // Device playlist.
export const ITPlaylistKindRadioTuner = 5; // Radio tuner playlist.
export type ITPlaylistKind = typeof ITPlaylistKindUnknown |
  typeof ITPlaylistKindLibrary |
  typeof ITPlaylistKindUser |
  typeof ITPlaylistKindCD |
  typeof ITPlaylistKindDevice |
  typeof ITPlaylistKindRadioTuner;

/**
 * ITPlaylistRepeatMode
 */
export const ITPlaylistRepeatModeOff = 0; // Play playlist once.
export const ITPlaylistRepeatModeOne = 1; // Repeat song.
export const ITPlaylistRepeatModeAll = 2; // Repeat playlist.
export type ITPlaylistRepeatMode = typeof ITPlaylistRepeatModeOne |
  typeof ITPlaylistRepeatModeAll |
  typeof ITPlaylistRepeatModeOff;

/**
 * ITTrackKind
 */
export const ITTrackKindUnknown = 0; // Unknown track kind.
export const ITTrackKindFile = 1; // File track (IITFileOrCDTrack).
export const ITTrackKindCD = 2; // CD track (IITFileOrCDTrack).
export const ITTrackKindURL = 3; // URL track (IITURLTrack).
export const ITTrackKindDevice = 4; // Device track.
export const ITTrackKindSharedLibrary = 5; // Shared library track.
export type ITTrackKind =
  typeof ITTrackKindUnknown |
  typeof ITTrackKindFile |
  typeof ITTrackKindCD |
  typeof ITTrackKindURL |
  typeof ITTrackKindDevice |
  typeof ITTrackKindSharedLibrary;

/**
 * ITArtworkFormat
 */

export const ITArtworkFormatUnknown = 0;  // Unknown artwork format.
export const ITArtworkFormatJPEG = 1; // JPEG image.
export const ITArtworkFormatPNG = 2; // PNG image.
export const ITArtworkFormatBMP = 3; // BMP image.

/**
 * ITArtworkFormat is a type that describes the format of an artwork.
 * - Unknown: 0
 * - JPEG: 1
 * - PNG: 2
 * - BMP: 3
 */
export type ITArtworkFormat =
  typeof ITArtworkFormatUnknown |
  typeof ITArtworkFormatJPEG |
  typeof ITArtworkFormatPNG |
  typeof ITArtworkFormatBMP;

/**
 * ITPlayerState
 */
/* Exporting a constant named ITPlayerStateStopped with a value of 0. */
export const ITPlayerStateStopped = 0;
export const ITPlayerStatePlaying = 1;
export const ITPlayerStateFastForward = 2;
export const ITPlayerStateRewind = 3;

/**
 * ITPlayerState is a type that represents the state of the player:
 * - stopped: 0
 * - playing: 1
 * - fast forward: 2
 * - rewind: 3
 */
export type ITPlayerState = typeof ITPlayerStateStopped | typeof ITPlayerStatePlaying | typeof ITPlayerStateFastForward | typeof ITPlayerStateRewind;

/**
 * ITRatingKind
 */
export const ITRatingKindUser = 0; // User-specified rating.
export const ITRatingKindComputed = 1; // iTunes - computed rating.

/**
 * ITRatingKind is a type that represents the kind of rating:
 * - User-specified: 0
 * - computed: 1
 */
export type ITRatingKind = typeof ITRatingKindUser | typeof ITRatingKindComputed;

/**
 * ITPlaylistSearchField
 */

/**
 * Search all fields of each track.
 */
export const ITPlaylistSearchFieldAll = 0;
/**
 * Search only the fields with columns that are currently visible in the display for the playlist.
 * Note that song name, artist, album, and composer will always be searched, even if
 * these columns are not visible.
 */
export const ITPlaylistSearchFieldVisible = 1;
/**
 * Search only the artist field of each track (IITTrack::Artist).
 */
export const ITPlaylistSearchFieldArtists = 2;
/**
 * Search only the album field of each track (IITTrack::Album).
 */
export const ITPlaylistSearchFieldAlbums = 3;
/**
 * Search only the composer field of each track (IITTrack::Composer).
 */
export const ITPlaylistSearchFieldComposers = 4;
/**
 * Search only the song name field of each track(IITTrack:: Name).
 */
export const ITPlaylistSearchFieldSongNames = 5;

/**
 * Specifies the fields in each track that will be searched by IITPlaylist::Search().
 * - 0: Search all fields of each track.
 * - 1: Search only the fields with columns that are currently visible in the display for the playlist.
 * Note that song name, artist, album, and composer will always be searched, even if these columns are not visible.
 * - 2: Search only the artist field of each track (IITTrack::Artist).
 * - 3: Search only the album field of each track (IITTrack::Album).
 * - 4: Search only the composer field of each track (IITTrack::Composer).
 * - 5: Search only the song name field of each track (IITTrack::Name).
 */
export type ITPlaylistSearchField = typeof ITPlaylistSearchFieldAll |
  typeof ITPlaylistSearchFieldVisible |
  typeof ITPlaylistSearchFieldArtists |
  typeof ITPlaylistSearchFieldAlbums |
  typeof ITPlaylistSearchFieldComposers |
  typeof ITPlaylistSearchFieldSongNames;

/**
 * ITPlaylistPrintKind
*/
/**
 * Print a list of tracks in the playlist.
 */
export const ITPlaylistPrintKindPlaylist = 0;
/**
 * Print a list of albums in the playlist.
 */
export const ITPlaylistPrintKindAlbumlist = 1;
/**
 * Print a CD jewel case insert.
 */
export const ITPlaylistPrintKindInsert = 2;

/**
 * Specifies the kind of playlist printout.
 */
export type ITPlaylistPrintKind =
  typeof ITPlaylistPrintKindPlaylist |
  typeof ITPlaylistPrintKindAlbumlist |
  typeof ITPlaylistPrintKindInsert;

// Expected Messages on the system
export type S_OK = "S_OK"
export type E_POINTER = "E_POINTER"
export type ITUNES_E_OBJECTLOCKED = "ITUNES_E_OBJECTLOCKED";
export type ITUNES_E_OBJECTDELETED = "ITUNES_E_OBJECTDELETED";
export type E_FAIL = "E_FAIL";
export type E_INVALIDARG = "E_INVALIDARG";

export const emptyMessage = "Not Available";

// eslint-disable-next-line max-len
export const artNotFoundBase64 = "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";
export const loadingImageArtBase64 = "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";
export const defaultImageArtBase64 = "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";
export const LIBRARY_TYPE = 1;

