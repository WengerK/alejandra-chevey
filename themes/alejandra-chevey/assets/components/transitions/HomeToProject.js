/* global Barba, $ */

import UrlHelpers from './UrlHelpers.js';

const HomeToProject = Barba.BaseTransition.extend({
  start: function () {
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

  home: function () {
    const to = UrlHelpers.rmOrigin(Barba.HistoryManager.currentStatus().url);

    const that = this;
    const link = $(that.oldContainer).find(`a[href="${to}"]`);
    console.log(link.first());

    const tray = $(that.oldContainer).find('.transition-tray-overlay');
    const hero = $(that.oldContainer).find('.transition-hero-image');

    const image = new Image();
    image.src = link.first().data('heroImage');

    return new Promise((resolve, reject) => {
      tray.addClass('open-to-right');

      image.onload = function () {
        setTimeout(function () {
          hero.css('background-image', `url(${link.first().data('heroImage')})`);
          hero.addClass('open-to-left');
          setTimeout(function () {
            resolve();
          }, 650);
        }, 650);
      };
    });

    // const $el = $(this.newContainer);

    /**
     * this.oldContainer is the HTMLElement of the old Container.
     */
    // return $(this.oldContainer).animate({ opacity: 0 }).promise();
  },

  project: function () {
    /**
     * this.newContainer is the HTMLElement of the new Container.
     *
     * At this stage newContainer is on the DOM
     * (inside our #barba-container and with visibility: hidden).
     * Please note, newContainer is available just after newContainerLoading is resolved!
     */
    const that = this;
    // const $el = $(this.newContainer);

    $(this.oldContainer).hide();
    that.done();

    // $el.css({
    //   visibility: 'visible',
    //   opacity: 0
    // });

    // $el.animate({ opacity: 1 }, 400, function () {
    //   /**
    //    * Do not forget to call .done() as soon your transition is finished!
    //    * .done() will automatically remove from the DOM the old Container
    //    */

    //   that.done();
    // });
  },

  valide: function () {
    const from = UrlHelpers.rmOrigin(Barba.HistoryManager.prevStatus().url);
    const to = UrlHelpers.rmOrigin(Barba.HistoryManager.currentStatus().url);
    console.log(`[Animation] - ${from} to ${to}`);
    return from === '/' && to.substring(0, 10) === '/projects/';
  }
});

export default HomeToProject;
