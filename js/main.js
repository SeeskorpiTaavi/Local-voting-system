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

    function fetchartistit(){
        var artistit = JSON.parse(localStorage.getItem('artistit'));

    var artistitResults = document.getElementById('artistitResults');

    artistitResults.innerHTML = '';
    for(var i = 0; i < artistit.length; i++){
        var voting = artistit[i].voting;

    }

}
