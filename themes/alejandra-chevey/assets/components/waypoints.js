/* global Waypoint $ */


const Waypoints = () => {
  const media_md = window.matchMedia('(min-width: 768px)');

  $('.page-section-animation').waypoint(
    function(direction) {
      if (direction === 'down') {
        $(this.element).addClass('is-view');
      }
    },
    {
      offset: '110%'
    }
  );

  // Project page loaded.
  $('.hero-image-title').addClass('is-view');
  setTimeout(function () {
    $('.hero-image-scroll').addClass('is-view');
  }, 950);

  // Image on Hover.
  $('a.image-on-hover')
    .on('mouseenter', function() {
      if (media_md.matches) {
        $('#'+$(this).data('imageAppear')).addClass('active');
      }
    })
    .on('mouseleave', function() {
      if (media_md.matches) {
        $('#'+$(this).data('imageAppear')).removeClass('active');
      }
    });
};

export default Waypoints;
