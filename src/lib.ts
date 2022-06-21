import {
  ITPlaylistKindCD,
  ITPlaylistKindDevice,
  ITPlaylistKindLibrary,
  ITPlaylistKindRadioTuner,
  ITPlaylistKindUnknown,
  ITPlaylistKindUser,
  ITSourceKindAudioCD,
  ITSourceKindDevice,
  ITSourceKindIPod,
  ITSourceKindLibrary,
  ITSourceKindMP3CD,
  ITSourceKindRadioTuner,
  ITSourceKindSharedLibrary,
  ITSourceKindUnknown,
  ITTrackKindCD,
  ITTrackKindDevice,
  ITTrackKindFile,
  ITTrackKindSharedLibrary,
  ITTrackKindUnknown,
  ITTrackKindURL
} from "./consts";

/**
 * It translates a number into a string
 * @param {number} kind - The kind of source.
 * @returns A string.
 */
export const translateITSourceKind = (kind: number):string => {
  switch (kind) {
    case ITSourceKindUnknown:
      return 'Unknown source kind';
    case ITSourceKindLibrary:
      return 'Library source';
    case ITSourceKindIPod:
      return 'iPod source (ITIPodSource)';
    case ITSourceKindAudioCD:
      return 'Audio CD source';
    case ITSourceKindMP3CD:
      return 'MP3 CD source';
    case ITSourceKindDevice:
      return 'Device source';
    case ITSourceKindRadioTuner:
      return 'Radio tuner source';
    case ITSourceKindSharedLibrary:
      return 'Shared library source.';
    default:
      return 'Unknown source kind';
  }
};

export const translateITPlaylistKind = (kind: number): string => {
  switch (kind) {
    case ITPlaylistKindUnknown:
      return 'Unknown playlist kind.';
    case ITPlaylistKindLibrary:
      return 'Library playlist (IITLibraryPlaylist).';
    case ITPlaylistKindUser:
      return 'User playlist (IITUserPlaylist).';
    case ITPlaylistKindCD:
      return 'CD playlist (IITAudioCDPlaylist).';
    case ITPlaylistKindDevice:
      return 'Device playlist.';
    case ITPlaylistKindRadioTuner:
      return 'Radio tuner playlist.';
    default:
      return 'Unknown playlist kind.';
  }
};

/**
 * It translates a number into a string
 * @param {number} kind - The kind of track.
 * @returns A string.
 */
export const translateITTrackKind = (kind: number): string => {
  switch (kind) {
    case ITTrackKindUnknown:
      return 'Unknown track kind.';
    case ITTrackKindFile:
      return 'File track (IITFileOrCDTrack).';
    case ITTrackKindCD:
      return 'CD track (IITFileOrCDTrack).';
    case ITTrackKindURL:
      return 'URL track (IITURLTrack).';
    case ITTrackKindDevice:
      return 'Device track.';
    case ITTrackKindSharedLibrary:
      return 'Shared library track.';
    default:
      return 'Unknown track kind.';
  }
};
