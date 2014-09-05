(function() {

  var parse = function() {
    Parse.initialize("YyR2OejscWJcCFaadJH0igburHfokx3WRBetikym", "K70vz1T5Ppgn4w77wZhG7jpfmhkOc0sV9oi53NI0");
    
    
    var getNfcTags = function(callback) {
        var nfcTags = Parse.Object.extend("NFC");
        var query = new Parse.Query(nfcTags);
        
        query.find({
          success : function(results) {
            callback(results);
          },
          error: function(error) {
            alert("Error: " + error.message);
          }
        });
        
    };
    
    var getUsers = function(callback){
      var query = new Parse.Query(Parse.User);
      query.find({
          success : function(results) {
            callback(results);
          },
          error: function(error) {
            alert("Error: " + error.message);
          }
        });
      
    }
    
    
    var getGame = function(callback) {
      var game = Parse.Object.extend("Game");
        var query = new Parse.Query(game);
        
        query.find({
          success : function(results) {
            callback(results[0]);
          },
          error: function(error) {
            console.log("Error: " + error.message);
          }
        });
    }
    
    var getNfcStamps = function(callback) {
      var nfcTags = Parse.Object.extend("nfcStamp");
      var query = new Parse.Query(nfcTags);
      
      query.find({
          success : function(results) {
            callback(results);
          },
          error: function(error) {
            console.log("Error: " + error.message);
          }
        });
    }
    
    var deleteGame = function(callback){
      
    }
    
    return {
      getTags: getNfcTags,
      getGame: getGame,
      getNfcStamps: getNfcStamps, 
      getUsers: getUsers
    };
  
  };

  var module = angular.module("nfc");
  module.factory("parse", parse);

}());