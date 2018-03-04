// You will use that file to import all your scripts
// Ex: import gallery from './gallery'

import '../icons/svg-icons.js';
import BarbaJS from './barba.js';
import Waypoints from './waypoints.js';
import Emojitab from './emojitab.js';

/* global Barba, $ */

BarbaJS();

$(function() {
  Emojitab();
});

function init() {
  Waypoints();
}

/**
 * Reset Waypoints after every - second - Page transition of BarbarJS.
 */
Barba.Dispatcher.on('transitionCompleted', function(currentStatus, oldStatus) {
  init();
});

console.log('Hello dear developer 🙏');
console.log('Wanna read the code ? Check the Github: github.com/WengerK/alejandra-chevey');
console.log('Feel free to contact me alejandra.simancas@gmail.com');
