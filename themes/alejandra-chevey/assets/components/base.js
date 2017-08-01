// You will use that file to import all your scripts
// Ex: import gallery from './gallery'

import '../icons/svg-icons.js';
import BarbaJS from './barba.js';
import Waypoints from './waypoints.js';

/* global Barba */

BarbaJS();

function init() {
  Waypoints();
}

Barba.Dispatcher.on('transitionCompleted', function (currentStatus, oldStatus, container) {
  init();
});

document.addEventListener('DOMContentLoaded', init);
