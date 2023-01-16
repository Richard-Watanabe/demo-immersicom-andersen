var firstMovie = document.querySelector(".first-movie");
var secondMovie = document.querySelector(".second-movie")
var thirdMovie = document.querySelector(".third-movie")
var phone = document.querySelector(".phone");
var phoneTwo = document.querySelector(".phone-two");
var phoneThree = document.querySelector(".phone-three");
var borderBlink = document.querySelector(".borderBlink")
var colorContainer = document.querySelector('.color-container')
var secondContainer = document.querySelector('.second-container')
var colorBackground = document.querySelector('.color-background')
var secondBackground = document.querySelector('.second-background')
var thirdContainer = document.querySelector(".third-container")
var thirdBackground = document.querySelector(".third-background")
var blackHighlight = document.querySelector('.black-highlight')
var grayHighlight = document.querySelector('.gray-highlight')
var wineHighlight = document.querySelector('.wine-highlight')
var wineHighlightDecoy = document.querySelector('.wine-highlight-decoy')
var stainsDefaultHighlight = document.querySelector('.stains-default-highlight')
var stainsWalnutHighlight = document.querySelector('.stains-walnut-highlight')
var redArrow = document.querySelector('.red-arrow')
var nav = document.querySelector('.nav')
var navBar = document.querySelector('.nav-bar')
var navBarTwo = document.querySelector('.nav-bar-two')
var navImg = document.querySelector('.nav-img')
var grillBlinkContainer = document.querySelector('.grill-blink-container')
var grillBlink = document.querySelector('.grill-blink')
var colorBlink = document.querySelector('.color-blink')
var initialContainer = document.querySelector('.initial-container')
var prairieHighlight = document.querySelector('.prairie-highlight')
var modifiedColonialHighlight = document.querySelector('.modified-colonial-highlight')
var colonialHighlight = document.querySelector('.colonial-highlight')
var colonialSelected = document.querySelector(".colonial-selected")
var grillList = document.querySelector('.grill-list')
var scrollDiv = document.querySelector('.scroll')
var scrollDivTwo = document.querySelector(".scroll-two")
var prairieSelected = document.querySelector(".prairie-selected")
var modifiedSelected = document.querySelector(".modified-selected")
var fullIcon = document.querySelector('.full-icon')
var backpatch = document.querySelector('.backpatch')
var saveHighlight = document.querySelector('.save-highlight')
var firstDoorHighlight = document.querySelector(".first-door-highlight")
var configure = document.querySelector('.configure')
var configureSecond = document.querySelector(".configure-second")
var saved = document.querySelector(".saved")
var colorContainerTwo = document.querySelector(".color-container-two")
var colorBackgroundTwo = document.querySelector(".color-background-two")
var brownDoorSelected = document.querySelector(".brown-door-selected")
var doorList = document.querySelector(".door-list")
var doorThreeHighlight = document.querySelector(".door-three-highlight")
var doorThreeSelected = document.querySelector(".door-three-selected")
var scrollArrow = document.querySelector(".scroll-arrow")
var doubleDoorRedHighlight = document.querySelector(".double-door-red-highlight")
var doubleDoorGreenHighlight = document.querySelector(".double-door-green-highlight")
var doubleDoorStainsHighlight = document.querySelector(".double-door-stains-highlight")
var upload = document.querySelector(".upload")
var thirdColonialHighlight = document.querySelector(".third-colonial-highlight")
var farmhouseHighlight = document.querySelector(".farmhouse-highlight")
var finishDiv = document.querySelector(".finish-div")

firstMovie.addEventListener('ended', (event) =>{
  phone.classList.remove("hide")
});

colorBlink.addEventListener('click', (event) => {
  console.log("hey")
  colorBlink.classList.add('hide')
  colorContainer.classList.remove("hide")
  colorContainer.style.overflowX = "hidden"
  initialContainer.classList.add('hide')
  navBar.classList.remove('hide')
});

blackHighlight.addEventListener('click', (event) => {
  colorBackground.src="./assets/black-door.png"
  blackHighlight.classList.add("hide")
  grayHighlight.classList.remove("hide")
});

grayHighlight.addEventListener('click', (event) => {
  colorBackground.src = "./assets/gray-door.png"
  grayHighlight.classList.add("hide")
  stainsDefaultHighlight.classList.remove("hide")
});

stainsDefaultHighlight.addEventListener('click', (event) => {
  colorBackground.src = "./assets/stains-door.png"
  stainsDefaultHighlight.classList.add("hide")
  stainsWalnutHighlight.classList.remove("hide")
});

stainsWalnutHighlight.addEventListener('click', (event) => {
  colorBackground.src = "./assets/walnut-door.png"
  stainsWalnutHighlight.classList.add("hide")
  redArrow.classList.remove('hide')

});

redArrow.addEventListener('click', (event) => {
  colorBackground.src = "./assets/grills-selection.png"
  redArrow.classList.add("hide")
  navImg.classList.remove('hide')
  console.log("here")
  setTimeout(() => {
    grillBlinkContainer.classList.remove('hide')
  }, 1000)
});

grillBlink.addEventListener('click', (event) =>{
  colorBackground.src = "./assets/grill-default.png";
  navImg.classList.add('hide')
  grillBlink.classList.add('hide');
  prairieHighlight.classList.remove('hide')
  grillList.classList.remove('hide');
  colorContainer.style.overflowX = "hidden"
  colorContainer.style.overflowY = "hidden"
  scrollDiv.classList.remove('hide')
})

prairieHighlight.addEventListener('click', (event) => {
  colorBackground.src = "./assets/prairie-grill.png";
  navImg.classList.add('hide')
  prairieHighlight.classList.add('hide');
  modifiedColonialHighlight.classList.remove('hide')
  prairieSelected.classList.remove('hide')
})

modifiedColonialHighlight.addEventListener('click', (event) => {
  colorBackground.src = "./assets/modified-colonial-grill.png"
  colonialHighlight.classList.remove('hide')
  prairieSelected.classList.add('hide')
  modifiedSelected.classList.remove('hide')
  modifiedColonialHighlight.classList.add('hide')
});

colonialHighlight.addEventListener('click', (event) => {
  colorBackground.src = "./assets/colonial-grill.png"
  colonialSelected.classList.remove('hide')
  modifiedSelected.classList.add('hide')
  colonialHighlight.classList.add('hide')
  fullIcon.classList.remove('hide')
});

fullIcon.addEventListener('click', (event) => {
  colorBackground.src = "./assets/full-door.png"
  colonialSelected.classList.add('hide')
  backpatch.classList.add('hide')
  fullIcon.classList.add('hide')
  scrollDiv.classList.add('hide')
  saveHighlight.classList.remove('hide')
});

saveHighlight.addEventListener('click', (event) => {
  colorBackground.src = "./assets/full-door.png"
  saveHighlight.classList.add('hide');
  secondMovie.classList.remove('hide');
  secondMovie.play();
  colorBackground.classList.add('hide');
  phone.classList.add('hide')
});

secondMovie.addEventListener('ended', (event) => {
  phoneTwo.classList.remove("hide")
});

firstDoorHighlight.addEventListener('click', (event) => {
  secondContainer.classList.remove("hide");
  firstDoorHighlight.classList.add('hide');
  configure.classList.remove('hide');
  navBarTwo.classList.remove('hide');
});

configure.addEventListener('click', (event) => {
  secondBackground.src = "./assets/configure-door.png"
  configure.classList.add('hide');
  scrollArrow.classList.remove('hide')
  wineHighlight.classList.remove('hide')
  wineHighlightDecoy.classList.remove('hide')
  colorContainerTwo.classList.remove('hide')
});

wineHighlight.addEventListener('click', (event) => {
  secondBackground.src = "./assets/wine-selected.png"
  colorBackgroundTwo.src = "./assets/red-color-two.png"
  wineHighlight.classList.add('hide')
  saved.classList.remove('hide')
  scrollArrow.classList.add('hide')

});

saved.addEventListener('click', (event) => {
  secondBackground.src = "./assets/exterior-background.png"
  saved.classList.add('hide')
  colorBackgroundTwo.classList.add('hide')
  brownDoorSelected.classList.remove("hide")
  scrollDivTwo.classList.remove('hide')
  doorList.classList.remove('hide');
  doorThreeHighlight.classList.remove('hide');
});

doorThreeHighlight.addEventListener('click', (event) => {
  secondBackground.src = "./assets/double-door-default.png"
  doorThreeHighlight.classList.add('hide')
  brownDoorSelected.classList.add("hide")
  // colorBackgroundTwo.classList.add('hide')
  doorThreeSelected.classList.remove("hide")
  configureSecond.classList.remove('hide');
  // scrollDivTwo.classList.remove('hide')
  // doorList.classList.remove('hide');
  // doorThreeHighlight.classList.remove('hide');
});

configureSecond.addEventListener('click', (event) => {
  colorBackgroundTwo.src = "./assets/white-exterior-selected.png"
  configureSecond.classList.add('hide');
  wineHighlightDecoy.classList.remove('hide')
  colorContainerTwo.classList.remove('hide')
  doorList.classList.add("hide")
  scrollDivTwo.classList.add("hide")
  colorBackgroundTwo.classList.remove('hide')
  doubleDoorRedHighlight.classList.remove('hide')
  scrollArrow.classList.remove('hide')
});

doubleDoorRedHighlight.addEventListener('click', (event) => {
  secondBackground.src = "./assets/double-door-red.png"
  colorBackgroundTwo.src = "./assets/red-exterior-selected.png"
  doubleDoorRedHighlight.classList.add('hide')
  doubleDoorGreenHighlight.classList.remove('hide')
});

doubleDoorGreenHighlight.addEventListener('click', (event) => {
  secondBackground.src = "./assets/double-door-green.png"
  colorBackgroundTwo.src = "./assets/green-exterior-selected.png"
  doubleDoorGreenHighlight.classList.add('hide')
  doubleDoorStainsHighlight.classList.remove('hide')
  scrollArrow.style.top = "107px"
});

doubleDoorStainsHighlight.addEventListener('click', (event) => {
  secondBackground.src = "./assets/double-door-stains.png"
  colorBackgroundTwo.src = "./assets/stains-exterior-selected.png"
  doubleDoorStainsHighlight.classList.add('hide')
  upload.classList.remove('hide')
});

upload.addEventListener('click', (event) => {
  doubleDoorStainsHighlight.classList.remove('hide')
  upload.classList.remove('hide')
  thirdMovie.classList.remove('hide');
  thirdMovie.play();
  secondBackground.classList.add('hide');
  colorBackground.classList.add('hide');
  phoneTwo.classList.add('hide')
});

thirdMovie.addEventListener('ended', (event) => {
  phoneThree.classList.remove("hide")
});

thirdColonialHighlight.addEventListener('click', (event) => {
thirdContainer.classList.remove("hide");
thirdColonialHighlight.classList.add('hide')
farmhouseHighlight.classList.remove('hide')
});

farmhouseHighlight.addEventListener('click', (event) => {
  thirdBackground.src="./assets/farm-house-grille.png"
  farmhouseHighlight.classList.add('hide')
  finishDiv.classList.remove('hide')
});

    var active = false;
    var currentX;
    var currentY;
    var initialX;
    var initialY;
    var xOffset = 0;
    var yOffset = 0;

    scrollDiv.addEventListener("touchstart", dragStart, false);
    scrollDiv.addEventListener("touchend", dragEnd, false);
    scrollDiv.addEventListener("touchmove", drag, false);
    scrollDiv.addEventListener("mousedown", dragStart, false);
    scrollDiv.addEventListener("mouseup", dragEnd, false);
    scrollDiv.addEventListener("mousemove", drag, false);

    prairieHighlight.addEventListener("touchstart", dragStart, false);
    prairieHighlight.addEventListener("touchend", dragEnd, false);
    prairieHighlight.addEventListener("touchmove", drag, false);
    prairieHighlight.addEventListener("mousedown", dragStart, false);
    prairieHighlight.addEventListener("mouseup", dragEnd, false);
    prairieHighlight.addEventListener("mousemove", drag, false);

    prairieSelected.addEventListener("touchstart", dragStart, false);
    prairieSelected.addEventListener("touchend", dragEnd, false);
    prairieSelected.addEventListener("touchmove", drag, false);
    prairieSelected.addEventListener("mousedown", dragStart, false);
    prairieSelected.addEventListener("mouseup", dragEnd, false);
    prairieSelected.addEventListener("mousemove", drag, false);

    modifiedColonialHighlight.addEventListener("touchstart", dragStart, false);
    modifiedColonialHighlight.addEventListener("touchend", dragEnd, false);
    modifiedColonialHighlight.addEventListener("touchmove", drag, false);
    modifiedColonialHighlight.addEventListener("mousedown", dragStart, false);
    modifiedColonialHighlight.addEventListener("mouseup", dragEnd, false);
    modifiedColonialHighlight.addEventListener("mousemove", drag, false);

    modifiedSelected.addEventListener("touchstart", dragStart, false);
    modifiedSelected.addEventListener("touchend", dragEnd, false);
    modifiedSelected.addEventListener("touchmove", drag, false);
    modifiedSelected.addEventListener("mousedown", dragStart, false);
    modifiedSelected.addEventListener("mouseup", dragEnd, false);
    modifiedSelected.addEventListener("mousemove", drag, false);

    colonialHighlight.addEventListener("touchstart", dragStart, false);
    colonialHighlight.addEventListener("touchend", dragEnd, false);
    colonialHighlight.addEventListener("touchmove", drag, false);
    colonialHighlight.addEventListener("mousedown", dragStart, false);
    colonialHighlight.addEventListener("mouseup", dragEnd, false);
    colonialHighlight.addEventListener("mousemove", drag, false);

    colonialSelected.addEventListener("touchstart", dragStart, false);
    colonialSelected.addEventListener("touchend", dragEnd, false);
    colonialSelected.addEventListener("touchmove", drag, false);
    colonialSelected.addEventListener("mousedown", dragStart, false);
    colonialSelected.addEventListener("mouseup", dragEnd, false);
    colonialSelected.addEventListener("mousemove", drag, false);

    function dragStart(e) {
      if (e.type === "touchstart") {
        initialX = e.touches[0].clientX - xOffset;
        initialY = e.touches[0].clientY - yOffset;
      } else {
        initialX = e.clientX - xOffset;
        initialY = e.clientY - yOffset;
      }

      if (e.target === grillList || e.target === prairieHighlight
        || e.target === prairieSelected || e.target === modifiedColonialHighlight
        || e.target === modifiedSelected || e.target === colonialHighlight
        || e.target === colonialSelected) {
        active = true;
      }
    }

    function dragEnd(e) {
      initialX = currentX;
      initialY = currentY;

      active = false;
    }

    function drag(e) {
      if (active) {

        if (event.cancelable) event.preventDefault();

        if (e.type === "touchmove") {
          currentX = e.touches[0].clientX - initialX;
          currentY = e.touches[0].clientY - initialY;
        } else {
          currentX = e.clientX - initialX;
          currentY = e.clientY - initialY;
        }

        xOffset = currentX;
        yOffset = currentY;

        setTranslate(currentX, currentY, grillList);
        setTranslate(currentX, currentY, modifiedColonialHighlight);
        setTranslate(currentX, currentY, colonialHighlight);
        setTranslate(currentX, currentY, prairieHighlight);
        setTranslate(currentX, currentY, prairieSelected);
        setTranslate(currentX, currentY, modifiedColonialHighlight);
        setTranslate(currentX, currentY, modifiedSelected)
        setTranslate(currentX, currentY, colonialHighlight)
        setTranslate(currentX, currentY, colonialSelected)
      }
    }

    function setTranslate(xPos, yPos, el) {
      if(xPos >= -75 && xPos <= 0){
      el.style.transform = "translate3d(" + xPos + "px, " + 0 + "px, 0)";
      }
    }

    var activeTwo = false;
    var currentXTwo;
    var currentYTwo;
    var initialXTwo;
    var initialYTwo;
    var xOffsetTwo = 0;
    var yOffsetTwo = 0;

    scrollDivTwo.addEventListener("touchstart", dragStartTwo, false);
    scrollDivTwo.addEventListener("touchend", dragEndTwo, false);
    scrollDivTwo.addEventListener("touchmove", dragTwo, false);
    scrollDivTwo.addEventListener("mousedown", dragStartTwo, false);
    scrollDivTwo.addEventListener("mouseup", dragEndTwo, false);
    scrollDivTwo.addEventListener("mousemove", dragTwo, false);

    brownDoorSelected.addEventListener("touchstart", dragStartTwo, false);
    brownDoorSelected.addEventListener("touchend", dragEndTwo, false);
    brownDoorSelected.addEventListener("touchmove", dragTwo, false);
    brownDoorSelected.addEventListener("mousedown", dragStartTwo, false);
    brownDoorSelected.addEventListener("mouseup", dragEndTwo, false);
    brownDoorSelected.addEventListener("mousemove", dragTwo, false);

doorThreeHighlight.addEventListener("touchstart", dragStartTwo, false);
doorThreeHighlight.addEventListener("touchend", dragEndTwo, false);
doorThreeHighlight.addEventListener("touchmove", dragTwo, false);
doorThreeHighlight.addEventListener("mousedown", dragStartTwo, false);
doorThreeHighlight.addEventListener("mouseup", dragEndTwo, false);
doorThreeHighlight.addEventListener("mousemove", dragTwo, false);

doorThreeSelected.addEventListener("touchstart", dragStartTwo, false);
doorThreeSelected.addEventListener("touchend", dragEndTwo, false);
doorThreeSelected.addEventListener("touchmove", dragTwo, false);
doorThreeSelected.addEventListener("mousedown", dragStartTwo, false);
doorThreeSelected.addEventListener("mouseup", dragEndTwo, false);
doorThreeSelected.addEventListener("mousemove", dragTwo, false);

    function dragStartTwo(e) {
      if (e.type === "touchstart") {
        initialXTwo = e.touches[0].clientX - xOffsetTwo;
        initialYTwo = e.touches[0].clientY - yOffsetTwo;
      } else {
        initialXTwo = e.clientX - xOffsetTwo;
        initialYTwo = e.clientY - yOffsetTwo;
      }

      if (e.target === doorList || e.target === brownDoorSelected
        || e.target === doorThreeHighlight || e.target === doorThreeSelected
        || e.target === modifiedSelected || e.target === colonialHighlight
        || e.target === colonialSelected) {
        activeTwo = true;
      }
    }

    function dragEndTwo(e) {
      initialXTwo = currentXTwo;
      initialYTwo = currentYTwo;

      activeTwo = false;
    }

    function dragTwo(e) {
      if (activeTwo) {

        if (event.cancelable) event.preventDefault();

        if (e.type === "touchmove") {
          currentXTwo = e.touches[0].clientX - initialXTwo;
          currentYTwo = e.touches[0].clientY - initialYTwo;
        } else {
          currentXTwo = e.clientX - initialXTwo;
          currentYTwo = e.clientY - initialYTwo;
        }

        xOffsetTwo = currentXTwo;
        yOffsetTwo = currentYTwo;

        setTranslateTwo(currentXTwo, currentYTwo, doorList);
        setTranslateTwo(currentXTwo, currentYTwo, brownDoorSelected);
        setTranslateTwo(currentXTwo, currentYTwo, doorThreeHighlight);
        setTranslateTwo(currentXTwo, currentYTwo, doorThreeSelected);
        setTranslateTwo(currentXTwo, currentYTwo, prairieSelected);
        setTranslateTwo(currentXTwo, currentYTwo, modifiedColonialHighlight);
        setTranslateTwo(currentXTwo, currentYTwo, modifiedSelected)
        setTranslateTwo(currentXTwo, currentYTwo, colonialHighlight)
        setTranslateTwo(currentXTwo, currentYTwo, colonialSelected)
      }
    }

    function setTranslateTwo(xPos, yPos, el) {
          if (xPos >= -189 && xPos <= 0) {
            el.style.transform = "translate3d(" + xPos + "px, " + 0 + "px, 0)";
          }
        }
