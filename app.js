const divs = document.getElementsByName('div');
window.addEventListener('scroll',sc);

function sc()
{
    let winHeight = window.innerHeight/5*4;
    divs.forEach(div => {
        let divPosition=div.getBoundingClientRect().top;
        if(divPosition < winHeight)
        {
            div.classList.add('show');
        }
        else{
            div.classList.remove('show');
        }
    })
};