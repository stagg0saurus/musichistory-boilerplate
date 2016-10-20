var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

songs.unshift("Monster Mash > by Bobby Picket on the album The Original Monster Mash");
songs.push("King of the Streets > by Lazerhawk on the album Skull and Shark");

for (var i = 0; i < songs.length; i++) {
	songs[i] = songs[i].replace(/\*|\)|\(|\!|\@|/g, '');
	songs[i] = songs[i].replace(/\>/g, "-");
	
	}

console.log(songs); 


songBoard = {
	song: [], 
	artist: [], 
	album: [], 
	genre: []

}

for (var k = 0; k < 7; k++) {
	songBoard.song.push(songs[k].slice(0, songs[k].indexOf('-')-1));
	songBoard.artist.push(songs[k].slice(songs[k].indexOf("by")+ 3, songs[k].indexOf("album")-8));
	songBoard.album.push(songs[k].slice(songs[k].indexOf('album')+ 6)); 

}



for (var j =0; j < songBoard.song.length; j++) {
	document.getElementsByClassName("songOut")[j].innerHTML = songBoard.song[j]; 
	document.getElementsByClassName("artistOut")[j].innerHTML = songBoard.artist[j];
	document.getElementsByClassName("albumOut")[j].innerHTML = songBoard.album[j];
}


console.log(songBoard);
	


