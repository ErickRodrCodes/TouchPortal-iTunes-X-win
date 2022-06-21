// Plugin ID
export const pluginId = "TPiTunes";

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
export const defaultImageArtBase64 = "iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAMAAAD8CC+4AAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABZ0RVh0Q3JlYXRpb24gVGltZQAwOC8xNy8yMci06hoAAAAJcEhZcwAACxIAAAsSAdLdfvwAAACrUExURQAAAJihrqGptGl3ipuksJSdq56ns11sgf///5agrF5tgpKcqWNxhZqir52lsZGaqKSrtmFwhGZ0iKKqtmRyhoeRoWBug46YpqauuIOOnsDAwHWCk2t5jHJ/kXmFloqVo4CAgG98jn+Lm3yImEBAQA8QET1DTEZLUzQ7RfDw8B4fIGBgYS8wMVBQUNDQ0ODg4E1UXW9wcJCQkCUpLqCgoFBcbbCwsAcICVlmd6ty1r8AAA+XSURBVHja7J0Pf5o6H0e7y31W1us2/7VrbdfRTRQRK5Zaff+v7FFAC1E7DSCBnJNus0yTnzl+Q3D2s4sLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgPPiBv7s8dstE6EFi2DoP36/jWE+ak7g+Nb9bRpmpa7YgT+2/r3dB5NTw6W871t3tx/AHNVpn+b4s/vbv8NM1WMpH47vf9weCxNW8X1a3zfub0+EaavwJff910hiM/E70ut6yX1/t7XcTCpvplrqC+kVXco937DibEeum5ukN5NJ34hO6d+2JtIrc8l9/6MZyQuJ/9hL5zb+Y9N2/pIZVf2S2/jdvE1K3mo/2DqbSG+tp/8S6aru0zx/Zn1qytEJ2/or8W18sEnSlbzk9q1foatOp5nBetJ04quDdNUuua3YWTOZVAnnKe8J4R2Srs4l93izlHfS6rImPZn499cRU17yPs36vVrFO+eFmS/rkntmxQr+6XSQXvd92tj69U/o+p+yQMMZl/LZ79B0ZLtE69g4xz5tZn1Zay4v20g/L/5qlj9/VsU30s8mXTGQUrz0z4o1pJN0KED6Z+VACtIB6YB0kJL+TbGGdJIOBUj/phxIQTogHZAOMtL/VQ6kIB1yZ4J0ko50pCO9ltK/KgdSCj+nI52kI10H6Z+UAymFL++fPn1VrCGFpEMRSUc6SUd6/aV/UQ6kFL68f/mkWEM6SYf8GSId6UhneUc6SUd6PXbv/1MOpBSedKRreE5HOklHOtKRXlPp/ynWkFK49P+UAymFX7KVpfZPe+gEzvga6Vok/eda92b8xU+k11v602zouX8tACk1kd4e7+pGemnSvxfMSndgn1QAUqor/brrD4KFRAFIqaL0P93hMbqRXg/pK93vG3Ok11z6D2t5aKeGdPWk/8hKV1b3oQKQUrz071JtxffuXzbmkgUgRcmk3zVWG3O7qAKQopj0x4Z//MYc6VWX/tg4eWOO9OpKf1rt1IIzFoCUUqU/ZduYI11d6b+EtmY2H+a1U/trAeL4SDnHnKfxz6WbpJe5vJcaNJJegvRfIroVoKV0MWm6FUDSSTrSkY50pCMd6UhHOtKRrrD0a6HpVgBJJ+laSL8W0a0ALaWLy6tuBZB0ko50pCMd6UhHOtKRjnSkIx3p6jC4vhOabgXomPQ7Ed0K0FP69XXqS7cCtJR+fZf6utOtAJZ3lnctNnLpCb8++5yXXgBJJ+lIR7oOy/td2cs70pEOxcz5b6HpVgDndM7pWiT9t4huBWgpXVxedStAx+W97KANSTpJJ+mc0wHpgHRAOhw753+EplsBJJ2kk3SSXk/pf0R0K0BL6WLSdCuApJN0pCMd6UhHOtKRjnSkIx3pSFdI+qOIbgVoKf2P0HQrgKSTdKQjHelIRzrSkY50pCNdYen3QtOtAJJO0rWQfi+iWwFaSheXV90KIOkkXRPpj+kv3Qog6SQd6UhHOtKRjnSkI70qOD9FdCtAx6T/vBeabgVoKb3koA1IOtKRzjkdSDqQdJCc8yeh6VYAyzvLO0kn6fWU/iSiWwE6Lu9izp50K4Ckk3Q9kl7ynA+QTtKRjnRAOiAdkA7HzvmD0HQrQEfpDyK6FaCldDFpuhVA0osNmhs4jj+PGDqOuyDptZbuOv7lzlAPl567RHotpdvO/OEgBtLrJ912lnvEfgRSKi498B8Mw9gNt4H0MqUbIvn1vXCWxj4ejA9BSvHSH4SWX9cNY6fzqB04HP8lUiqbdG9pSIKUikq354aBdL2kO4aBdL2kL+ZGG+l6SbdvDIOk6yU9MAykqy69LbQcnLczNaQULr0tktF5OzNIqZj0oG1kbkiplvQcck7SKybdvkK6btIXyzbSdZM+aCO9GtK7ItJdud18QErx0ttCk+5qudOVXENKdZIedEm6eriBM/T9ZTixl74/CD+CnJ/0JdLVwg6G825jxWr1jGl3G93ufDDMa85zC/oluvIwPph314a3vyLCW61GXtL9vKT7GMtufNnY0I1/vX+X/H6D5Dh7epKiO0RaNgK/0Tp11uVG8ho50XLQlkn5UmbWJVf3vKQ3XMTlrLxVlPTL3KRjTv5cvm9hb7WOsC55Sm/l5HyOO+n3XFrSyL0H0MqJG07psjGft84s3clLestGn+TZvFVV6TdL9JUhoNyks7pLMbjJhtwV200+XLG6l+G8XOkDBJbhXE66k5N0gi4z+VeZKWvcNbzvLrNvv6q2dIIucX2+LEu6m4tztu4y26mrsqTbOQx8M1+g8GS8q9KkX8xzGJl/XzudxfIyDyR3kNkHZnEvZ97lpbuZx/UxWFrQZT+XOM84LCf0EoMuKz3INuqSq7UyopZReqbxr3Be0kk1o3SXnJ+dQdnSM5xf5jgvd3W/PH8JPns4yXdgL8uXLmmd63NZAhWk2xLWl7wPV/oF22W2nx882fqApV0ePy/n2d4YW5z24psTcyX2cUHWS8ej3xi8mgd4y0RezpeZl9tjw45yZaTn8clE+4j3DHwWdnWk5/M2ycL58HQzd3g3RiHpfm4F2Ye8Y1w16bkuunbg+Klt3XwY/f+qoJJ0P//CFq7rOo4TuC4BV1M6uyv9rtP5oaJqMVTiGh3OSh7vvXtMY7WwldzFgeIndRZ3Ddd3du76re98fqWKDLha0zDqS5xzVse5Dvg41w/ZH2FkD6ffaZ2PLWlnnR8pqvwCf7J1h/fhapD1k96O5XPn2l25LflntfqE/bhLt7nHyl4ngr+v8T579trhDvncuY4b+WC43PsDZMMA47XOu+f47yu97zt87BwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACgUPr9vhfd8vpuoSPZ/b5khfb2993j+7+THviDbhRAdgpFTNOcRrd6plXsy8s0JSvsb3/fPb7/uyQv5gkDH+5GiYRKTuHusxyZEynpp96/JOmeab5aRz+ZM0kX5u7YqcxP+pv5qrR0y3KzSLfM5xOejC7Sx+ZIaemHpB4tvYf03anrmePkyHbfGnviDmJiWcnZ8LyPK93pY/WAvRWLHR88HttIHF8fmVgTQbo7E/p7l76vqH3Svdlsu6Xd6W51aLwddM/JxEvdSD/8veOPpIePTD3/7Yg5Sh+bb4mRx6PVxsfspTax0bFnO76bNzV7PTPkYhytnqtywmf5HL6AUn3ED9hUvDrHjvd0/Gq+RIfCHpIDJs/p6ePj5/U3blK6Zb4figaPyjxUlHgv05y8rW+ON6+YdHfxvtCceokx44nbdvned+Lhq457m44TRaVH3z4y+TwTI+6bQknptmna29onpvnSX81m8kRoj0az9bHXqMTXkdl7eemNzGmvd+HGMxrXYZqu2Ef8gLhie5p4VSc6nsQXEe66mNSACenC8VFvMpnGo0T3mpjP48lzYkF/6U1Xd+tdHCpqc6/oyay7mT6P+2/h09jT3cXFzFyV8GKO7D3S4y63N5IPX1W77fh9OGH0zSNTzzMx4p4plD5XvsWvv3VXI3MW9TtLBD1MYT869/c2aYmf6zR85i/P0+g+050+Ng+IKn6LlpXdjuN5Hocv9OSACenC8fVYbnzxEd1ruu7EHpne7vK+v6jd5T2MV3Tnfd1Fw72GMyZK305MfCP58HTHB5b3zSNTzzMx4p4plJY+CV/+4ciTeFc3S0bdimqKMt2LXuXbSl/Cp9F7fft/e1aOLDsIAx1yBkcEdoDXsss19z/aZzUSCL9ZftgdvDfDWAtqMJLovdhV6UgC3uMjvbMqxWHl2ckdhUFCejF+BIH8PlgCwS+6YiPpDadq0tf8VVAXX0irN1qSfgcmfGDiTHGb9CBJ50ktCiH8Pis2bkl6y2lfCCnDmEi/mKdh/kZrk9ZjoSMJuK+LMksnK57DY7uaCoNVnc7GE4v+2xESA53yA0J6w6lG9h6+Cup02GWLPxmq13vSdcX1RcSr818m/ariQi02Q/gN6X57ecuvOMFRqUL19Erh0szT0a3ESQ2DY2tzfwodScB6PG6qTnyj4im8rVN/MBssSc/jE2HR/34GU6xK02m/iU49ki6ou6hcg8j0gYm/Sbqu4kIttkL4FemLC7W3eJstCtaQ04pz22zmNahxdM54ygodhPSrTjuzYr9g5rSr8jgnnY53JekxD1YC6Q2nHkkX1PUfkM7EPyX9nmfPSb9+zdxpArQ8kT7bFFivDdJP+6R7t+/aOnU9kq62vJErxaebzRXM0nFWsrFxgXSbBTuc/4n0St1npBPxz0gn8yxIr0L4Pemn3WBt0g+l9JhPw2Juq/3vsjhbdMykDJBI33hVwBUvbsXsphonpBfjAum61ZH7jnT92Er7k/S/n5Ul6DwL0ssQ/kC6O0q99jPHZiRlykxToGJuo800NpcD7lZ66iodhPTJLguaNTPFndmtH1c1TkgvxmNRkBO5V5v0hlOPpL/apA/D36S/viadzpNaFEL4S097cw0jkr0vJHsfQpxapHfb3jknVzX2O018Fi4Q5PciLyGkX2qa02xHiXRpPFmjJZ2mIS2y98KpR9IFdTrm17F990g6E/+EdDZParEO4U+k2wLbWxzucrYv2/ytM926NTglNoMP/hU6OOl0nXLF9v98UVZXgXQ2PpN82j+1pl1d1+kNpx5JF9TFrvNCkzPTIJ2Jf0h6nie1WIfwJ9InZYLFPTWuco44heKob5Fuufa/mNhfKXRw0uk65YrdOWH6ejyTXo7vXe6XxTatf4DU+nmLy049ki6oG8MDofYOvTJ3AMvnHhX/hHQ2T2qRhfCk6ep3V5auQoi9dz2sNkUki2lX27r226Y2erl2xaa2bzF6l02MDtdRkE7XKVPsFRz1ODnTi/GtX+/OeEpI99UWO71wyyY7letv09eVlaDuVGYetDKTF9rW4TJbg3QmzhXn2DHrSZLNk1hkIezfujN+JH2OpHdHuIyirZnF+MuimWfIy55uivrQNDrvYoLpKEi3MzpFxX7PTPU4Ib0Yj1/pPK7qivBurYhO3Z7sSjimBXVhyPgGyeSEzNI605k4V5xjx6wnSR6XbJGF8AfSxavso+jGjU9XyG/qkJ9rKH5zXHhsOfTyo1N/qHO322kZrPnju+LvxY9NjFoEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgP+Jf7To/Vr0jhQwAAAAAElFTkSuQmCC";

export const LIBRARY_TYPE = 1;

