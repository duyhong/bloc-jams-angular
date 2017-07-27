(function() {
     function SongPlayer($rootScope, Fixtures) {
         
         /**
         * @desc song player object, an empty object to expose public attributes and public methods 
         * @type {Object}
         */
         var SongPlayer = {};
         
         /**
         * @desc album object, containing properties of an album
         * @type {Object}
         */
         var currentAlbum = Fixtures.getAlbum();
          
         /**
         * @desc Buzz object audio file
         * @type {Object}
         */
         var currentBuzzObject = null;
         
        /**
         * @function setSong
         * @desc Stops currently playing song and loads new audio file as currentBuzzObject
         * @param {Object} song
         */
         var setSong = function(song) {
            if (currentBuzzObject) {
                currentBuzzObject.stop();
                SongPlayer.currentSong.playing = null;
            }

            currentBuzzObject = new buzz.sound(song.audioUrl, {
                formats: ['mp3'],
                preload: true
            });
             
             currentBuzzObject.bind('timeupdate', function() {
                $rootScope.$apply(function() {
                    SongPlayer.currentTime = currentBuzzObject.getTime();
                });
             });

            SongPlayer.currentSong = song;
         };
         
         /**
         * @function playSong
         * @desc Plays the current Buzz object and sets the playing property of the song object to true
         * @param {Object} song
         */
         var playSong = function(song) {
             currentBuzzObject.play();
             song.playing = true;
         }
         
         /**
         * @function stopSong
         * @desc Stops the current Buzz object and sets the playing property of the song object to null
         * @param {Object} song
         */
         var stopSong = function(song) {
             currentBuzzObject.stop();
             song.playing = null;
         }
         
         /**
         * @function getSongIndex
         * @desc gets the index of the parameter song in the songs array
         * @param {Object} song
         */
         var getSongIndex = function(song) {
            return currentAlbum.songs.indexOf(song);
         };
         
        /**
         * @desc Active song object from list of songs
         * @type {Object}
         */
         SongPlayer.currentSong = null;
         
         /**
         * @desc Current playback time (in seconds) of currently playing song
         * @type {Number}
         */
         SongPlayer.currentTime = null;
         
         /**
         * @desc Current volume (on a scale from 0-100) of currently playing song
         * @type {Number}
         */
         SongPlayer.volume = 80;
        
         /**
        * @function play
        * @desc Play current or new song
        * @param {Object} song
        */
         SongPlayer.play = function(song) {
             
             song = song || SongPlayer.currentSong;
             
             if (SongPlayer.currentSong !== song) {
                 setSong(song);
 
                 playSong(song);
                 
              } else if (SongPlayer.currentSong === song) {
                    if (currentBuzzObject.isPaused()) {
                        playSong(song);
                     }
              }
          };
         
         /**
        * @method pause
        * @desc Pause current song
        * @param {Object} song
        */
         SongPlayer.pause = function(song) {
            song = song || SongPlayer.currentSong;
            
            currentBuzzObject.pause();
            song.playing = false;
         };
         
         /**
         * @method previous
         * @desc gets the index of previous song of the current song in the songs array
         */
         SongPlayer.previous = function() {
            var currentSongIndex = getSongIndex(SongPlayer.currentSong);
            currentSongIndex--;
            
            if (currentSongIndex < 0) {
                //currentBuzzObject.stop();
                //SongPlayer.currentSong.playing = null;
                stopSong(SongPlayer.currentSong.playing);
            } else {
                var song = currentAlbum.songs[currentSongIndex];
                setSong(song);
                playSong(song);
            }
         };
         
         /**
         * @method next
         * @desc gets the index of next song of the current song in the songs array
         */
         SongPlayer.next = function() {
            var currentSongIndex = getSongIndex(SongPlayer.currentSong);
            currentSongIndex++;
            
            if (currentSongIndex > currentAlbum.songs.length - 1) {
                //currentBuzzObject.stop();
                //SongPlayer.currentSong.playing = null;
                stopSong(SongPlayer.currentSong.playing);
            } else {
                var song = currentAlbum.songs[currentSongIndex];
                setSong(song);
                playSong(song);
            }
         };
         
         /**
         * @function setCurrentTime
         * @desc Set current time (in seconds) of currently playing song
         * @param {Number} time
         */
         SongPlayer.setCurrentTime = function(time) {
             if (currentBuzzObject) {
                 currentBuzzObject.setTime(time);
             }
         };
         
         SongPlayer.setVolume = function(volume) {
             if (currentBuzzObject) {
                 currentBuzzObject.setVolume(volume);
             }
         }
         
         return SongPlayer;
     }
 
     angular
         .module('blocJams')
         .factory('SongPlayer', ['$rootScope', 'Fixtures', SongPlayer]);
 })();