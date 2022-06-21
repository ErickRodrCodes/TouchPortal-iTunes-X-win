enum __MIDL___MIDL_itf_iTunesCOMInterface_0001_0071_0001
{
   ITPlayerStateStopped = 0,
   ITPlayerStatePlaying = 1,
   ITPlayerStateFastForward = 2,
   ITPlayerStateRewind = 3,
}

enum __MIDL___MIDL_itf_iTunesCOMInterface_0001_0071_0002
{
   ITVisualSizeSmall = 0,
   ITVisualSizeMedium = 1,
   ITVisualSizeLarge = 2,
}

enum __MIDL___MIDL_itf_iTunesCOMInterface_0001_0071_0003
{
   ITCOMDisabledReasonOther = 0,
   ITCOMDisabledReasonDialog = 1,
   ITCOMDisabledReasonQuitting = 2,
}

enum __MIDL___MIDL_itf_iTunesCOMInterface_0001_0071_0004
{
   ITPlayButtonStatePlayDisabled = 0,
   ITPlayButtonStatePlayEnabled = 1,
   ITPlayButtonStatePauseEnabled = 2,
   ITPlayButtonStatePauseDisabled = 3,
   ITPlayButtonStateStopEnabled = 4,
   ITPlayButtonStateStopDisabled = 5,
}

enum __MIDL___MIDL_itf_iTunesCOMInterface_0001_0071_0005
{
   ITPlayerButtonPrevious = 0,
   ITPlayerButtonPlay = 1,
   ITPlayerButtonNext = 2,
}

enum __MIDL___MIDL_itf_iTunesCOMInterface_0001_0071_0006
{
   ITPlayerButtonModifierKeyNone = 0,
   ITPlayerButtonModifierKeyShift = 1,
   ITPlayerButtonModifierKeyControl = 2,
   ITPlayerButtonModifierKeyAlt = 4,
   ITPlayerButtonModifierKeyCapsLock = 8,
}

enum __MIDL___MIDL_itf_iTunesCOMInterface_0001_0074_0001
{
   ITEventDatabaseChanged = 1,
   ITEventPlayerPlay = 2,
   ITEventPlayerStop = 3,
   ITEventPlayerPlayingTrackChanged = 4,
   ITEventUserInterfaceEnabled = 5,
   ITEventCOMCallsDisabled = 6,
   ITEventCOMCallsEnabled = 7,
   ITEventQuitting = 8,
   ITEventAboutToPromptUserToQuit = 9,
   ITEventSoundVolumeChanged = 10,
}

enum __MIDL___MIDL_itf_iTunesCOMInterface_0001_0075_0001
{
   ITConvertOperationStatusChanged = 1,
   ITConvertOperationComplete = 2,
}

enum __MIDL___MIDL_itf_iTunesCOMInterface_0001_0078_0001
{
   ITArtworkFormatUnknown = 0,
   ITArtworkFormatJPEG = 1,
   ITArtworkFormatPNG = 2,
   ITArtworkFormatBMP = 3,
}

enum __MIDL___MIDL_itf_iTunesCOMInterface_0001_0084_0001
{
   ITPlaylistKindUnknown = 0,
   ITPlaylistKindLibrary = 1,
   ITPlaylistKindUser = 2,
   ITPlaylistKindCD = 3,
   ITPlaylistKindDevice = 4,
   ITPlaylistKindRadioTuner = 5,
}

enum __MIDL___MIDL_itf_iTunesCOMInterface_0001_0084_0002
{
   ITPlaylistRepeatModeOff = 0,
   ITPlaylistRepeatModeOne = 1,
   ITPlaylistRepeatModeAll = 2,
}

enum __MIDL___MIDL_itf_iTunesCOMInterface_0001_0084_0003
{
   ITPlaylistPrintKindPlaylist = 0,
   ITPlaylistPrintKindAlbumlist = 1,
   ITPlaylistPrintKindInsert = 2,
}

enum __MIDL___MIDL_itf_iTunesCOMInterface_0001_0084_0004
{
   ITPlaylistSearchFieldAll = 0,
   ITPlaylistSearchFieldVisible = 1,
   ITPlaylistSearchFieldArtists = 2,
   ITPlaylistSearchFieldAlbums = 3,
   ITPlaylistSearchFieldComposers = 4,
   ITPlaylistSearchFieldSongNames = 5,
}

enum __MIDL___MIDL_itf_iTunesCOMInterface_0001_0086_0001
{
   ITUserPlaylistSpecialKindNone = 0,
   ITUserPlaylistSpecialKindPurchases = 1,
   ITUserPlaylistSpecialKindITunesDJ = 2,
   ITUserPlaylistSpecialKindPodcasts = 3,
   ITUserPlaylistSpecialKindFolder = 4,
   ITUserPlaylistSpecialKindVideos = 5,
   ITUserPlaylistSpecialKindMusic = 6,
   ITUserPlaylistSpecialKindMovies = 7,
   ITUserPlaylistSpecialKindTVShows = 8,
   ITUserPlaylistSpecialKindBooks = 9,
   ITUserPlaylistSpecialKindITunesU = 10,
   ITUserPlaylistSpecialKindGenius = 11,
}

enum __MIDL___MIDL_itf_iTunesCOMInterface_0001_0089_0001
{
   ITSourceKindUnknown = 0,
   ITSourceKindLibrary = 1,
   ITSourceKindIPod = 2,
   ITSourceKindAudioCD = 3,
   ITSourceKindMP3CD = 4,
   ITSourceKindDevice = 5,
   ITSourceKindRadioTuner = 6,
   ITSourceKindSharedLibrary = 7,
}

enum __MIDL___MIDL_itf_iTunesCOMInterface_0001_0092_0001
{
   ITTrackKindUnknown = 0,
   ITTrackKindFile = 1,
   ITTrackKindCD = 2,
   ITTrackKindURL = 3,
   ITTrackKindDevice = 4,
   ITTrackKindSharedLibrary = 5,
}

enum __MIDL___MIDL_itf_iTunesCOMInterface_0001_0092_0002
{
   ITVideoKindNone = 0,
   ITVideoKindMovie = 1,
   ITVideoKindMusicVideo = 2,
   ITVideoKindTVShow = 3,
}

enum __MIDL___MIDL_itf_iTunesCOMInterface_0001_0092_0003
{
   ITRatingKindUser = 0,
   ITRatingKindComputed = 1,
}

enum __MIDL___MIDL_itf_iTunesCOMInterface_0001_0098_0001
{
   ITWindowKindUnknown = 0,
   ITWindowKindBrowser = 1,
   ITWindowKindPlaylist = 2,
   ITWindowKindEQ = 3,
   ITWindowKindArtwork = 4,
   ITWindowKindNowPlaying = 5,
}

enum ITArtworkFormat
{
   ITArtworkFormatUnknown = 0,
   ITArtworkFormatJPEG = 1,
   ITArtworkFormatPNG = 2,
   ITArtworkFormatBMP = 3,
}

enum ITCOMDisabledReason
{
   ITCOMDisabledReasonOther = 0,
   ITCOMDisabledReasonDialog = 1,
   ITCOMDisabledReasonQuitting = 2,
}

enum ITConvertOperationStatusEvent
{
   ITConvertOperationStatusChanged = 1,
   ITConvertOperationComplete = 2,
}

enum ITEvent
{
   ITEventDatabaseChanged = 1,
   ITEventPlayerPlay = 2,
   ITEventPlayerStop = 3,
   ITEventPlayerPlayingTrackChanged = 4,
   ITEventUserInterfaceEnabled = 5,
   ITEventCOMCallsDisabled = 6,
   ITEventCOMCallsEnabled = 7,
   ITEventQuitting = 8,
   ITEventAboutToPromptUserToQuit = 9,
   ITEventSoundVolumeChanged = 10,
}

enum ITPlayButtonState
{
   ITPlayButtonStatePlayDisabled = 0,
   ITPlayButtonStatePlayEnabled = 1,
   ITPlayButtonStatePauseEnabled = 2,
   ITPlayButtonStatePauseDisabled = 3,
   ITPlayButtonStateStopEnabled = 4,
   ITPlayButtonStateStopDisabled = 5,
}

enum ITPlayerButton
{
   ITPlayerButtonPrevious = 0,
   ITPlayerButtonPlay = 1,
   ITPlayerButtonNext = 2,
}

enum ITPlayerButtonModifierKey
{
   ITPlayerButtonModifierKeyNone = 0,
   ITPlayerButtonModifierKeyShift = 1,
   ITPlayerButtonModifierKeyControl = 2,
   ITPlayerButtonModifierKeyAlt = 4,
   ITPlayerButtonModifierKeyCapsLock = 8,
}

enum ITPlayerState
{
   ITPlayerStateStopped = 0,
   ITPlayerStatePlaying = 1,
   ITPlayerStateFastForward = 2,
   ITPlayerStateRewind = 3,
}

enum ITPlaylistKind
{
   ITPlaylistKindUnknown = 0,
   ITPlaylistKindLibrary = 1,
   ITPlaylistKindUser = 2,
   ITPlaylistKindCD = 3,
   ITPlaylistKindDevice = 4,
   ITPlaylistKindRadioTuner = 5,
}

enum ITPlaylistPrintKind
{
   ITPlaylistPrintKindPlaylist = 0,
   ITPlaylistPrintKindAlbumlist = 1,
   ITPlaylistPrintKindInsert = 2,
}

enum ITPlaylistRepeatMode
{
   ITPlaylistRepeatModeOff = 0,
   ITPlaylistRepeatModeOne = 1,
   ITPlaylistRepeatModeAll = 2,
}

enum ITPlaylistSearchField
{
   ITPlaylistSearchFieldAll = 0,
   ITPlaylistSearchFieldVisible = 1,
   ITPlaylistSearchFieldArtists = 2,
   ITPlaylistSearchFieldAlbums = 3,
   ITPlaylistSearchFieldComposers = 4,
   ITPlaylistSearchFieldSongNames = 5,
}

enum ITRatingKind
{
   ITRatingKindUser = 0,
   ITRatingKindComputed = 1,
}

enum ITSourceKind
{
   ITSourceKindUnknown = 0,
   ITSourceKindLibrary = 1,
   ITSourceKindIPod = 2,
   ITSourceKindAudioCD = 3,
   ITSourceKindMP3CD = 4,
   ITSourceKindDevice = 5,
   ITSourceKindRadioTuner = 6,
   ITSourceKindSharedLibrary = 7,
}

enum ITTrackKind
{
   ITTrackKindUnknown = 0,
   ITTrackKindFile = 1,
   ITTrackKindCD = 2,
   ITTrackKindURL = 3,
   ITTrackKindDevice = 4,
   ITTrackKindSharedLibrary = 5,
}

enum ITUserPlaylistSpecialKind
{
   ITUserPlaylistSpecialKindNone = 0,
   ITUserPlaylistSpecialKindPurchases = 1,
   ITUserPlaylistSpecialKindITunesDJ = 2,
   ITUserPlaylistSpecialKindPodcasts = 3,
   ITUserPlaylistSpecialKindFolder = 4,
   ITUserPlaylistSpecialKindVideos = 5,
   ITUserPlaylistSpecialKindMusic = 6,
   ITUserPlaylistSpecialKindMovies = 7,
   ITUserPlaylistSpecialKindTVShows = 8,
   ITUserPlaylistSpecialKindBooks = 9,
   ITUserPlaylistSpecialKindITunesU = 10,
   ITUserPlaylistSpecialKindGenius = 11,
}

enum ITVideoKind
{
   ITVideoKindNone = 0,
   ITVideoKindMovie = 1,
   ITVideoKindMusicVideo = 2,
   ITVideoKindTVShow = 3,
}

enum ITVisualSize
{
   ITVisualSizeSmall = 0,
   ITVisualSizeMedium = 1,
   ITVisualSizeLarge = 2,
}

enum ITWindowKind
{
   ITWindowKindUnknown = 0,
   ITWindowKindBrowser = 1,
   ITWindowKindPlaylist = 2,
   ITWindowKindEQ = 3,
   ITWindowKindArtwork = 4,
   ITWindowKindNowPlaying = 5,
}




[Guid("5c47a705-8e8a-45a1-9eed-71c993f0bf60")]
interface _IITConvertOperationStatusEvents
{
   /* Methods */
   void OnConvertOperationStatusChangedEvent(string trackName, int progressValue, int maxProgressValue);
   void OnConvertOperationCompleteEvent();
}

[Guid("5846eb78-317e-4b6f-b0c3-11ee8c8feef2")]
interface _IiTunesEvents
{
   /* Methods */
   void OnDatabaseChangedEvent(object deletedObjectIDs, object changedObjectIDs);
   void OnPlayerPlayEvent(object iTrack);
   void OnPlayerStopEvent(object iTrack);
   void OnPlayerPlayingTrackChangedEvent(object iTrack);
   void OnUserInterfaceEnabledEvent();
   void OnCOMCallsDisabledEvent(ITCOMDisabledReason reason);
   void OnCOMCallsEnabledEvent();
   void OnQuittingEvent();
   void OnAboutToPromptUserToQuitEvent();
   void OnSoundVolumeChangedEvent(int newVolume);
}

[Guid("d0a6c1f8-bf3d-4cd8-ac47-fe32bdd17257")]
interface IITArtwork
{
   /* Methods */
   void Delete();
   void SetArtworkFromFile(string filePath);
   void SaveArtworkToFile(string filePath);
   /* Properties */
   ITArtworkFormat Format { get; }
   bool IsDownloadedArtwork { get; }
   string Description { get; set; }
}

[Guid("bf2742d7-418c-4858-9af9-2981b062d23e")]
interface IITArtworkCollection
{
   /* Methods */
   IEnumerator GetEnumerator();
   /* Properties */
   int Count { get; }
   IITArtwork Item(int Index) { get; }
}

[Guid("cf496df3-0fed-4d7d-9bd8-529b6e8a082e")]
interface IITAudioCDPlaylist
{
   /* Methods */
   void GetITObjectIDs([Out] Int32& sourceID, [Out] Int32& playlistID, [Out] Int32& trackID, [Out] Int32& databaseID);
   void Delete();
   void PlayFirstTrack();
   void Print(bool showPrintDialog, ITPlaylistPrintKind printKind, string theme);
   IITTrackCollection Search(string searchText, ITPlaylistSearchField searchFields);
   void Reveal();
   /* Properties */
   string Name { get; set; }
   int Index { get; }
   int sourceID { get; }
   int playlistID { get; }
   int trackID { get; }
   int TrackDatabaseID { get; }
   ITPlaylistKind Kind { get; }
   IITSource Source { get; }
   int Duration { get; }
   bool Shuffle { get; set; }
   Double Size { get; }
   ITPlaylistRepeatMode SongRepeat { get; set; }
   string Time { get; }
   bool Visible { get; }
   IITTrackCollection Tracks { get; }
   string Artist { get; }
   bool Compilation { get; }
   string Composer { get; }
   int DiscCount { get; }
   int DiscNumber { get; }
   string Genre { get; }
   int Year { get; }
}

[Guid("c999f455-c4d5-4aa4-8277-f99753699974")]
interface IITBrowserWindow
{
   /* Properties */
   string Name { get; }
   ITWindowKind Kind { get; }
   bool Visible { get; set; }
   bool Resizable { get; }
   bool Minimized { get; set; }
   bool Maximizable { get; }
   bool Maximized { get; set; }
   bool Zoomable { get; }
   bool Zoomed { get; set; }
   int Top { get; set; }
   int Left { get; set; }
   int Bottom { get; set; }
   int Right { get; set; }
   int Width { get; set; }
   int Height { get; set; }
   bool MiniPlayer { get; set; }
   IITTrackCollection SelectedTracks { get; }
   IITPlaylist SelectedPlaylist { get; set; }
}

[Guid("7063aaf6-aba0-493b-b4fc-920a9f105875")]
interface IITConvertOperationStatus
{
   /* Methods */
   void GetConversionStatus([Out] String& trackName, [Out] Int32& progressValue, [Out] Int32& maxProgressValue);
   void StopConversion();
   /* Properties */
   bool InProgress { get; }
   IITTrackCollection Tracks { get; }
   string trackName { get; }
   int progressValue { get; }
   int maxProgressValue { get; }
}

[Guid("1cf95a1c-55fe-4f45-a2d3-85ac6c504a73")]
interface IITEncoder
{
   /* Properties */
   string Name { get; }
   string Format { get; }
}

[Guid("8862bca9-168d-4549-a9d5-adb35e553ba6")]
interface IITEncoderCollection
{
   /* Methods */
   IEnumerator GetEnumerator();
   /* Properties */
   int Count { get; }
   IITEncoder Item(int Index) { get; }
   IITEncoder ItemByName(string Name) { get; }
}

[Guid("5be75f4f-68fa-4212-acb7-be44ea569759")]
interface IITEQPreset
{
   /* Methods */
   void Delete(bool updateAllTracks);
   void Rename(string newName, bool updateAllTracks);
   /* Properties */
   string Name { get; }
   bool Modifiable { get; }
   Double Preamp { get; set; }
   Double Band1 { get; set; }
   Double Band2 { get; set; }
   Double Band3 { get; set; }
   Double Band4 { get; set; }
   Double Band5 { get; set; }
   Double Band6 { get; set; }
   Double Band7 { get; set; }
   Double Band8 { get; set; }
   Double Band9 { get; set; }
   Double Band10 { get; set; }
}

[Guid("aef4d111-3331-48da-b0c2-b468d5d61d08")]
interface IITEQPresetCollection
{
   /* Methods */
   IEnumerator GetEnumerator();
   /* Properties */
   int Count { get; }
   IITEQPreset Item(int Index) { get; }
   IITEQPreset ItemByName(string Name) { get; }
}

[Guid("00d7fe99-7868-4cc7-ad9e-acfd70d09566")]
interface IITFileOrCDTrack
{
   /* Methods */
   void GetITObjectIDs([Out] Int32& sourceID, [Out] Int32& playlistID, [Out] Int32& trackID, [Out] Int32& databaseID);
   void Delete();
   void Play();
   IITArtwork AddArtworkFromFile(string filePath);
   void UpdateInfoFromFile();
   void UpdatePodcastFeed();
   void Reveal();
   /* Properties */
   string Name { get; set; }
   int Index { get; }
   int sourceID { get; }
   int playlistID { get; }
   int trackID { get; }
   int TrackDatabaseID { get; }
   ITTrackKind Kind { get; }
   IITPlaylist Playlist { get; }
   string Album { get; set; }
   string Artist { get; set; }
   int BitRate { get; }
   int BPM { get; set; }
   string Comment { get; set; }
   bool Compilation { get; set; }
   string Composer { get; set; }
   DateTime DateAdded { get; }
   int DiscCount { get; set; }
   int DiscNumber { get; set; }
   int Duration { get; }
   bool Enabled { get; set; }
   string EQ { get; set; }
   int Finish { get; set; }
   string Genre { get; set; }
   string Grouping { get; set; }
   string KindAsString { get; }
   DateTime ModificationDate { get; }
   int PlayedCount { get; set; }
   DateTime PlayedDate { get; set; }
   int PlayOrderIndex { get; }
   int Rating { get; set; }
   int SampleRate { get; }
   int Size { get; }
   int Start { get; set; }
   string Time { get; }
   int TrackCount { get; set; }
   int TrackNumber { get; set; }
   int VolumeAdjustment { get; set; }
   int Year { get; set; }
   IITArtworkCollection Artwork { get; }
   string Location { get; set; }
   bool Podcast { get; }
   bool RememberBookmark { get; set; }
   bool ExcludeFromShuffle { get; set; }
   string Lyrics { get; set; }
   string Category { get; set; }
   string Description { get; set; }
   string LongDescription { get; set; }
   int BookmarkTime { get; set; }
   ITVideoKind VideoKind { get; set; }
   int SkippedCount { get; set; }
   DateTime SkippedDate { get; set; }
   bool PartOfGaplessAlbum { get; set; }
   string AlbumArtist { get; set; }
   string Show { get; set; }
   int SeasonNumber { get; set; }
   string EpisodeID { get; set; }
   int EpisodeNumber { get; set; }
   int Size64High { get; }
   int Size64Low { get; }
   bool Unplayed { get; set; }
   string SortAlbum { get; set; }
   string SortAlbumArtist { get; set; }
   string SortArtist { get; set; }
   string SortComposer { get; set; }
   string SortName { get; set; }
   string SortShow { get; set; }
   int AlbumRating { get; set; }
   ITRatingKind AlbumRatingKind { get; }
   ITRatingKind ratingKind { get; }
   IITPlaylistCollection Playlists { get; }
   DateTime ReleaseDate { get; }
}

[Guid("cf4d8ace-1720-4fb9-b0ae-9877249e89b0")]
interface IITIPodSource
{
   /* Methods */
   void GetITObjectIDs([Out] Int32& sourceID, [Out] Int32& playlistID, [Out] Int32& trackID, [Out] Int32& databaseID);
   void UpdateIPod();
   void EjectIPod();
   /* Properties */
   string Name { get; set; }
   int Index { get; }
   int sourceID { get; }
   int playlistID { get; }
   int trackID { get; }
   int TrackDatabaseID { get; }
   ITSourceKind Kind { get; }
   Double Capacity { get; }
   Double FreeSpace { get; }
   IITPlaylistCollection Playlists { get; }
   string SoftwareVersion { get; }
}

[Guid("53ae1704-491c-4289-94a0-958815675a3d")]
interface IITLibraryPlaylist
{
   /* Methods */
   void GetITObjectIDs([Out] Int32& sourceID, [Out] Int32& playlistID, [Out] Int32& trackID, [Out] Int32& databaseID);
   void Delete();
   void PlayFirstTrack();
   void Print(bool showPrintDialog, ITPlaylistPrintKind printKind, string theme);
   IITTrackCollection Search(string searchText, ITPlaylistSearchField searchFields);
   IITOperationStatus AddFile(string filePath);
   IITOperationStatus AddFiles(Object& filePaths);
   IITURLTrack AddURL(string URL);
   IITTrack AddTrack(Object& iTrackToAdd);
   /* Properties */
   string Name { get; set; }
   int Index { get; }
   int sourceID { get; }
   int playlistID { get; }
   int trackID { get; }
   int TrackDatabaseID { get; }
   ITPlaylistKind Kind { get; }
   IITSource Source { get; }
   int Duration { get; }
   bool Shuffle { get; set; }
   Double Size { get; }
   ITPlaylistRepeatMode SongRepeat { get; set; }
   string Time { get; }
   bool Visible { get; }
   IITTrackCollection Tracks { get; }
}

[Guid("9fab0e27-70d7-4e3a-9965-b0c8b8869bb6")]
interface IITObject
{
   /* Methods */
   void GetITObjectIDs([Out] Int32& sourceID, [Out] Int32& playlistID, [Out] Int32& trackID, [Out] Int32& databaseID);
   /* Properties */
   string Name { get; set; }
   int Index { get; }
   int sourceID { get; }
   int playlistID { get; }
   int trackID { get; }
   int TrackDatabaseID { get; }
}

[Guid("206479c9-fe32-4f9b-a18a-475ac939b479")]
interface IITOperationStatus
{
   /* Properties */
   bool InProgress { get; }
   IITTrackCollection Tracks { get; }
}

[Guid("3d5e072f-2a77-4b17-9e73-e03b77cccca9")]
interface IITPlaylist
{
   /* Methods */
   void GetITObjectIDs([Out] Int32& sourceID, [Out] Int32& playlistID, [Out] Int32& trackID, [Out] Int32& databaseID);
   void Delete();
   void PlayFirstTrack();
   void Print(bool showPrintDialog, ITPlaylistPrintKind printKind, string theme);
   IITTrackCollection Search(string searchText, ITPlaylistSearchField searchFields);
   /* Properties */
   string Name { get; set; }
   int Index { get; }
   int sourceID { get; }
   int playlistID { get; }
   int trackID { get; }
   int TrackDatabaseID { get; }
   ITPlaylistKind Kind { get; }
   IITSource Source { get; }
   int Duration { get; }
   bool Shuffle { get; set; }
   Double Size { get; }
   ITPlaylistRepeatMode SongRepeat { get; set; }
   string Time { get; }
   bool Visible { get; }
   IITTrackCollection Tracks { get; }
}

[Guid("ff194254-909d-4437-9c50-3aac2ae6305c")]
interface IITPlaylistCollection
{
   /* Methods */
   IEnumerator GetEnumerator();
   /* Properties */
   int Count { get; }
   IITPlaylist Item(int Index) { get; }
   IITPlaylist ItemByName(string Name) { get; }
   IITPlaylist ItemByPersistentID(int highID, int lowID) { get; }
}

[Guid("349cbb45-2e5a-4822-8e4a-a75555a186f7")]
interface IITPlaylistWindow
{
   /* Properties */
   string Name { get; }
   ITWindowKind Kind { get; }
   bool Visible { get; set; }
   bool Resizable { get; }
   bool Minimized { get; set; }
   bool Maximizable { get; }
   bool Maximized { get; set; }
   bool Zoomable { get; }
   bool Zoomed { get; set; }
   int Top { get; set; }
   int Left { get; set; }
   int Bottom { get; set; }
   int Right { get; set; }
   int Width { get; set; }
   int Height { get; set; }
   IITTrackCollection SelectedTracks { get; }
   IITPlaylist Playlist { get; }
}

[Guid("aec1c4d3-aef1-4255-b892-3e3d13adfdf9")]
interface IITSource
{
   /* Methods */
   void GetITObjectIDs([Out] Int32& sourceID, [Out] Int32& playlistID, [Out] Int32& trackID, [Out] Int32& databaseID);
   /* Properties */
   string Name { get; set; }
   int Index { get; }
   int sourceID { get; }
   int playlistID { get; }
   int trackID { get; }
   int TrackDatabaseID { get; }
   ITSourceKind Kind { get; }
   Double Capacity { get; }
   Double FreeSpace { get; }
   IITPlaylistCollection Playlists { get; }
}

[Guid("2ff6ce20-ff87-4183-b0b3-f323d047af41")]
interface IITSourceCollection
{
   /* Methods */
   IEnumerator GetEnumerator();
   /* Properties */
   int Count { get; }
   IITSource Item(int Index) { get; }
   IITSource ItemByName(string Name) { get; }
   IITSource ItemByPersistentID(int highID, int lowID) { get; }
}

[Guid("4cb0915d-1e54-4727-baf3-ce6cc9a225a1")]
interface IITTrack
{
   /* Methods */
   void GetITObjectIDs([Out] Int32& sourceID, [Out] Int32& playlistID, [Out] Int32& trackID, [Out] Int32& databaseID);
   void Delete();
   void Play();
   IITArtwork AddArtworkFromFile(string filePath);
   /* Properties */
   string Name { get; set; }
   int Index { get; }
   int sourceID { get; }
   int playlistID { get; }
   int trackID { get; }
   int TrackDatabaseID { get; }
   ITTrackKind Kind { get; }
   IITPlaylist Playlist { get; }
   string Album { get; set; }
   string Artist { get; set; }
   int BitRate { get; }
   int BPM { get; set; }
   string Comment { get; set; }
   bool Compilation { get; set; }
   string Composer { get; set; }
   DateTime DateAdded { get; }
   int DiscCount { get; set; }
   int DiscNumber { get; set; }
   int Duration { get; }
   bool Enabled { get; set; }
   string EQ { get; set; }
   int Finish { get; set; }
   string Genre { get; set; }
   string Grouping { get; set; }
   string KindAsString { get; }
   DateTime ModificationDate { get; }
   int PlayedCount { get; set; }
   DateTime PlayedDate { get; set; }
   int PlayOrderIndex { get; }
   int Rating { get; set; }
   int SampleRate { get; }
   int Size { get; }
   int Start { get; set; }
   string Time { get; }
   int TrackCount { get; set; }
   int TrackNumber { get; set; }
   int VolumeAdjustment { get; set; }
   int Year { get; set; }
   IITArtworkCollection Artwork { get; }
}

[Guid("755d76f1-6b85-4ce4-8f5f-f88d9743dcd8")]
interface IITTrackCollection
{
   /* Methods */
   IEnumerator GetEnumerator();
   /* Properties */
   int Count { get; }
   IITTrack Item(int Index) { get; }
   IITTrack ItemByPlayOrder(int Index) { get; }
   IITTrack ItemByName(string Name) { get; }
   IITTrack ItemByPersistentID(int highID, int lowID) { get; }
}

[Guid("9dd6680b-3edc-40db-a771-e6fe4832e34a")]
interface IiTunes
{
   /* Methods */
   void BackTrack();
   void FastForward();
   void NextTrack();
   void Pause();
   void Play();
   void PlayFile(string filePath);
   void PlayPause();
   void PreviousTrack();
   void Resume();
   void Rewind();
   void Stop();
   IITOperationStatus ConvertFile(string filePath);
   IITOperationStatus ConvertFiles(Object& filePaths);
   IITOperationStatus ConvertTrack(Object& iTrackToConvert);
   IITOperationStatus ConvertTracks(Object& iTracksToConvert);
   bool CheckVersion(int majorVersion, int minorVersion);
   IITObject GetITObjectByID(int sourceID, int playlistID, int trackID, int databaseID);
   IITPlaylist CreatePlaylist(string playlistName);
   void OpenURL(string URL);
   void GotoMusicStoreHomePage();
   void UpdateIPod();
   void Authorize(int numElems, Object& data, String& names);
   void Quit();
   void SetOptions(int options);
   iTunesConvertOperationStatus ConvertFile2(string filePath);
   iTunesConvertOperationStatus ConvertFiles2(Object& filePaths);
   iTunesConvertOperationStatus ConvertTrack2(Object& iTrackToConvert);
   iTunesConvertOperationStatus ConvertTracks2(Object& iTracksToConvert);
   IITEQPreset CreateEQPreset(string eqPresetName);
   IITPlaylist CreatePlaylistInSource(string playlistName, Object& iSource);
   void GetPlayerButtonsState([Out] Boolean& previousEnabled, [Out] ITPlayButtonState& playPauseStopState, [Out] Boolean& nextEnabled);
   void PlayerButtonClicked(ITPlayerButton playerButton, int playerButtonModifierKeys);
   void SubscribeToPodcast(string URL);
   void UpdatePodcastFeeds();
   IITPlaylist CreateFolder(string folderName);
   IITPlaylist CreateFolderInSource(string folderName, Object& iSource);
   void GetITObjectPersistentIDs(Object& iObject, [Out] Int32& highID, [Out] Int32& lowID);
   /* Properties */
   IITSourceCollection Sources { get; }
   IITEncoderCollection Encoders { get; }
   IITEQPresetCollection EQPresets { get; }
   IITVisualCollection Visuals { get; }
   IITWindowCollection Windows { get; }
   int SoundVolume { get; set; }
   bool Mute { get; set; }
   ITPlayerState PlayerState { get; }
   int PlayerPosition { get; set; }
   IITEncoder CurrentEncoder { get; set; }
   bool VisualsEnabled { get; set; }
   bool FullScreenVisuals { get; set; }
   ITVisualSize VisualSize { get; set; }
   IITVisual CurrentVisual { get; set; }
   bool EQEnabled { get; set; }
   IITEQPreset CurrentEQPreset { get; set; }
   string CurrentStreamTitle { get; }
   string CurrentStreamURL { get; }
   IITBrowserWindow BrowserWindow { get; }
   IITWindow EQWindow { get; }
   IITSource LibrarySource { get; }
   IITLibraryPlaylist LibraryPlaylist { get; }
   IITTrack CurrentTrack { get; }
   IITPlaylist CurrentPlaylist { get; }
   IITTrackCollection SelectedTracks { get; }
   string Version { get; }
   bool AppCommandMessageProcessingEnabled { get; set; }
   bool ForceToForegroundOnDialog { get; set; }
   bool CanSetShuffle(Object& iPlaylist) { get; }
   bool CanSetSongRepeat(Object& iPlaylist) { get; }
   iTunesConvertOperationStatus ConvertOperationStatus { get; }
   bool SoundVolumeControlEnabled { get; }
   string LibraryXMLPath { get; }
   int ITObjectPersistentIDHigh(Object& iObject) { get; }
   int ITObjectPersistentIDLow(Object& iObject) { get; }
   int PlayerPositionMS { get; set; }
}

[Guid("1116e3b5-29fd-4393-a7bd-454e5e327900")]
interface IITURLTrack
{
   /* Methods */
   void GetITObjectIDs([Out] Int32& sourceID, [Out] Int32& playlistID, [Out] Int32& trackID, [Out] Int32& databaseID);
   void Delete();
   void Play();
   IITArtwork AddArtworkFromFile(string filePath);
   void UpdatePodcastFeed();
   void DownloadPodcastEpisode();
   void Reveal();
   /* Properties */
   string Name { get; set; }
   int Index { get; }
   int sourceID { get; }
   int playlistID { get; }
   int trackID { get; }
   int TrackDatabaseID { get; }
   ITTrackKind Kind { get; }
   IITPlaylist Playlist { get; }
   string Album { get; set; }
   string Artist { get; set; }
   int BitRate { get; }
   int BPM { get; set; }
   string Comment { get; set; }
   bool Compilation { get; set; }
   string Composer { get; set; }
   DateTime DateAdded { get; }
   int DiscCount { get; set; }
   int DiscNumber { get; set; }
   int Duration { get; }
   bool Enabled { get; set; }
   string EQ { get; set; }
   int Finish { get; set; }
   string Genre { get; set; }
   string Grouping { get; set; }
   string KindAsString { get; }
   DateTime ModificationDate { get; }
   int PlayedCount { get; set; }
   DateTime PlayedDate { get; set; }
   int PlayOrderIndex { get; }
   int Rating { get; set; }
   int SampleRate { get; }
   int Size { get; }
   int Start { get; set; }
   string Time { get; }
   int TrackCount { get; set; }
   int TrackNumber { get; set; }
   int VolumeAdjustment { get; set; }
   int Year { get; set; }
   IITArtworkCollection Artwork { get; }
   string URL { get; set; }
   bool Podcast { get; }
   string Category { get; set; }
   string Description { get; set; }
   string LongDescription { get; set; }
   int AlbumRating { get; set; }
   ITRatingKind AlbumRatingKind { get; }
   ITRatingKind ratingKind { get; }
   IITPlaylistCollection Playlists { get; }
}

[Guid("0a504ded-a0b5-465a-8a94-50e20d7df692")]
interface IITUserPlaylist
{
   /* Methods */
   void GetITObjectIDs([Out] Int32& sourceID, [Out] Int32& playlistID, [Out] Int32& trackID, [Out] Int32& databaseID);
   void Delete();
   void PlayFirstTrack();
   void Print(bool showPrintDialog, ITPlaylistPrintKind printKind, string theme);
   IITTrackCollection Search(string searchText, ITPlaylistSearchField searchFields);
   IITOperationStatus AddFile(string filePath);
   IITOperationStatus AddFiles(Object& filePaths);
   IITURLTrack AddURL(string URL);
   IITTrack AddTrack(Object& iTrackToAdd);
   IITPlaylist CreatePlaylist(string playlistName);
   IITPlaylist CreateFolder(string folderName);
   void Reveal();
   /* Properties */
   string Name { get; set; }
   int Index { get; }
   int sourceID { get; }
   int playlistID { get; }
   int trackID { get; }
   int TrackDatabaseID { get; }
   ITPlaylistKind Kind { get; }
   IITSource Source { get; }
   int Duration { get; }
   bool Shuffle { get; set; }
   Double Size { get; }
   ITPlaylistRepeatMode SongRepeat { get; set; }
   string Time { get; }
   bool Visible { get; }
   IITTrackCollection Tracks { get; }
   bool Shared { get; set; }
   bool Smart { get; }
   ITUserPlaylistSpecialKind SpecialKind { get; }
   IITUserPlaylist Parent { get; set; }
}

[Guid("340f3315-ed72-4c09-9acf-21eb4bdf9931")]
interface IITVisual
{
   /* Properties */
   string Name { get; }
}

[Guid("88a4ccdd-114f-4043-b69b-84d4e6274957")]
interface IITVisualCollection
{
   /* Methods */
   IEnumerator GetEnumerator();
   /* Properties */
   int Count { get; }
   IITVisual Item(int Index) { get; }
   IITVisual ItemByName(string Name) { get; }
}

[Guid("370d7be0-3a89-4a42-b902-c75fc138be09")]
interface IITWindow
{
   /* Properties */
   string Name { get; }
   ITWindowKind Kind { get; }
   bool Visible { get; set; }
   bool Resizable { get; }
   bool Minimized { get; set; }
   bool Maximizable { get; }
   bool Maximized { get; set; }
   bool Zoomable { get; }
   bool Zoomed { get; set; }
   int Top { get; set; }
   int Left { get; set; }
   int Bottom { get; set; }
   int Right { get; set; }
   int Width { get; set; }
   int Height { get; set; }
}

[Guid("3d8de381-6c0e-481f-a865-e2385f59fa43")]
interface IITWindowCollection
{
   /* Methods */
   IEnumerator GetEnumerator();
   /* Properties */
   int Count { get; }
   IITWindow Item(int Index) { get; }
   IITWindow ItemByName(string Name) { get; }
}

[Guid("9dd6680b-3edc-40db-a771-e6fe4832e34a")]
interface iTunesApp
{
}

[Guid("7063aaf6-aba0-493b-b4fc-920a9f105875")]
interface iTunesConvertOperationStatus
{
}


