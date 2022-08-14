const divs = document.querySelectorAll('div');

window.addEventListener('scroll',scrollHandler);

let winHeight = window.innerHeight;
scrollHandler();

function scrollHandler()
{
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
