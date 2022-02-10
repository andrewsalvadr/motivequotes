const btn = document.querySelector('.generate')
const tbody = document.querySelector('tbody')
const container = document.querySelector('container')
const quoteDisplay = document.getElementById("quoteDisplay")

var quotes = [];

var quotes = [
    ["People who are crazy enough to think they can change the world, are the ones who do.”- Rob Siltanen"],
    ["“Optimism is the one quality more associated with success and happiness than any other.”- Brian Tracy"],
    ["Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.","Albert Einstein"],
	["The most beautiful experience we can have is the mysterious. It is the fundamental emotion that stands at the cradle of true art and true science.","Albert Einstein"]
	["It is our choices, Harry, that show what we truly are, far more than our abilities.","J.K. Rowling, Harry Potter and the Chamber of Secrets"],
	["All men who have turned out worth anything have had the chief hand in their own education.","Walter Scott"],
	["Trust yourself. You know more than you think you do.","Benjamin Spock"],
	["No one can make you feel inferior without your consent.","Eleanor Roosevelt, This is My Story"],
	["To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.","Ralph Waldo Emerson"],
	["Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.","H. Jackson Brown Jr., P.S. I Love You"],
	["We become what we think about” – Earl Nightingale"]
];

    function onAddQuote(e) {;
        e.preventDefault()
        const randomNumber= Math.floor(Math.random() * quotes.length);
        document.getElementById("quoteDisplay").innerHTML = quotes[randomNumber];

    }
    

btn.addEventListener("click", onAddQuote)