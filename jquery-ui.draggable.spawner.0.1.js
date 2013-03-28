/*
jQuery UI Draggable Spawner v0.1
release 2013.03.22.15.30.58.382351795

Built by Trent Oswald
trentoswald@therebelrobot.com
http://therebelrobot.com

Legal mumbojumbo:
    Copyright (c) 2013 Trent Oswald & theRebelRobot Designs

    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

Sample Usage:

  $('.original').spawner($('.wrapper'),'child','c',{
      // jQuery UI draggable options here
      cursor: "move",
      cursorAt: { top: 10, left: 10 }
  });

*/
(function($) {
  $.fn.spawner = function(grandparent,child,idpref,dragops){
    var parent = $(this);
    parent.on('mousedown',function(e){
      var pos = $(this).offset();
      var realchild = '';
      if (typeof child != 'object'){
        realchild = '.'+child;
      }
      else{ // child is an array of classes
        i = 0;
        while(i<child.length){
          realchild += '.'+child[i];
          i++;
        }
      }
      var id = 0;
      var found = false;
      while (!found){
        if ($(document).find('.'+idpref+id).length>0){
          id++;
        }
        else{
          found = true;
        }
      }
      var realchild2 = realchild.replace(/\./g, ' ');
      grandparent.append('<div class="'+realchild2+' '+idpref+id+'"></div>');
      grandparent.find("."+idpref+id).css({'position':'absolute','top':pos.top,'left':pos.left});
//       $("."+idpref+id).css({'position':'absolute','top':pos.top,'left':pos.left});
      if (dragops){
        grandparent.find("."+idpref+id).draggable(dragops);
      }
      else{
        grandparent.find("."+idpref+id).draggable();
      }
      grandparent.find("."+idpref+id).trigger(e);
    });
  };
}(jQuery));
