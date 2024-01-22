function binarySearchPlaylistSorted(playlist, targetSong) {
    let start = 0;
let end = playlist.length - 1;

while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let midSong = playlist[mid];

    if (midSong === targetSong) {
        return `Song ${targetSong} found at index ${mid}.`;
    } else if (midSong < targetSong) {
        start = mid + 1;
    } else {
        end = mid - 1;
    }
}

return `Song ${targetSong} not found in the playlist.`;
}

// Example Usage:
// const sortedPlaylist = ["Pop Song", "Rock Anthem", "Jazz Fusion", "Indie Ballad", "Hip Hop Groove"];
// const searchSong = "Jazz Fusion";
console.log(binarySearchPlaylistSorted(sortedPlaylist, searchSong));