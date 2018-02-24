// Free API at https://market.mashape.com/andruxnet/random-famous-quotes#
var count = 0;
function getNewQuote() {
    var quoteAPI;
    quoteAPI = new XMLHttpRequest();
    quoteAPI.open("GET", "https://andruxnet-random-famous-quotes.p.mashape.com/");
    quoteAPI.setRequestHeader(
        "X-Mashape-Key", "OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V",
        "Accept", "application/json",
        "Content-Type", "application/x-www-form-urlencoded"
    )
    quoteAPI.send();
    quoteAPI.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.response);
            document.getElementById("quoteText").innerHTML = data.quote;
            document.getElementById("quoteAuthor").innerHTML = data.author;
            count++;
            console.log(count);
        }
    }
}

//<!-- CONNECTING WITH SHARE APIs -->
// TWITTER
var hashtagStr = "quotes";
var twitterURL;
function twitterShare() {
    var quote = document.getElementById("quoteText").innerHTML;
    var author = document.getElementById("quoteAuthor").innerHTML;


    twitterURL = "https://twitter.com/intent/tweet?hashtags=" + hashtagStr;
    twitterURL += "&text=" + quote;
    twitterURL += " - " + author;
    window.open(twitterURL);
}