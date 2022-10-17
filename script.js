let joke_btn = document.getElementById('jokeBtn');
let display_joke = document.getElementById('joke');

joke_btn.addEventListener('click',()=>{

    let api_url = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single';
    getRandomJoke(api_url);
})

async function getRandomJoke(url){
    
    let response = await fetch(url);
    let data = await response.json();
    display_joke.innerHTML = data.joke;
}