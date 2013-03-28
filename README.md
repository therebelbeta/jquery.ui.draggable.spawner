jquery.ui.draggable.spawner
===========================

A short plugin that enables mousedown to create a new draggable element, and transfer the mousedown event to the new element.

usage:

element.spawner(parentelement, childclassname, id-prefix, jqueryuidraggableoptions);

example:

 $('.original').spawner($('.wrapper'),'child','c',{
      // jQuery UI draggable options here
      cursor: "move",
      cursorAt: { top: 10, left: 10 }
  });
  
this will create and drag a new element $('.child.c1') or c2, or c3, etc. 
