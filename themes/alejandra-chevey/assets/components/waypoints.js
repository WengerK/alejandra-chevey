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
    })
    .on('click', function(e) {
      e.preventDefault();

      const that = this;
      // Remove others on click.
      $('img.image-on-hover.active').removeClass('active');
      // Show current.
      $('#'+$(that).data('imageAppear')).toggleClass('active');

      // After a quick delay, hide the current.
      setTimeout(function () {
        $('#'+$(that).data('imageAppear')).removeClass('active');
      }, 1500);
    })
};

export default Waypoints;
