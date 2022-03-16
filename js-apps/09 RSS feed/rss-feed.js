// url from our rss feed
let url = 'https://api.daily.dev/rss/b/5288401e-fc3b-4a14-bc78-55aa1c44a724';
const textarea = document.querySelector('#feed-textarea > ul');
const randomf = document.getElementById('random-f')
// date panel
const date = new Date();
document.querySelector('#date').innerHTML = date.toDateString();
  
// feed panel
// we load the content inside the url using feednami and then we show the value we want to show
feednami.load(url)
  .then(feed => {
    textarea.value = ''
    
    // random feed element
    var randomnumber = Math.floor(Math.random() * feed.entries.length)
    //Math.random() generate a random number between 0 and 1
    //feed.entries.length is the length of the rss feed array
    //random*length is a distribution between 0*length and 1*length 
    //Math.floor round the integer so we can use it as an address for the rss feed array
    
    randomf.innerHTML = 
    `<a href="${feed.entries[randomnumber].link}">${feed.entries[randomnumber].title}</a>`;
    // the link for the rss feed is in feed.entries[N].link 
    // the title of the rss feed is in feed.entries[N].title 
    // the elements inside feed.entries are self-explanatory
    // if we explore 'feed' we can see the elements we can show like date and categories 

    console.log(feed); // if we want to see in the console how the entire feed is structured 
    //console.log(feed.entries[N]); // if we want to see only the N element of the feed array
    //console.log(feed.entries.length); // length of the feed array


    // recent feed list
    for(let entry of feed.entries){
        // the foor loop scan the entire array and generate an 'li' for every feed.entries[]

        // create a list element
        // and add HTML content to list items
        let li = document.createElement('li');
        li.innerHTML = `<p><a href="${entry.link}">${entry.title}</a></p>`;
        
        // append HTML content to list 
        textarea.appendChild(li);
        
    }
});

//my shareable bookmarks url = 'https://api.daily.dev/rss/b/5288401e-fc3b-4a14-bc78-55aa1c44a724';

//Using feednami to fetch RSS feeds
//https://toolkit.sekando.com/docs/en/feednami
//https://github.com/richardkazuomiller/feednami-client/blob/master/src/feednami-client.js
//https://static.sekandocdn.net/static/feednami/feednami-client-v1.1.js