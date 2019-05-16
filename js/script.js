var myRequest = new XMLHttpRequest();
myRequest.open(
    'GET',
     'https://www.googleapis.com/youtube/v3/search?key=AIzaSyCTWC75i70moJLzyNh3tt4jzCljZcRkU8Y&type=video&part=snippet&maxResults=15&q=js',
      true
      );
myRequest.send();
myRequest.onreadystatechange = function(){
    if(myRequest.readyState !== 4){return}
    console.log('end');
    if(myRequest.status == 200){console.log('result', JSON.parse(myRequest.responseText))}
    else{console.log('err', myRequest.responseText)}
};

/*
let query = document.getElementById('query');        
        console.log('query:', query);
let q='';
let youtube = [{
    "url": "https://www.googleapis.com/youtube/v3/search",
    "part" : "snippet, id",
     "q": "q",
     "type": "video",
     "key": "AIzaSyCwx3NefgqBag5ysz2sIR14Wj9mbIYr_CM"
      
 }];
query.onclick = function (e) {
    q= this.value;
    console.log('q:', q);
    // Run GET Request on API
    function reqListener () {
        console.log(this.responseText);
      }
      var myRequest = new XMLHttpRequest();
      myRequest.onload = reqListener;
      myRequest.open("get", "https://www.googleapis.com/youtube/v3/search", true);
      myRequest.send();

      myRequest.onreadystatechange = function(){
        console.log(this.status);
    };
}
 */
/*
//It works:
$(function(){
    $('#query').click(function search(){
    //Clear Results
   // $('#results').innerHTML('');
  //  $('#buttons').innerHTML('');
    //Get Form Input
    q = $('#query').val();
    console.log('q:', q);
    // Run GET Request on API
    
    /*$.get(
        'https://www.googleapis.com/youtube/v3/search', {
            part: 'snippet, id',
            q: q,
            type: 'video',
            key: 'AIzaSyCwx3NefgqBag5ysz2sIR14Wj9mbIYr_CM'},
            function(data) {
                var nextPageToken = data.nextPageToken;
                var prevPageToken = data.prevPageToken;
                console.log(data);
               /* $.each(data.items, function(i, item){
                    //Get Output
var output = getOutput(item);
//Display Results
$('#results').append(output);
                })

            }
            )
        
        });
        });*/
