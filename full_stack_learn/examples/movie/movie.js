const APILINK ='https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=c67dce68421c0eff3c78b7fcb0a78ffe&page=1';
const IMG_PATH= 'https://image.tmdb.org/t/p/w1280';
const SEARCHAPI ='https://api.themoviedb.org/3/search/search/movie?&api_key=c67dce68421c0eff3c78b7fcb0a78ffe&query=';

const main = document.getElementById("section");
const form = document.getElementById("form");
const search = document.getElementById("section");

function returnMoview(url){
    fetch(url).then(res=>res.json())
    .then(function(data){
        console.log(data.results);
        data.results.forEach(element => {
            const div_card = document.createelement('div');
            const div_row = document.createelement('div');
            const div_column= document.createelement('div');
            const image = document.createElement('img');
            const title = document.createelement('h3');
            const center = document.createelement('center');

            title.innerHTML = `${element.title}`// say h3 is the title of the movie
            /*title:
This is a variable that refers to a DOM element. For example, it could be a <div>, <span>, or any other HTML element that you have selected using a method like document.getElementById or document.querySelector.
.innerHTML:
This property of a DOM element allows you to get or set the HTML content inside that element. When you set innerHTML, you can include HTML tags, and the browser will render them accordingly.
`${element.title}`:
This is a template literal in JavaScript, which is a way to embed expressions inside string literals. Template literals are enclosed by backticks (`) instead of single or double quotes.
Inside the template literal, ${element.title} is an expression. The ${} syntax allows you to embed any JavaScript expression inside the string. In this case, element.title is being embedded.
element.title:
This refers to the title property of the element object. The element is another variable that refers to a DOM element, and title is a property of that element. For example, if element is an HTML element, element.title might refer to the title attribute of that element.*/
image.src=IMG_PATH+element.poster_path;

center.appendChild(image);
div_card.appendChild(center);
div_card.appendChild(title);
div_c8ard.appendChild(center);
        });

    });
}