document.getElementById('myForm').addEventListener('submit', saveBookmark);

function saveBookmark(e){
    var artistVote = document.getElementById('artistVote').value;

    var bookmark = {
        voting: artistVote
    }

    if(localStorage.getItem('artistit') === null){

        var artistit = [];

        artistit.push(bookmark);

        localStorage.setItem('artistit', JSON.stringify(artistit));

    } else {
        var artistit = JSON.parse(localStorage.getItem('artistit'));
        
        artistit.push(bookmark);

        localStorage.setItem('artistit', JSON.stringify(artistit));
    }

    e.preventDefault();
}

    function haeArtistit(){
        var artistit = JSON.parse(localStorage.getItem('artistit'));

    var artistVote = document.getElementById('artistVote');

    artistitResults.innerHTML = '';
    for(var i = 0; i < artistit.length; i++){
        var voting = artistit[i].voting;
    }
}
