function generate(){
    let quotes = {
        "- Deepak Chopra" : '"Sex is always about emotions. Good sex is about free emotions; bad sex is about blocked emotions."', "- C.S. Lewis" : '"I was not born to be free---I was born to adore and obey."', "- Jenny Valentine" : '"Even when you\'d lost everything you thought there was to localStorage, somebody came along and gave you something for free."'
    }

    let authors = Object.keys(quotes);

    let author = authors[Math.floor(Math.random() * authors.length)];

    let quote = quotes[author];

    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;
}