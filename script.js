const MENU = document.getElementById('menu');
const PICTURES = document.getElementById('pictures');
const TAB = document.getElementById('tab');
const WRAPPER = document.getElementById('wrapper');
const FORM = document.forms.informat;
const MODAL = document.querySelector('.modal')
const anchor = document.querySelectorAll('#menu>li>a')


const anchor_home = document.querySelector('a[name=home]').offsetTop;
const anchor_services = document.querySelector('a[name=services').offsetTop;
const anchor_portfolio = document.querySelector('a[name=portfolio]').offsetTop;
const anchor_about = document.querySelector('a[name=about]').offsetTop;
const anchor_contacts = document.querySelector('a[name=contacts]').offsetTop;


document.addEventListener('scroll', onScroll);


function onScroll(event) {
    let cur_pos = window.scrollY;
    let cur_anchor = 
        cur_pos >= anchor_contacts ? document.querySelector('a[href$=contacts]') :
        cur_pos >= anchor_about ? document.querySelector('a[href$=about]') :
        cur_pos >= anchor_portfolio ? document.querySelector('a[href$=portfolio]') :
        cur_pos >= anchor_services ? document.querySelector('a[href$=services') :
        document.querySelector('a[href$=home]');
    MENU.querySelectorAll('a').forEach(el => {el.classList.remove('active')});
    cur_anchor.classList.add('active');
}



PICTURES.addEventListener('click', event => {
    PICTURES.querySelectorAll('img').forEach(el => {el.classList.remove('active')});
    event.target.classList.add('active');
})

TAB.addEventListener('click', event => {
    if (!event.target.classList.contains('active')) {
        PICTURES.querySelectorAll('img').forEach(el => {
            el.style.order = Math.round(Math.random() * 12 )});
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

    if (event.target.id === 'chev-left' || event.target.id === 'chev-right') {
        if (WRAPPER.querySelector('#slide2').style.zIndex === '8') {
            WRAPPER.querySelector('#slide2').style.zIndex = '1';
        } else {
            WRAPPER.querySelector('#slide2').style.zIndex = '8';
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

