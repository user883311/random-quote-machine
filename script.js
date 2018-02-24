// Free API at https://market.mashape.com/andruxnet/random-famous-quotes#
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
        }
    }
}

//<!-- CONNECTING WITH SHARE APIs -->
var hashtagStr = "quotes";
var twitterURL;
function twitterShare() {
    let quote = document.getElementById("quoteText").innerHTML;
    let author = document.getElementById("quoteAuthor").innerHTML;
    twitterURL = "https://twitter.com/intent/tweet?hashtags=" + hashtagStr;
    twitterURL += "&text=" + quote;
    twitterURL += " - " + author;
    window.open(twitterURL);
}

function facebookShare() {
    let h = "https://www.facebook.com/dialog/feed?" +
        "app_id=145634995501895" +
        "&display=popup&amp;caption=An%20example%20caption" +
        "&link=https://user883311.github.io/random-quote-machine/" +
        "&redirect_uri=https://developers.facebook.com/tools/explorer";
    window.open(h);
}

function linkedinShare() {
    let h = "https://www.linkedin.com/shareArticle" +
        "?mini=true" +
        "&url=https://user883311.github.io/random-quote-machine/" +
        "&title=Quotes" +
        "&summary=" + document.getElementById("quoteText").textContent +
        " - " +
        document.getElementById("quoteAuthor").textContent +
        "&source=LinkedIn";
    window.open(h);
}