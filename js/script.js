'use strict';
// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// Create a random number from 0 to length of quotes array, use number
// to select object from quotes array
function getRandomQuote() {
  let randomNumber = Math.floor(Math.random() * (quotes.length));
   return quotes[randomNumber]
}

// Gets random color hex value
function getRandomColor() {
  var hex = Math.floor(Math.random() * 0xFFFFFF);
  return "#" + ("000000" + hex.toString(16)).substr(-6);
}

// Create HTML Template, inject selected object into template
function printQuote() {

  let quote = getRandomQuote()
  let template =
      `<p class="quote"> ${quote.quote} </p>
      <p class="source"> ${quote.source}
      ${quote.citation ? `<span class="citation"> ${quote.citation} </span>` : "" }
      ${quote.year ? `<span class="year"> ${quote.year} </span>` : "" }
      </p>`;

      document.getElementById('quote-box').innerHTML = template;
      document.body.style.backgroundColor = getRandomColor();
}


// Database of Quotes
const quotes = [
  {
    quote: "I love you the more in that I believe you had liked me for my own sake and for nothing else.",
    source: "John Keats",
    citation: "test citation"
  },
  {
    quote: "But man is not made for defeat. A man can be destroyed but not defeated.",
    source: "Ernest Hemingway",
    citation: "test citation",
    year: 9999
  },
  {
    quote: "When you reach the end of your rope, tie a knot in it and hang on.",
    source: "Franklin D. Roosevelt"
  },
  {
    quote: "I alone can fix it.",
    source: "Donald Trump",
    year: 2016
  },
  {
    quote: "You cannot shake hands with a clenched fist.",
    source: "Indira Gandhi"
  },
  {
    quote: "The most difficult thing is the decision to act, the rest is merely tenacity. The fears are paper tigers. You can do anything you decide to do. You can act to change and control your life; and the procedure, the process is its own reward.",
    source: "Amelia Earhart"
  }
]
