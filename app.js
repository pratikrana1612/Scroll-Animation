const divs = document.querySelectorAll('div');

window.addEventListener('scroll',scrollHandler);

scrollHandler();
function scrollHandler()
{
    let winHeight = window.innerHeight;
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