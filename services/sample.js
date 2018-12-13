//write func to retrieve json
//make ajax request with/ fetch

function fetchAlbums() {
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
        .then(res => res.json())
        .then(json => console.log(json));
}

fetchAlbums();

//identify async operation/code
//put aysnc infront of function
//identify promises and put await infront
//assign resolve to consts
//

//async function fetchAlbums() {
const fetchAlbums = async () => {
    const res = await fetch('https://rallycoding.herokuapp.com/api/music_albums')
    const json = await res.json();

    console.log(json);
}

fetchAlbums();