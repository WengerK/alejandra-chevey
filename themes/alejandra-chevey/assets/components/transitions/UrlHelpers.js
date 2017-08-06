/**
 * URLs helpers.
 */
const UrlHelpers = {
  /**
   * Cross-browser compatibility for origin usage.
   */
  origin: function() {
    if (!window.location.origin) {
      window.location.origin = `${window.location.protocol}//${window.location
        .hostname}${window.location.port ? `:${window.location.port}` : ''}`;
    }

    return window.location.origin;
  },

  /**
   * Remove the origin from the begining of given URL.
   */
  rmOrigin: function(url) {
    const regexReplaceOrigin = new RegExp(`^(${this.origin()})`, 'gi');
    return url.replace(regexReplaceOrigin, '');
  }
};

export default UrlHelpers;
