const MENU = document.getElementById('menu');
const PICTURES = document.getElementById('pictures');
const TAB = document.getElementById('tab');
const WRAPPER = document.getElementById('wrapper');
const FORM = document.forms.informat;
const MODAL = document.querySelector('.modal')

MENU.addEventListener('click', (event) => {
    MENU.querySelectorAll('a').forEach(el => {el.classList.remove('active')});
    event.target.classList.add('active');
})

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
    
}

MODAL.querySelector('.butt').addEventListener('click', e => {
    MODAL.style.display = 'none';
})
