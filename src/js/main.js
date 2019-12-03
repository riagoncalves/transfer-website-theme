"use strict";
/*global document: false */

const pages = {
  containerAction(container) {
    container.classList.toggle('hidden');
  },

  openPage(page) {
    let pageContainer = document.getElementById(page);
    this.containerAction(pageContainer);
  },

  closePage() {
    let pages = [].slice.call(document.querySelectorAll('.page'));

    pages.forEach(page => {
      if(!page.classList.contains('hidden')) {
        this.containerAction(page);
      }
    });
  },

  init() {
    let menuItems = [].slice.call(document.querySelectorAll('.btn > a'));
    let closeBtns = [].slice.call(document.querySelectorAll('.page-close'));

    menuItems.forEach(menuItem => {
      menuItem.addEventListener('click', (el) => {
        el.preventDefault();
        this.openPage(menuItem.dataset.page);
      });
    });

    closeBtns.forEach(close => {
      close.addEventListener('click', (el) => {
        el.preventDefault();
        this.closePage();
      });
    });
  }
};

function init() {
  console.log("%c| 🔧 Developed by riagoncalves.dev |", "background: #111; color: #eee; border-radius:2px; padding:.75rem;");
  pages.init();
}

function ready() {
  if (document.readyState === 'complete') {
    init();
  } else {
      document.addEventListener('DOMContentLoaded', init);
  }
}

ready();

