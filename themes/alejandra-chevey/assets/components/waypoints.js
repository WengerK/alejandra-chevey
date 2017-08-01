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
};

export default Waypoints;
