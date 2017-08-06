/* global Waypoint */

const Waypoints = () => {
  $('.page-section-animation').waypoint(
    function(direction) {
      if (direction === 'down') {
        $(this.element).addClass('is-view');
      }
    },
    {
      offset: '80%'
    }
  );

  // Project page
  $('.hero-image-title').addClass('is-view');
  setTimeout(function () {
    $('.hero-image-scroll').addClass('is-view');
  }, 950);

};

export default Waypoints;
