

let body = document.querySelector(`body`);
let ul = document.querySelector(`ul`);
function createUI(){
    quotes.forEach(elm=>{
        var li = document.createElement(`li`);
        let h2 = document.createElement(`h2`);
        h2.innerHTML = elm.quoteText;
        let h3 = document.createElement(`h3`);
        h3.innerHTML = elm.quoteAuthor;
        ul.append(li);
        li.append(h2,h3);
    })
}

ul.addEventListener(`scroll`,()=>{
    console.log(ul.clientHeight);
    console.log(ul.scrollHeight);
    if(ul.offsetTop + ul.clientHeight >= ul.scrollHeight){
       return createUI()
    }
});
createUI();



