# Interfaces used on this plugin

From the follow list, take out the methods or properties you might want to use into

| Used? | Name                               | type                  | return type fn(params)                                     |
| ----- | ---------------------------------- | --------------------- | ---------------------------------------------------------- |
| ⛔    | Authorize                          | Method                | void Authorize (int, Variant, string)                      |
| ⛔    | BackTrack                          | Method                | void BackTrack ()                                          |
| ⛔    | CheckVersion                       | Method                | bool CheckVersion (int, int)                               |
| ⛔    | ConvertFile                        | Method                | IITOperationStatus ConvertFile (string)                    |
| ⛔    | ConvertFile2                       | Method                | IITConvertOperationStatus ConvertFile2 (string)            |
| ⛔    | ConvertFiles                       | Method                | IITOperationStatus ConvertFiles (Variant)                  |
| ⛔    | ConvertFiles2                      | Method                | IITConvertOperationStatus ConvertFiles2 (Variant)          |
| ⛔    | ConvertTrack                       | Method                | IITOperationStatus ConvertTrack (Variant)                  |
| ⛔    | ConvertTrack2                      | Method                | IITConvertOperationStatus ConvertTrack2 (Variant)          |
| ⛔    | ConvertTracks                      | Method                | IITOperationStatus ConvertTracks (Variant)                 |
| ⛔    | ConvertTracks2                     | Method                | IITConvertOperationStatus ConvertTracks2 (Variant)         |
| ⛔    | CreateEQPreset                     | Method                | IITEQPreset CreateEQPreset (string)                        |
| ⛔    | CreateFolder                       | Method                | IITPlaylist CreateFolder (string)                          |
| ⛔    | CreateFolderInSource               | Method                | IITPlaylist CreateFolderInSource (string, Variant)         |
| ⛔    | CreatePlaylist                     | Method                | IITPlaylist CreatePlaylist (string)                        |
| ⛔    | CreatePlaylistInSource             | Method                | IITPlaylist CreatePlaylistInSource (string, Variant)       |
| ⛔    | FastForward                        | Method                | void FastForward ()                                        |
| ⛔    | GetITObjectByID                    | Method                | IITObject GetITObjectByID (int, int, int, int)             |
| ⛔    | GetITObjectPersistentIDs           | Method                | void GetITObjectPersistentIDs (Variant, int, int)          |
| ⛔    | GetPlayerButtonsState              | Method                | void GetPlayerButtonsState (bool, ITPlayButtonState, bool) |
| ⛔    | GotoMusicStoreHomePage             | Method                | void GotoMusicStoreHomePage ()                             |
| ⛔    | NextTrack                          | Method                | void NextTrack ()                                          |
| ⛔    | OpenURL                            | Method                | void OpenURL (string)                                      |
| ✅    | Pause                              | Method                | void Pause ()                                              |
| ✅    | Play                               | Method                | void Play ()                                               |
| ⛔    | PlayerButtonClicked                | Method                | void PlayerButtonClicked (ITPlayerButton, int)             |
| ⛔    | PlayFile                           | Method                | void PlayFile (string)                                     |
| ⛔    | PlayPause                          | Method                | void PlayPause ()                                          |
| ⛔    | PreviousTrack                      | Method                | void PreviousTrack ()                                      |
| ⛔    | Quit                               | Method                | void Quit ()                                               |
| ⛔    | Resume                             | Method                | void Resume ()                                             |
| ⛔    | Rewind                             | Method                | void Rewind ()                                             |
| ⛔    | SetOptions                         | Method                | void SetOptions (int)                                      |
| ⛔    | Stop                               | Method                | void Stop ()                                               |
| ⛔    | SubscribeToPodcast                 | Method                | void SubscribeToPodcast (string)                           |
| ⛔    | UpdateIPod                         | Method                | void UpdateIPod ()                                         |
| ⛔    | UpdatePodcastFeeds                 | Method                | void UpdatePodcastFeeds ()                                 |
| ⛔    | CanSetShuffle                      | ParameterizedProperty | bool CanSetShuffle (Variant) {get}                         |
| ⛔    | CanSetSongRepeat                   | ParameterizedProperty | bool CanSetSongRepeat (Variant) {get}                      |
| ⛔    | ITObjectPersistentIDHigh           | ParameterizedProperty | int ITObjectPersistentIDHigh (Variant) {get}               |
| ⛔    | ITObjectPersistentIDLow            | ParameterizedProperty | int ITObjectPersistentIDLow (Variant) {get}                |
| ⛔    | AppCommandMessageProcessingEnabled | Property              | bool AppCommandMessageProcessingEnabled () {get} {set}     |
| ⛔    | BrowserWindow                      | Property              | IITBrowserWindow BrowserWindow () {get}                    |
| ⛔    | ConvertOperationStatus             | Property              | IITConvertOperationStatus ConvertOperationStatus () {get}  |
| ⛔    | CurrentEncoder                     | Property              | IITEncoder CurrentEncoder () {get} {set}                   |
| ⛔    | CurrentEQPreset                    | Property              | IITEQPreset CurrentEQPreset () {get} {set}                 |
| ⛔    | CurrentTrack                       | Property              | IITTrack CurrentTrack () {get}                             |
| ⛔    | CurrentVisual                      | Property              | IITVisual CurrentVisual () {get} {set}                     |
| ✅    | CurrentPlaylist                    | Property              | IITPlaylist CurrentPlaylist () {get}                       |
| ✅    | CurrentPlaylist                    | Property              | IITPlaylist CurrentPlaylist () {get}                       |
| ✅    | CurrentStreamTitle                 | Property              | string CurrentStreamTitle () {get}                         |
| ✅    | CurrentStreamURL                   | Property              | string CurrentStreamURL () {get}                           |
| ✅    | CurrentTrack                       | Property              | IITTrack CurrentTrack () {get}                             |
| ✅    | CurrentVisual                      | Property              | IITVisual CurrentVisual () {get} {set}                     |
| ⛔    | Encoders                           | Property              | IITEncoderCollection Encoders () {get}                     |
| ⛔    | EQEnabled                          | Property              | bool EQEnabled () {get} {set}                              |
| ⛔    | EQPresets                          | Property              | IITEQPresetCollection EQPresets () {get}                   |
| ⛔    | EQWindow                           | Property              | IITWindow EQWindow () {get}                                |
| ⛔    | ForceToForegroundOnDialog          | Property              | bool ForceToForegroundOnDialog () {get} {set}              |
| ⛔    | FullScreenVisuals                  | Property              | bool FullScreenVisuals () {get} {set}                      |
| ⛔    | LibraryPlaylist                    | Property              | IITLibraryPlaylist LibraryPlaylist () {get}                |
| ⛔    | LibrarySource                      | Property              | IITSource LibrarySource () {get}                           |
| ⛔    | LibraryXMLPath                     | Property              | string LibraryXMLPath () {get}                             |
| ⛔    | Mute                               | Property              | bool Mute () {get} {set}                                   |
| ✅    | PlayerPosition                     | Property              | int PlayerPosition () {get} {set}                          |
| ⛔    | PlayerPositionMS                   | Property              | int PlayerPositionMS () {get} {set}                        |
| ✅    | PlayerState                        | Property              | ITPlayerState PlayerState () {get}                         |
| ⛔    | SelectedTracks                     | Property              | IITTrackCollection SelectedTracks () {get}                 |
| ⛔    | SoundVolume                        | Property              | int SoundVolume () {get} {set}                             |
| ⛔    | SoundVolumeControlEnabled          | Property              | bool SoundVolumeControlEnabled () {get}                    |
| ⛔    | Version                            | Property              | string Version () {get}                                    |
| ⛔    | Visuals                            | Property              | IITVisualCollection Visuals () {get}                       |
| ⛔    | VisualsEnabled                     | Property              | bool VisualsEnabled () {get} {set}                         |
| ⛔    | VisualSize                         | Property              | ITVisualSize VisualSize () {get} {set}                     |
| ⛔    | Windows                            | Property              | IITWindowCollection Windows () {get}                       |

⛔: Not used on the program yet
✅: used in the application
