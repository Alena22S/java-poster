
function makeResizableDiv(div) {
  const element = document.querySelector(div);
  const resizers = document.querySelectorAll(div + ' .resizer')
  const minimum_size = 20;
  let original_width = 0;
  let original_height = 0;
  let original_x = 0;
  let original_y = 0;
  let original_mouse_x = 0;
  let original_mouse_y = 0;
  for (let i = 0;i < resizers.length; i++) {
    const currentResizer = resizers[i];
    currentResizer.addEventListener('mousedown', function(e) {
      e.preventDefault()
      original_width = parseFloat(getComputedStyle(element, null).getPropertyValue('width').replace('px', ''));
      original_height = parseFloat(getComputedStyle(element, null).getPropertyValue('height').replace('px', ''));
      original_x = element.getBoundingClientRect().left;
      original_y = element.getBoundingClientRect().top;
      original_mouse_x = e.pageX;
      original_mouse_y = e.pageY;
      window.addEventListener('mousemove', resize)
      window.addEventListener('mouseup', stopResize)
    })
    
    function resize(e) {
      if (currentResizer.classList.contains('bottom-right')) {
        const width = original_width + (e.pageX - original_mouse_x);
        const height = original_height + (e.pageY - original_mouse_y)
        if (width > minimum_size) {
          element.style.width = width + 'px'
        }
        if (height > minimum_size) {
          element.style.height = height + 'px'
        }
      }
      else if (currentResizer.classList.contains('bottom-left')) {
        const height = original_height + (e.pageY - original_mouse_y)
        const width = original_width - (e.pageX - original_mouse_x)
        if (height > minimum_size) {
          element.style.height = height + 'px'
        }
        if (width > minimum_size) {
          element.style.width = width + 'px'
          element.style.left = original_x + (e.pageX - original_mouse_x) + 'px'
        }
      }
      else if (currentResizer.classList.contains('top-right')) {
        const width = original_width + (e.pageX - original_mouse_x)
        const height = original_height - (e.pageY - original_mouse_y)
        if (width > minimum_size) {
          element.style.width = width + 'px'
        }
        if (height > minimum_size) {
          element.style.height = height + 'px'
          element.style.top = original_y + (e.pageY - original_mouse_y) + 'px'
        }
      }
      else {
        const width = original_width - (e.pageX - original_mouse_x)
        const height = original_height - (e.pageY - original_mouse_y)
        if (width > minimum_size) {
          element.style.width = width + 'px'
          element.style.left = original_x + (e.pageX - original_mouse_x) + 'px'
        }
        if (height > minimum_size) {
          element.style.height = height + 'px'
          element.style.top = original_y + (e.pageY - original_mouse_y) + 'px'
        }
      }
    }
    
    function stopResize() {
      window.removeEventListener('mousemove', resize)
    }
  }
}

makeResizableDiv('.resizable')






















$(function () {
  $("#draggable1").draggable();
  $("#draggable2").draggable();
  $("#draggable3").draggable();
});

$(function () {
  $(".draggable").draggable();
});


var counter = 1;
const imgClickAndChange = document.getElementById("imgClickAndChange");

imgClickAndChange.onclick = function () {
  if (counter == 0) {
    imgClickAndChange.src = "images/egg.png";
    counter++;
  } else if (counter == 1) {
    imgClickAndChange.src = "images/bag.png";
    counter++;
  } else if (counter == 2) {
    imgClickAndChange.src = "images/man.png";
    counter++;
  } else if (counter == 3) {
    imgClickAndChange.src = "images/glasses.png";
    counter = 0;
  }
};

var counter = 1;
const imgClickAndChange2 = document.getElementById("imgClickAndChange2");

imgClickAndChange2.onclick = function () {
  if (counter == 0) {
    imgClickAndChange2.src = "images/man.png";
    counter++;
  } else if (counter == 1) {
    imgClickAndChange2.src = "images/pin.png";
    counter++;
  } else if (counter == 2) {
    imgClickAndChange2.src = "images/banana.png";
    counter++;
  } else if (counter == 3) {
    imgClickAndChange2.src = "images/eye.png";
    counter = 0;
  }
};


var counter = 1;
const imgClickAndChange3 = document.getElementById("imgClickAndChange3");

imgClickAndChange3.onclick = function () {
  if (counter == 0) {
    imgClickAndChange3.src = "figures/oval3.svg";
    counter++;
  } else if (counter == 1) {
    imgClickAndChange3.src = "figures/oval3pink.svg";
    counter++;
 
  } else if (counter == 2) {
    imgClickAndChange3.src = "figures/oval3yellow.svg";
    counter = 0;
  }
  
};


var counter = 1;
const imgClickAndChange4 = document.getElementById("imgClickAndChange4");

imgClickAndChange4.onclick = function () {
  if (counter == 0) {
    imgClickAndChange4.src = "texts/murmansk.svg";
    counter++;
  } else if (counter == 1) {
    imgClickAndChange4.src = "texts/moscow.svg";
    counter++;
  } else if (counter == 2) {
    imgClickAndChange4.src = "texts/samara.svg";
    counter++;
  } else if (counter == 3) {
    imgClickAndChange4.src = "texts/perm.svg";
    counter++;
  } else if (counter == 4) {
    imgClickAndChange4.src = "images/ekb.svg";
    counter++;
  } else if (counter == 5) {
    imgClickAndChange4.src = "texts/kirov.svg";
    counter = 0;
  }
  
};


var counter = 1;
const imgClickAndChange5 = document.getElementById("imgClickAndChange5");

imgClickAndChange5.onclick = function () {
  if (counter == 0) {
    imgClickAndChange5.src = "texts/zatopilo.svg";
    counter++;
  } else if (counter == 1) {
    imgClickAndChange5.src = "texts/summa.svg";
    counter++;
  } else if (counter == 2) {
    imgClickAndChange5.src = "texts/agents.svg";
    counter++;

  } else if (counter == 3) {
    imgClickAndChange5.src = "images/bags.svg";
    counter++;
 
  } else if (counter == 4) {
    imgClickAndChange5.src = "texts/pojar.svg";
    counter = 0;
  }
  
};


var counter = 1;
const imgClickAndChange6 = document.getElementById("imgClickAndChange6");

imgClickAndChange6.onclick = function () {
  if (counter == 0) {
    imgClickAndChange6.src = "texts/kill.png";
    counter++;
  } else if (counter == 1) {
    imgClickAndChange6.src = "texts/ananas.svg";
    counter++;
  } else if (counter == 2) {
    imgClickAndChange6.src = "texts/strana.svg";
    counter++;
 
  } else if (counter == 3) {
    imgClickAndChange6.src = "texts/ananas.svg";
    counter = 0;
  }
  
};


var counter = 1;
const imgClickAndChange7 = document.getElementById("imgClickAndChange7");

imgClickAndChange7.onclick = function () {
  if (counter == 0) {
    imgClickAndChange7.src = "land/lemonsland.png";
    counter++;
  } else if (counter == 1) {
    imgClickAndChange7.src = "images/egg.png";
    counter++;
  } else if (counter == 2) {
    imgClickAndChange7.src = "images/pin.png";
    counter++;
  } else if (counter == 3) {
    imgClickAndChange7.src = "images/eye.png";
    counter = 0;
  }
  
};


var counter = 1;
const imgClickAndChange8 = document.getElementById("imgClickAndChange8");

imgClickAndChange8.onclick = function () {
  if (counter == 0) {
    imgClickAndChange8.src = "land/lemonsland.png";
    counter++;
  } else if (counter == 1) {
    imgClickAndChange8.src = "images/egg.png";
    counter++;
  } else if (counter == 2) {
    imgClickAndChange8.src = "images/pin.png";
    counter++;
  } else if (counter == 3) {
    imgClickAndChange8.src = "images/eye.png";
    counter = 0;
  }
  
};


var counter = 1;
const imgClickAndChange9 = document.getElementById("imgClickAndChange9");

imgClickAndChange9.onclick = function () {
  if (counter == 0) {
    imgClickAndChange9.src = "images/brush.png";
    counter++;
  } else if (counter == 1) {
    imgClickAndChange9.src = "land/kapusta.svg";
    counter++;
  } else if (counter == 2) {
    imgClickAndChange9.src = "images/brush.png";
    counter++;
  } else if (counter == 3) {
    imgClickAndChange9.src = "land/kapusta.svg";
    counter = 0;
  }
  
};


var counter = 1;
const imgClickAndChange12 = document.getElementById("imgClickAndChange12");

imgClickAndChange12.onclick = function () {
  if (counter == 0) {
    imgClickAndChange12.src = "images/glasses.png";
    counter++;
  } else if (counter == 1) {
    imgClickAndChange12.src = "images/bag.png";
    counter++;
  } else if (counter == 2) {
    imgClickAndChange12.src = "images/bag.png";
    counter++;
  } else if (counter == 3) {
    imgClickAndChange12.src = "figures/star2.svg";
    counter = 0;
  }
  
};


function touchHandler(event) {
  var touch = event.changedTouches[0];

  var simulatedEvent = document.createEvent("MouseEvent");
      simulatedEvent.initMouseEvent({
      touchstart: "mousedown",
      touchmove: "mousemove",
      touchend: "mouseup"
  }[event.type], true, true, window, 1,
      touch.screenX, touch.screenY,
      touch.clientX, touch.clientY, false,
      false, false, false, 0, null);

  touch.target.dispatchEvent(simulatedEvent);
  event.preventDefault();
}

function init() {
  document.addEventListener("touchstart", touchHandler, true);
  document.addEventListener("touchmove", touchHandler, true);
  document.addEventListener("touchend", touchHandler, true);
  document.addEventListener("touchcancel", touchHandler, true);
}

init();

