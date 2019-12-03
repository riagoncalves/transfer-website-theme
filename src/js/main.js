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

  init() {
    let menuItems = [].slice.call(document.querySelectorAll('.btn > a'));
    
    menuItems.forEach(menuItem => {
      menuItem.addEventListener('click', (el) => {
        el.preventDefault();
        this.openPage(menuItem.dataset.page)
      });
    });
  }
};

function init() {
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

