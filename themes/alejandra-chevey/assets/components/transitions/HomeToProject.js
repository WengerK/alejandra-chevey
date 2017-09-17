/* global Barba, $ */

import UrlHelpers from './UrlHelpers.js';

const HomeToProject = Barba.BaseTransition.extend({
  start: function() {
    /**
     * This function is automatically called as soon the Transition starts.
     * this.newContainerLoading is a Promise for the loading of the new container
     * (Barba.js also comes with an handy Promise polyfill!).
     */

    // As soon the loading is finished and the old page is faded out, let's fade the new page.
    Promise.all([this.newContainerLoading, this.home()]).then(
      this.project.bind(this)
    );
  },

  home: function() {
    // Scroll to top.
    $('body').animate({ scrollTop: 0 }, 200);
    $('body').addClass('page-is-loading');

    const that = this;

    // Retreive the original clicked link.
    const to = UrlHelpers.rmOrigin(Barba.HistoryManager.currentStatus().url);
    const link = $(that.oldContainer).find(`a[href="${to}"]`);

    // Select containers wich for animations.
    const tray = $(that.oldContainer).find('.transition-tray-overlay');
    const hero = $(that.oldContainer).find('.transition-hero-image');

    // Preload the image.
    const image = new Image();
    image.src = link.first().data('heroImage');

    return new Promise((resolve, reject) => {
      // Animate the tray.
      tray.addClass('open-to-right');

      // When image is ready & the tray animation is finished, animate the image.
      image.onload = function() {
        setTimeout(function() {
          hero.css(
            'background-image',
            `url(${link.first().data('heroImage')})`
          );
          hero.addClass('open-to-left');

          // Once the image is shown, load the next page by resolving this promise..
          setTimeout(function() {
            resolve();
          }, 650);
        }, 650);
      };
    });
  },

  project: function() {
    /**
     * this.newContainer is the HTMLElement of the new Container.
     *
     * At this stage newContainer is on the DOM
     * (inside our #barba-container and with visibility: hidden).
     * Please note, newContainer is available just after newContainerLoading is resolved!
     */
    $('body').removeClass('page-is-loading');
    $('body').removeClass('is-home');

    const that = this;
    that.done();
  },

  valide: function() {
    const from = UrlHelpers.rmOrigin(Barba.HistoryManager.prevStatus().url);
    const to = UrlHelpers.rmOrigin(Barba.HistoryManager.currentStatus().url);
    console.log(`[Animation] - ${from} to ${to}`);
    return from === '/' && to.substring(0, 10) === '/projects/';
  }
});

export default HomeToProject;
