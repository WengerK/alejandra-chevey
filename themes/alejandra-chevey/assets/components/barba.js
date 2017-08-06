/* global Barba, $ */

import FadeTransition from './transitions/FadeTransition.js';
import HomeToProject from './transitions/HomeToProject.js';

const BarbaJS = () => {
  // let lastClickedLink = undefined;

  /**
   * Reload Navigation Menu to update Current highlighted menu.
   */
  Barba.Dispatcher.on('newPageReady', function(currentStatus) {
    // get path of current page
    const link = currentStatus.url.split(window.location.origin)[1];

    const navigation = document.querySelector('.side-nav');
    const navigationLinks = navigation.querySelectorAll('.nav-link.active');
    const navigationLinksIsActive = navigation.querySelectorAll(
      `[href="${link}"]`
    );

    Array.prototype.forEach.call(navigationLinks, navigationLink =>
      navigationLink.classList.remove('active')
    ); // remove CSS class 'active' from all .navigation__links.

    Array.prototype.forEach.call(
      navigationLinksIsActive,
      navigationLinkIsActive => navigationLinkIsActive.classList.add('active')
    ); // add CSS class 'active' from all .navigation__links that need it.
  });

  // Barba.Dispatcher.on('linkClicked', function (HTMLElement) {
  //   lastClickedLink = HTMLElement;
  // });

  /**
   * Add page transitions.
   */
  document.addEventListener('DOMContentLoaded', function() {
    Barba.Pjax.start();
    Barba.Prefetch.init();

    /**
     * Next step, you have to tell Barba to use the new transitions.
     */
    Barba.Pjax.getTransition = function() {
      // Fallback transition.
      let transition = FadeTransition;

      if (HomeToProject.valide()) {
        transition = HomeToProject;
      }

      return transition;
    };
  });
};

export default BarbaJS;
