(function() {
     function AlbumCtrl() {
        this.albumData = angular.copy(albumPicasso);
        //console.log($scope, this); 
     }
 
     angular
         .module('blocJams')
         .controller('AlbumCtrl', AlbumCtrl);
 })();