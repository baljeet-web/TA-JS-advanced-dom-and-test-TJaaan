let div = document.getElementsByClassName(`grid`);


function createUI(){
    let span = document.createElement(`span`);
    let h2 = document.createElement(`h2`);
    h2.classList.add = `underline-text`; 
    let p = document.createElement(`p`);
    div.append(span)
    span.append(h2,p);
}


let form = document.querySelector(`input`);
form.addEventListener(`click`,e=>{
    e.preventDefault();
    console.log(e.target.value);
    createUI();
})

