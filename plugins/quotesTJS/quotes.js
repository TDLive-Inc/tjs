/*
TDLive quotesTJS
A quotes library for TJS.
Licensed under Creative Commons BY-NC-SA, available @ tdlive.org/lic.

HOW TO ADD QUOTES:

HOW TO APPLY:
Find <script type="text/javascript" src="http://b0rg.tdlive.org/jquery.js"></script>
Add After <script type="text/javascript" src="quotes.js"></script>

Find $("#content").html(src);
Add after: $("#quotes").html(newQuote());

Find <p align="center"><center>Powered by the <a href="http://tjs.tdlive.org/">TDLive TJS framework</a>.</p></center>
Add before: <div id="quotes">Please enable JavaScript to use this site.</div>

HOW TO HACK:
You can generate a random quote by running newQuote().
*/

function newQuote(){
	var quotes = '"This is quotesJS. Add quotes seperated by a asterisk!" ~TDLive'
	var quotes = quotes.split("*");
	var number = Math.floor(Math.random()*quotes.length);
	return quotes[number];
}