const converter = new showdown.Converter();

const insert = (ctx) => {
    document.getElementById('content').innerHTML = ctx;
}



setInterval(function(){
fetch('./TODO.MD')
    .then(response => response.text())
    .then(text => insert(converter.makeHtml(text)))
     }, 5000);