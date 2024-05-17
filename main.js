let stars = document.getElementById('stars')
let moon = document.getElementById('moon')
let mountain3 = document.getElementById('mountain3')
let mountain4 = document.getElementById('mountain4')
let river = document.getElementById('river')
let boat = document.getElementById('boat')
let omar = document.querySelector('.omar')

window.onscroll = function (){
    let value = scrollY;
    stars.style.left = value + 'px'
    moon.style.top = value * 4 + 'px'
    mountain3.style.top = value * 2 + 'px'
    mountain4.style.top = value * 1.5 + 'px'
    river.style.top = value + 'px'
    boat.style.top = value + 'px'
    boat.style.left = value * 4 + 'px'
    omar.style.fontSize = value + 'px'
    if(scrollY >=67){
        omar.style.fontSize = 67 + 'px'
        omar.style.position = 'fixed'
        if(scrollY >=472){
            omar.style.display='none';
        }
        else{
            omar.style.display='block';
        }
        if(scrollY >=117){
            document.querySelector('.main').style.background = 'linear-gradient(#376281,#10001f)'
        }else{
            document.querySelector('.main').style.background = 'linear-gradient(to top,#200016,transparent)'
        }
    }
}