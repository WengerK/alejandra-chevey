/* global Emojitab $ */

const Emojitab = () => {
  let original = document.title;
  const message = '👋👋😘';

  $(window).focus(function() {
    if (original) {
      document.title = original;
    }
  }).blur(function() {
    const title = $('title').text();
    if (title != message) {
      original = title;
    }
    document.title = `${message} | ${original}`;
  });
};

export default Emojitab;
