'use strict'

var menuArr = ['Home', 'Registration', 'Gallery', 'Contact Us', 'News'];
var dopMenu = ['More1...', 'More2...', 'More3...'];

function Burger(data, dataDop, nameId) {
    this.container = document.querySelector(nameId);
    this.ul = document.createElement('ul');
    this.button = document.createElement('button');
    this.button.innerHTML = 'Change position';
    this.button.className = 'change_button'
    this.button2 = document.createElement('button');
    this.button2.innerHTML = 'Change additional items';
    this.button2.className = 'change_button'
    this.container.appendChild(this.button);
    this.container.appendChild(this.button2);
    this.container.appendChild(this.ul);
    this.ul.className = 'wrap_block';
    this.data = data;
    this.dataDop = dataDop;
    for (let menu of data) {
        this.li = document.createElement('li');
        this.li.className = 'wrap';
        this.a = document.createElement('a');
        this.li.appendChild(this.a);
        this.a.href = '#';
        this.a.innerHTML = menu;
        this.ul.appendChild(this.li);
    }

    this.styleDiv = document.createElement('div');
    this.styleDiv.id = 'charters_block'
    this.styleDiv.className = 'style_block'

    this.menuList = function (event) {
        if (!event.target.classList.contains('wrap')) return;
        for (let name of dataDop) {
            this.li = document.createElement('li');
            this.li.className = 'small_wrap';
            this.a = document.createElement('a');
            this.li.appendChild(this.a);
            this.a.href = '#';
            this.a.innerHTML = name;
            event.target.appendChild(this.styleDiv);
            this.styleDiv.appendChild(this.li)
        }

        let small = this.styleDiv.getElementsByClassName('small_wrap');
        while (small[dataDop.length]) {
            this.styleDiv.removeChild(small[dataDop.length]);
        }

    }.bind(this)

    this.ul.onclick = this.menuList;

    this.changePosition = function () {
        if (this.ul.classList.contains('wrap_block')) {
            this.ul.className = 'vertical_block';
        } else {
            this.ul.className = 'wrap_block';
        }
    }.bind(this)

    this.changeAddItems = function () {
        if (this.styleDiv.classList.contains('style_block')) {
            this.styleDiv.className = '';
        } else {
            this.styleDiv.className = 'style_block';
        }
    }.bind(this)

    this.button.onclick = this.changePosition;
    this.button2.onclick = this.changeAddItems;
}

function AdaptiveBurger (data, dataDop, nameId) {
    this.container = document.querySelector(nameId);
    this.container2 = document.createElement('div');
    this.container.appendChild(this.container2);
    this.container2.id = 'adaptive_menu';
    this.div = document.createElement('div');
    this.div.id = 'admenu_block';
    this.ul = document.createElement('ul');
    this.button = document.createElement('button');
    this.button.innerHTML = 'Change position';
    this.button.className = 'adchange_button'
    this.button2 = document.createElement('button');
    this.button2.innerHTML = 'Change additional items';
    this.button2.className = 'adchange_button'
    this.button3 = document.createElement('button');
    this.button3.className = 'adhover_button'
    this.container2.appendChild(this.button);
    this.container2.appendChild(this.button2);
    this.div.appendChild(this.ul);
    this.div.appendChild(this.button3);
    this.container.appendChild(this.div);
    this.ul.className = 'adwrap_block';
    this.data = data;
    this.dataDop = dataDop;
    for (let menu of data) {
        this.li = document.createElement('li');
        this.li.className = 'adwrap';
        this.a = document.createElement('a');
        this.li.appendChild(this.a);
        this.a.href = '#';
        this.a.innerHTML = menu;
        this.ul.appendChild(this.li);
    }

    this.styleDiv = document.createElement('div');
    this.styleDiv.id = 'charters_block'
    this.styleDiv.className = 'adstyle_block'

    this.menuList = function (event) {
        if (!event.target.classList.contains('adwrap')) return;
        for (let name of dataDop) {
            this.li = document.createElement('li');
            this.li.className = 'adsmall_wrap';
            this.a = document.createElement('a');
            this.li.appendChild(this.a);
            this.a.href = '#';
            this.a.innerHTML = name;
            event.target.appendChild(this.styleDiv);
            this.styleDiv.appendChild(this.li)
        }

        let small = this.styleDiv.getElementsByClassName('adsmall_wrap');
        while (small[dataDop.length]) {
            this.styleDiv.removeChild(small[dataDop.length]);
        }

    }.bind(this)

    this.ul.onclick = this.menuList;

    this.changePosition = function () {
        let button = document.querySelector('.adhover_button');
                
        if (this.ul.classList.contains('adwrap_block')) {
            this.ul.className = 'advertical_block';
            button.style.display = 'block';
            button.style.height = '170px';
            button.style.width = '10px';
            document.querySelector('.advertical_block').style.display = 'none';
            document.querySelector('#admenu_block').style.flexDirection = 'row';
        } else if (this.ul.classList.contains('advertical_block')) {
            this.ul.className = 'adhorizontal_block';
            button.style.display = 'block';
            button.style.height = '15px';
            button.style.width = '170px';
            document.querySelector('.adhorizontal_block').style.display = 'none';
            document.querySelector('#admenu_block').style.flexDirection = 'column';
        } else {
            this.ul.className = 'adwrap_block';
            button.style.display = 'none';
            document.querySelector('.adwrap_block').style.display = 'flex';
        }
    }.bind(this)

    this.slideMenu = function () {
        if (this.ul.classList.contains('advertical_block')) {
        document.querySelector('.advertical_block').style.display = 'block';
    } else {
        document.querySelector('.adhorizontal_block').style.display = 'block';
    }
    }.bind(this)
    this.button3.onclick = this.slideMenu;

    this.changeAddItems = function () {
        if (this.styleDiv.classList.contains('adstyle_block')) {
            this.styleDiv.className = '';
        } else {
            this.styleDiv.className = 'adstyle_block';
        }
    }.bind(this)

    this.button.onclick = this.changePosition;
    this.button2.onclick = this.changeAddItems;
}

let winInMid = window.innerWidth

function screenResolutionCheck (winInMid) {
    if (winInMid > 560) {
        new Burger(menuArr, dopMenu, '#menu_block');
    } else {
        new AdaptiveBurger (menuArr, dopMenu, '#menu_block')
    }
}

screenResolutionCheck();