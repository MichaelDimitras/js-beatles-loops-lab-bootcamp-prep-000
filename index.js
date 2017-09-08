function theBeatlesPlay(musician, instrument){
  var plays = [];
  for(var i = 0; i < musician.length){
    plays = [...plays, musician[i] + " plays " + instrument[i]];
    }
}


