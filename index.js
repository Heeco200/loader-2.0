window.addEventListener('DOMContentLoaded', ()=> {
    const bg = document.querySelector('.bg'),
        text = document.querySelector('.text h1');
    let son = 0;
    const filterInterval = setInterval(()=> {
        son++;
        text.innerHTML = `${son}%`;
        bg.style.filter = `blur(${10-0.1*son}px)`
        if (son == 100) {
            clearInterval(filterInterval);
            setTimeout(()=> {
                text.style.display = "none"
            }, 1000)
        }
    }, 20)
})