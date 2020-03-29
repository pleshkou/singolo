const MENU = document.getElementById('menu');
const PICTURES = document.getElementById('pictures');
const TAB = document.getElementById('tab');
const WRAPPER = document.getElementById('wrapper');
const FORM = document.forms.informat;
const MODAL = document.querySelector('.modal');
const BURGER = document.querySelector('.burger > img');
const anchor = document.querySelectorAll('#menu>li>a');


const anchor_home = document.anchors[0].offsetTop;
const anchor_services = document.anchors[1].offsetTop;
const anchor_portfolio = document.anchors[2].offsetTop;
const anchor_about = document.anchors[3].offsetTop + 601;
const anchor_contacts = document.anchors[4].offsetTop + 921;





BURGER.addEventListener('click', event => {
    if (BURGER.classList.contains('first')) {
        document.querySelector("body > div.first-page > header > div").style.zIndex = 22;
        document.querySelector("body > div.first-page > header > div").style.marginLeft = '75px';
        document.querySelector('.first-page .navbar').style.display = 'flex';
        BURGER.style.transform = 'rotate(90deg)';
        BURGER.classList.remove('first');
    } else {
        document.querySelector('.first-page .navbar').style.display = '';
        document.querySelector("body > div.first-page > header > div").style.marginLeft = '';
        BURGER.style.transform = '';
        BURGER.classList.add('first');
    }
})

MENU.addEventListener('click', event => {
    document.querySelector('.first-page .navbar').style.display = '';
    document.querySelector("body > div.first-page > header > div").style.marginLeft = '';
    BURGER.style.transform = '';
    BURGER.classList.add('first');


})


document.addEventListener('scroll', onScroll);


function onScroll(event) {
    let cur_pos = window.scrollY;
    let cur_anchor = 
        cur_pos >= document.anchors[4].offsetTop ? document.links[4] :
        cur_pos >= document.anchors[3].offsetTop ? document.links[3] :
        cur_pos >= document.anchors[2].offsetTop ? document.links[2] :
        cur_pos >= document.anchors[1].offsetTop ? document.links[1] :
        document.links[0];
    MENU.querySelectorAll('a').forEach(el => {el.classList.remove('active')});
    cur_anchor.classList.add('active');
}



PICTURES.addEventListener('click', event => {
    PICTURES.querySelectorAll('img').forEach(el => {el.classList.remove('active')});
    event.target.classList.add('active');
})


// Изменение последовательности табов через appendChild!

TAB.addEventListener('click', event => {
    if (!event.target.classList.contains('active')) {
        let shuffledArr = Array.from(PICTURES.querySelectorAll('img')).sort((a, b) => (Math.random() - 0.5));
        shuffledArr.forEach(el => PICTURES.appendChild(el));
    }
    TAB.querySelectorAll('a').forEach(el => {el.classList.remove('active')});
    event.target.classList.add('active');
})

WRAPPER.addEventListener('click', event => {
    if (event.target.id === 'vertical' && WRAPPER.querySelector('.left-off').style.zIndex == '2') {
        WRAPPER.querySelector('.left-off').style.zIndex = '6';
        return;
    };
    
    if (event.target.id === 'vertical' && WRAPPER.querySelector('.left-off').style.zIndex == '6') {
        WRAPPER.querySelector('.left-off').style.zIndex = '2';
        return;
    };
    
    if (event.target.id === 'left-off') {
        WRAPPER.querySelector('.left-off').style.zIndex = '2';
        return;
    };

    if (event.target.id === 'horizontal' && WRAPPER.querySelector('.right-off').style.zIndex == '2') {
        WRAPPER.querySelector('.right-off').style.zIndex = '6';
        return;
    };
    
    if (event.target.id === 'horizontal' && WRAPPER.querySelector('.right-off').style.zIndex == '6') {
        WRAPPER.querySelector('.right-off').style.zIndex = '2';
        return;
    };
    
    if (event.target.id === 'right-off') {
        WRAPPER.querySelector('.right-off').style.zIndex = '2';
        return;
    };

    if (event.target.id === 'chev-left') {
        if (WRAPPER.querySelector('#slide2').style.zIndex === '8') {
            let counter = 0;
            let shifter1 = function() {
                WRAPPER.querySelector('#slide2').style.left = `${counter}px`;
                counter -= 20;
                if (counter < -1020) {
                    clearInterval(timerId);
                    WRAPPER.querySelector('#slide2').style.zIndex = '1';
                    counter = 0;
                }
            }
            let timerId = setInterval(shifter1, 5);
        } else {
            WRAPPER.querySelector('#slide2').style.zIndex = '8';
            WRAPPER.querySelector('#slide2').style.left = '1020px';
            let counter = 1020;
            let shifter2 = function() {
                WRAPPER.querySelector('#slide2').style.left = `${counter}px`;
                counter -= 20;
                if (counter < 0) {clearInterval(timerId)};
            }
            let timerId = setInterval(shifter2, 5);
        }
    }

    if (event.target.id === 'chev-right') {
        if (WRAPPER.querySelector('#slide2').style.zIndex === '8') {
            let counter = 0;
            let shifter1 = function() {
                WRAPPER.querySelector('#slide2').style.left = `${counter}px`;
                counter += 20;
                if (counter > 1020) {
                    clearInterval(timerId);
                    WRAPPER.querySelector('#slide2').style.zIndex = '1';
                }
            }
            let timerId = setInterval(shifter1, 5);
        } else {
            WRAPPER.querySelector('#slide2').style.zIndex = '8';
            WRAPPER.querySelector('#slide2').style.left = '1020px';
            let counter = -1020;
            let shifter2 = function() {
                WRAPPER.querySelector('#slide2').style.left = `${counter}px`;
                counter += 20;
                if (counter > 0) {clearInterval(timerId)};
            }
            let timerId = setInterval(shifter2, 5);
        }
    }
})

function showData(f) {
   MODAL.style.display = '';
    let out = 'Письмо отправлено. \n\n';
    if (f.elements.subject.value) {
        out += `Тема: ${f.elements.subject.value}\n`;
    } else {
        out += 'Без темы\n';
    }
    
    if (f.elements.describer.value) {
        out += `Описание: ${f.elements.describer.value}\n`;
    } else {
        out += 'Без описания\n';
    }
    
    MODAL.querySelector('.inner').innerText = out;
    f.reset();
}

MODAL.querySelector('.butt').addEventListener('click', e => {
    MODAL.style.display = 'none';
})

