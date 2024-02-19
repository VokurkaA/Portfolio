window.location.replace("#welcome");

function makeAnimation() {
    const toAnimate = document.getElementById('phoneNr');
    if (toAnimate.classList.contains('animate-popup'))
        toAnimate.classList.remove('animate-popup');
    toAnimate.classList.add('animate-popup');
    setTimeout(() => {
        toAnimate.classList.remove('animate-popup');
    }, 5000);     

}