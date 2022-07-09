// Project Requirements

// Build a Single Page Application (SPA). Build with HTML, CSS, and JavaScript and will communicate with a public API.

// 1 page
// html, css and js
// use API
// fetch and json the data
// use at least 3 event listeners with their own callback functions.
// use at least 1 instance of array iteration (could use map, forEach, filter, etc)
// Keep your code DRY (Do not repeat yourself) by utilizing functions to abstract repetitive code.

// stretch goals

// use JSON server ( https://www.npmjs.com/package/json-server ) to persist your app's interactivity. 



// strategy, timeline and tips

// planning
    // plan out your features
    // develop user stories
        // as [a user], i want [to perform this action] so that [i can accomplish this goal].
        // features should not need you there to explain them to users
    // plan out the structure of your JSON requests

// project pitches
    // must pitch and get approval before starting

// project pitches must include: 

// The basic story of your application
// The core features of your MVP (minimum viable product)
// The API data you'll be using and how you'll use it
// Challenges you expect to face
// How you are meeting the requirements of the project

// MVP ASAP

// Build a Minimum Viable Product (MVP) as quickly as possible.
    // Pick an API and explore it early on to ensure it will work for your need

// Guidelines for Staying Organized

// Describe/sketch your ideas (use diagrams!).
// Start by creating a frontend directory with the basic files you'll need
// Next, build enough code to get some API data to work with. Don't worry about 
// building all of your async code yet, just get to the point where you can 
// access one endpoint on an API, then start working on getting that data displayed.
// Then, continue to build additional async code and frontend features.
// Continue building features one by one.


// --------------------------------------------------------------------------------

// checking public APIs


// APIs of interest
// IPify	Get your public IP address	https://api.ipify.org?format=json
// 	Jikan	Unofficial MyAnimeList API	https://api.jikan.moe/v3/search/anime?q=naruto
// CoinDesk	Bitcoin price index	https://api.coindesk.com/v1/bpi/currentprice.json
// CoinBase	Currency codes and names	https://api.coinbase.com/v2/currencies
// 	Binance	24 hr crypto data	https://api2.binance.com/api/v3/ticker/24hr
//  CoinMap	Crypto ATMs	https://coinmap.org/api/v1/venues/
// Dogs	Random dog images	https://dog.ceo/api/breeds/image/random
//  HTTP Cats	Cat images for HTTP status codes	https://http.cat/401
//  Image-Charts	Chart images	https://image-charts.com/chart?cht=p3&chs=700×100&chd=t:60,40&chl=Hello|World&chan&chf=ps0-0,lg,45,ffeb3b,0.2,f44336,1|ps0-1,lg,45,8bc34a,0.2,009688,1
// Imgflip	Popular memes	https://api.imgflip.com/get_memes
// Kraken	Crypto data	https://api.kraken.com/0/public/Trades?pair=ltcusd
// 	KuCoin	Crypto data	https://api.kucoin.com/api/v1/market/stats?symbol=BTC-USDT
// Nager.Date	Public holidays	https://date.nager.at/api/v2/publicholidays/2020/US
// Nominatum	Locations and addresses	https://nominatim.openstreetmap.org/search.php?city=taipei&format=jsonv2
// 	OpenSea	NFTs	https://api.opensea.io/api/v1/assets?format=json
// 	Public APIs	List public APIs	https://api.publicapis.org/entries
// RandomUser	Fake user data generator	https://randomuser.me/api/
// Reddit	Public content from Reddit	https://www.reddit.com/r/Wallstreetbets/top.json?limit=10&t=year
// Teleport	Location and quality of life data	https://api.teleport.org/api/urban_areas/teleport%3A9q8yy/scores/
// Wayback Machine	Internet archive availability	https://archive.org/wayback/available?url=google.com
// WazirX	Crypto data	https://api.wazirx.com/sapi/v1/tickers/24hr
// Wikipedia	Daily pageviews for a page	https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/en.wikipedia/all-access/all-agents/Tiger_King/daily/20210901/20210930
// WordPress	Public posts from any WordPress site	https://techcrunch.com/wp-json/wp/v2/posts?per_page=100&context=embed
// Zippopotamus	Zip code information	https://api.zippopotam.us/us/90210
// Archive.org	Large public digital archive	https://archive.org/metadata/TheAdventuresOfTomSawyer_201303


// Makeup	Makeup brands and product info	http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline

// idea: a single page app that lets you search for makeup by brand, name, price, rating, category, product type, 


const baseUrl = 'https://makeup-api.herokuapp.com/api/v1/products.json?'
const mayBelline = 'brand=maybelline'
const imageCountDefault = 5;
const productMenu = document.querySelector('#product-menu');
const fiveItems = [];
const productForm = document.querySelector('#new-product');

// fetch Maybelline Data

fetch(baseUrl + mayBelline)
.then(res => res.json())
.then(mayBellineData => renderData(mayBellineData))

function renderData(data) {
    // console.log('typeof(data): ', typeof(data));
    // console.log('data: ', data);
    // console.log('data[28]: ', data[28])
    // console.log('data[28].name: ', data[28].name)
    // console.log('data.length: ', data.length)

// create new Array of 5 items to put the images into;

    // console.log('fiveItems Array: ', fiveItems);
    // console.log('typeof(fiveItems): ', typeof(fiveItems))

    for (let i = 0; i < 5; i++) {
        // console.log('i: ', i);
        let randNum = Math.floor(Math.random() * (data.length + 1));
        // console.log('randNum: ', randNum);
        let randItem = data[randNum];
        // console.log('randItem: ', randItem)
        // console.log('randItem.price: ', randItem.price);
        fiveItems.push(randItem);
        // console.log('fiveItems Array: ', fiveItems);
        // console.log('fiveItems.length', fiveItems.length);

    }

    // console.log('fiveItems Array After For Loop: ', fiveItems);
    // console.log('fiveItems.length', fiveItems.length);

    console.log('fiveItems? ', fiveItems);

    fiveItems.forEach(appendImages);

}

function appendImages(arrayItem) {
    // console.log('arrayItem: ', arrayItem);
    // console.log('arrayItem.id: ', arrayItem.id)
    const img = document.createElement('img');
    img.src = arrayItem.image_link;
    // console.log(img);
    // console.log(productMenu);
    img.details = arrayItem;
    img.addEventListener('click', updateProductDetails);
    productMenu.append(img);
}
    function updateProductDetails(event){
        let arrayItem = event.target.details;
        // console.log('arrayItem.name', arrayItem.name);
        // console.log('event: ', event);
        // console.log('event.target: ', event.target);
        // console.log('event.target.details: ', event.target.details);
        // console.log('arrayItem.name: ', arrayItem.name);
        const name = document.querySelector('.name');
        name.textContent = arrayItem.name;
        // console.log(name);
        const image = document.querySelector('.detail-image');
        image.src = arrayItem.image_link;
        const price = document.querySelector('.price');
        price.textContent = "$" + arrayItem.price;
        const rating = document.querySelector('#rating-display');
        rating.textContent = arrayItem.rating;
        const description = document.querySelector('#des-Display');
        description.textContent = arrayItem.description;
    }



productForm.addEventListener('submit', createItem);

function createItem(event) {
    event.preventDefault();
    // console.log('test submission');
    const name = document.querySelector('#new-name').value;
    console.log(name);
    const price = document.querySelector('#new-price').value;
    const image_link = document.querySelector('#new-image').value;
    const rating = document.querySelector('#new-rating').value;
    const description = document.querySelector('#new-des').value;

    const item = {name, price, image_link, rating, description}

    console.log('Item: ', item);
    
    appendImages(item);

}




// function createItem(event) {
//     event.preventDefault();
//     const name = document.querySelector('#new-name').value;
//     console.log(name.value);

//     const arrayItem = {name};

//     appendImages(arrayItem);
// }







    //     newArray = [4]];



//     for (let i = 0; i < 4 i++) {


//       }
//     // generate a new array of just 5 of the elements. 

// }



// load screen. randomly chooses 5 maybelline products. displays on top of screen. 
// click on a product and display the data on center of screen.
// add a new product. 

