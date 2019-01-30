import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import interact from 'interactjs';

import './main.html';
import '../lib/routes.js';
//import '../assets/hardwood.jpg';
import './layouts/MainLayout.html';
import './layouts/HomeLayout.html';
import './partials/Header.html';
import './partials/SideNav.html';

// Template.hello.onCreated(function helloOnCreated() {
//   // counter starts at 0
//   this.counter = new ReactiveVar(0);
// });

// Template.hello.helpers({
//   counter() {
//     return Template.instance().counter.get();
//   },
// });
//
// Template.hello.events({
//   'click button'(event, instance) {
//     // increment the counter when button is clicked
//     instance.counter.set(instance.counter.get() + 1);
//   },
// });

// target elements with the "draggable" class
interact('.draggable')
  .draggable({
    // enable inertial throwing
    inertia: false,
    // keep the element within the area of it's parent
    restrict: {
      restriction: "parent",
      endOnly: true,
      elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
    },
    // enable autoScroll
    autoScroll: true,

    // call this function on every dragmove event
    onmove: dragMoveListener,
    // call this function on every dragend event
    // onend: function (event) {
    //   var textEl = event.target.querySelector('p');
    //
    //   textEl && (textEl.textContent =
    //     'moved a distance of '
    //     + (Math.sqrt(Math.pow(event.pageX - event.x0, 2) +
    //                  Math.pow(event.pageY - event.y0, 2) | 0))
    //         .toFixed(2) + 'px');
    // }
  });

  function dragMoveListener (event) {
    var target = event.target,
        // keep the dragged position in the data-x/data-y attributes
        x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    // translate the element
    target.style.webkitTransform =
    target.style.transform =
      'translate(' + x + 'px, ' + y + 'px)';

    // update the posiion attributes
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
  }

  // this is used later in the resizing and gesture demos
  window.dragMoveListener = dragMoveListener;




// interact('.resize-drag')
//   .draggable({
//     onmove: window.dragMoveListener,
//     restrict: {
//       restriction: 'parent',
//       elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
//     },
//   })
//   .resizable({
//     // resize from all edges and corners
//     edges: { left: true, right: true, bottom: true, top: true },
//
//     // keep the edges inside the parent
//     restrictEdges: {
//       outer: 'parent',
//       endOnly: true,
//     },
//
//     // minimum size
//     restrictSize: {
//       min: { width: 100, height: 50 },
//     },
//
//     inertia: true,
//   })
//   .on('resizemove', function (event) {
//     var target = event.target,
//         x = (parseFloat(target.getAttribute('data-x')) || 0),
//         y = (parseFloat(target.getAttribute('data-y')) || 0);
//
//     // update the element's style
//     target.style.width  = event.rect.width + 'px';
//     target.style.height = event.rect.height + 'px';
//
//     // translate when resizing from top or left edges
//     x += event.deltaRect.left;
//     y += event.deltaRect.top;
//
//     target.style.webkitTransform = target.style.transform =
//         'translate(' + x + 'px,' + y + 'px)';
//
//     target.setAttribute('data-x', x);
//     target.setAttribute('data-y', y);
//     target.textContent = Math.round(event.rect.width) + '\u00D7' + Math.round(event.rect.height);
//   });
