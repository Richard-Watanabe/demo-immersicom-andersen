var firstMovie = document.querySelector(".first-movie");
var secondMovie = document.querySelector(".second-movie")
var thirdMovie = document.querySelector(".third-movie")
var fourthMovie = document.querySelector(".fourth-movie")
var fourthHalfMovie = document.querySelector(".fourth-movie-half")
var finalMovie = document.querySelector(".final-movie")
var phone = document.querySelector(".phone");
var phoneTwo = document.querySelector(".phone-two");
var phoneThree = document.querySelector(".phone-three");
var phoneFour = document.querySelector(".phone-four")
var phoneScreen = document.querySelector(".phone-screen");
var phoneScreenTwo = document.querySelector(".phone-screen-two");
var phoneScreenThree = document.querySelector(".phone-screen-three");
var phoneScreenFour = document.querySelector(".phone-screen-four")
var borderBlink = document.querySelector(".borderBlink")
var colorContainer = document.querySelector('.color-container')
var secondContainer = document.querySelector('.second-container')
var colorBackground = document.querySelector('.color-background')
var secondBackground = document.querySelector('.second-background')
var thirdContainer = document.querySelector(".third-container")
var thirdBackground = document.querySelector(".third-background")
var fourthContainer = document.querySelector(".fourth-container")
var fourthBackground = document.querySelector(".fourth-background")
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
var navBarFour = document.querySelector(".nav-bar-four")
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
var configureFourth = document.querySelector(".configure-four-div")
var saved = document.querySelector(".saved")
var savedFour = document.querySelector(".saved-four-div")
var savedFourGray = document.querySelector(".saved-four-gray-div")
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
var uploadFour = document.querySelector(".upload-four-div")
var uploadFourFinal = document.querySelector(".upload-four-div-final")
var thirdColonialHighlight = document.querySelector(".third-colonial-highlight")
var farmhouseHighlight = document.querySelector(".farmhouse-highlight")
var finishDiv = document.querySelector(".finish-div")
var initialWindowHighlight = document.querySelector(".initial-window-highlight")
var blackWindowHighlight = document.querySelector(".black-window-highlight")
var whiteWindowHighlight = document.querySelector(".white-window-highlight")
var grayWindowHighlight = document.querySelector(".gray-window-highlight")
var canvasHighlight = document.querySelector(".canvas-highlight")
var pineHighlight = document.querySelector(".pine-highlight")
var whiteInteriorHighlight = document.querySelector(".white-interior-highlight")
var backBtn = document.querySelector(".back")
var playBtn = document.querySelector(".play")
var pauseBtn = document.querySelector(".pause")
var nextBtn = document.querySelector(".next")
var windowBtnOne = document.querySelector(".window-btn-one")
var windowBtnTwo = document.querySelector(".window-btn-two")
var doorBtnOne = document.querySelector(".door-btn-one")
var doorBtnTwo = document.querySelector(".door-btn-two")

firstMovie.playbackRate = 10.0
secondMovie.playbackRate = 10.0
thirdMovie.playbackRate = 10.0
fourthMovie.playbackRate = 10.0
fourthHalfMovie.playbackRate = 10.0
finalMovie.playbackRate = 10.0

Object.defineProperty(HTMLMediaElement.prototype, 'playing', {
  get: function () {
    return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);
  }
})

var moviePlaying = "first"

backBtn.addEventListener('click', (event) => {
  backBtn.style.opacity = '1';
  window.setTimeout("backBtn.style.opacity='0';", 50);
  if (moviePlaying === "third") {
    playBtn.style.pointerEvents = ""
    secondMovie.pause()
    secondMovie.currentTime = 0;
    phone.classList.add('hide');
    phoneTwo.classList.add('hide');
    phoneThree.classList.add('hide')
    phoneFour.classList.add('hide')
    firstMovie.classList.add('hide')
    firstMovie.pause()
    secondMovie.classList.remove('hide')
    thirdMovie.classList.add('hide')
    thirdMovie.pause()
    fourthMovie.classList.add('hide')
    fourthMovie.pause()
    fourthHalfMovie.classList.add('hide')
    fourthHalfMovie.pause()
    finalMovie.classList.add('hide')
    finalMovie.pause()
    playBtn.classList.remove('hide');
    pauseBtn.classList.add('hide')
    moviePlaying = "second"
    navBarTwo.classList.add('hide')
    secondContainer.classList.add('hide')
    secondBackground.classList.remove('hide')
    configure.classList.add('hide')
    configureSecond.classList.add('hide')
    saved.classList.add('hide')
    upload.classList.add('hide')
    colorContainerTwo.classList.add('hide')
    wineHighlightDecoy.classList.add('hide')
    wineHighlight.classList.add('hide')
    doubleDoorRedHighlight.classList.add('hide')
    doubleDoorGreenHighlight.classList.add('hide')
    doubleDoorStainsHighlight.classList.add('hide')
    scrollArrow.classList.add('hide')
    scrollDivTwo.classList.add('hide')
    brownDoorSelected.classList.add('hide')
    doorThreeHighlight.classList.add('hide')
    doorThreeSelected.classList.add('hide')
    doorList.classList.add('hide')
    secondContainer.classList.add('hide')
    colorBackgroundTwo.classList.remove('hide')
    colorBackgroundTwo.src = "./assets/default-color-two.png"
    secondBackground.src = "./assets/initial-two.png"
    firstDoorHighlight.classList.remove('hide')
    scrollArrow.style.top = "0px"
    doorBtnTwo.style.opacity = "1"
    doorBtnOne.style.opacity = "0"
    windowBtnOne.style.opacity = "0"
    windowBtnTwo.style.opacity = "0"
  } else if (moviePlaying === "fourth"
  || moviePlaying === "fourthHalf"
  || moviePlaying === "final") {
    playBtn.style.pointerEvents = ""
    thirdMovie.pause()
    thirdMovie.currentTime = 0;
    phone.classList.add('hide');
    phoneTwo.classList.add('hide');
    phoneThree.classList.add('hide')
    phoneFour.classList.add('hide')
    firstMovie.classList.add('hide')
    firstMovie.pause()
    secondMovie.classList.add('hide')
    secondMovie.pause();
    thirdMovie.classList.remove('hide')
    fourthMovie.classList.add('hide')
    fourthMovie.pause()
    fourthHalfMovie.classList.add('hide')
    fourthHalfMovie.pause()
    finalMovie.classList.add('hide')
    finalMovie.pause()
    playBtn.classList.remove('hide');
    pauseBtn.classList.add('hide')
    moviePlaying = "third"
    thirdColonialHighlight.classList.remove('hide')
    thirdContainer.classList.add("hide")
    thirdBackground.classList.remove("hide")
    thirdBackground.src = "./assets/colonial-grille.png"
    farmhouseHighlight.classList.add("hide")
    finishDiv.classList.add("hide")
    windowBtnOne.style.opacity = "1"
    windowBtnTwo.style.opacity = "0"
    doorBtnOne.style.opacity = "0"
    doorBtnTwo.style.opacity = "0"
  } else if (moviePlaying === "first") {
    playBtn.style.pointerEvents = ""
    fourthMovie.pause()
    fourthMovie.currentTime = 0;
    phone.classList.add('hide');
    phoneTwo.classList.add('hide');
    phoneThree.classList.add('hide')
    phoneFour.classList.add('hide')
    firstMovie.classList.add('hide')
    firstMovie.pause()
    secondMovie.classList.add('hide')
    secondMovie.pause();
    thirdMovie.classList.add('hide')
    thirdMovie.pause()
    fourthMovie.classList.remove('hide')
    fourthHalfMovie.classList.add('hide')
    fourthHalfMovie.pause()
    finalMovie.classList.add('hide')
    finalMovie.pause()
    playBtn.classList.remove('hide');
    pauseBtn.classList.add('hide')
    moviePlaying = "fourth"
    navBarFour.classList.add('hide')
    initialWindowHighlight.classList.remove('hide')
    fourthContainer.classList.add('hide')
    fourthBackground.src = "./assets/initial-window.png"
    fourthBackground.classList.remove('hide')
    blackWindowHighlight.classList.add('hide')
    whiteWindowHighlight.classList.add('hide')
    grayWindowHighlight.classList.add('hide')
    canvasHighlight.classList.add('hide')
    pineHighlight.classList.add('hide')
    whiteInteriorHighlight.classList.add('hide')
    savedFour.classList.add('hide')
    savedFourGray.classList.add('hide')
    uploadFour.classList.add('hide')
    uploadFourFinal.classList.add('hide')
    configureFourth.classList.add('hide')
    windowBtnTwo.style.opacity = "1"
    doorBtnTwo.style.opacity = "0"
    doorBtnOne.style.opacity = "0"
    windowBtnOne.style.opacity = "0"
  } else if (moviePlaying === "second") {
    playBtn.style.pointerEvents = ""
    firstMovie.pause();
    firstMovie.currentTime = 0;
    phone.classList.add('hide');
    phoneTwo.classList.add('hide');
    phoneThree.classList.add('hide')
    phoneFour.classList.add('hide')
    firstMovie.classList.remove('hide')
    secondMovie.classList.add('hide')
    secondMovie.pause()
    thirdMovie.classList.add('hide')
    thirdMovie.pause()
    fourthMovie.classList.add('hide')
    fourthMovie.pause()
    fourthHalfMovie.classList.add('hide')
    fourthHalfMovie.pause()
    finalMovie.classList.add('hide')
    finalMovie.pause()
    playBtn.classList.remove('hide');
    pauseBtn.classList.add('hide')
    moviePlaying = "first"
    navBar.classList.add('hide')
    colorContainer.classList.add('hide')
    blackHighlight.classList.remove('hide');
    grayHighlight.classList.add('hide')
    stainsDefaultHighlight.classList.add('hide')
    stainsWalnutHighlight.classList.add('hide')
    redArrow.classList.add('hide')
    navImg.classList.add('hide')
    grillBlinkContainer.classList.add('hide')
    scrollDiv.classList.add('hide')
    prairieHighlight.classList.add('hide')
    prairieSelected.classList.add('hide')
    modifiedColonialHighlight.classList.add('hide')
    modifiedSelected.classList.add('hide')
    colonialHighlight.classList.add('hide')
    colonialSelected.classList.add('hide')
    grillList.classList.add('hide')
    fullIcon.classList.add('hide')
    saveHighlight.classList.add('hide')
    backpatch.classList.remove('hide')
    colorBackground.classList.remove('hide')
    initialContainer.classList.remove('hide')
    colorBlink.classList.remove('hide')
    grillBlink.classList.remove('hide')
    colorBackground.src = "./assets/white-door.png"
    colorContainer.style.overflowX = ""
    colorContainer.style.overflowY = ""
    backpatch.classList.add('hide')
    doorBtnOne.style.opacity = "1"
    doorBtnTwo.style.opacity = "0"
    windowBtnOne.style.opacity = "0"
    windowBtnTwo.style.opacity = "0"
  }
});

nextBtn.addEventListener('click', (event) => {
  nextBtn.style.opacity = '1';
  window.setTimeout("nextBtn.style.opacity='0';", 50);
  if (moviePlaying === "first") {
    playBtn.style.pointerEvents = ""
    secondMovie.pause()
    secondMovie.currentTime = 0;
    phone.classList.add('hide');
    phoneTwo.classList.add('hide');
    phoneThree.classList.add('hide')
    phoneFour.classList.add('hide')
    firstMovie.classList.add('hide')
    firstMovie.pause()
    secondMovie.classList.remove('hide')
    thirdMovie.classList.add('hide')
    thirdMovie.pause()
    fourthMovie.classList.add('hide')
    fourthMovie.pause()
    fourthHalfMovie.classList.add('hide')
    fourthHalfMovie.pause()
    finalMovie.classList.add('hide')
    finalMovie.pause()
    playBtn.classList.remove('hide');
    pauseBtn.classList.add('hide')
    moviePlaying = "second"
    navBarTwo.classList.add('hide')
    secondContainer.classList.add('hide')
    secondBackground.classList.remove('hide')
    configure.classList.add('hide')
    configureSecond.classList.add('hide')
    saved.classList.add('hide')
    upload.classList.add('hide')
    colorContainerTwo.classList.add('hide')
    wineHighlightDecoy.classList.add('hide')
    wineHighlight.classList.add('hide')
    doubleDoorRedHighlight.classList.add('hide')
    doubleDoorGreenHighlight.classList.add('hide')
    doubleDoorStainsHighlight.classList.add('hide')
    scrollArrow.classList.add('hide')
    scrollDivTwo.classList.add('hide')
    brownDoorSelected.classList.add('hide')
    doorThreeHighlight.classList.add('hide')
    doorThreeSelected.classList.add('hide')
    doorList.classList.add('hide')
    secondContainer.classList.add('hide')
    colorBackgroundTwo.classList.remove('hide')
    colorBackgroundTwo.src = "./assets/default-color-two.png"
    secondBackground.src = "./assets/initial-two.png"
    firstDoorHighlight.classList.remove('hide')
    scrollArrow.style.top = "0px"
    doorBtnTwo.style.opacity="1"
    doorBtnOne.style.opacity="0"
    windowBtnOne.style.opacity="0"
    windowBtnTwo.style.opacity="0"
  } else if (moviePlaying === "second") {
    playBtn.style.pointerEvents = ""
    thirdMovie.pause()
    thirdMovie.currentTime = 0;
    phone.classList.add('hide');
    phoneTwo.classList.add('hide');
    phoneThree.classList.add('hide')
    phoneFour.classList.add('hide')
    firstMovie.classList.add('hide')
    firstMovie.pause()
    secondMovie.classList.add('hide')
    secondMovie.pause();
    thirdMovie.classList.remove('hide')
    fourthMovie.classList.add('hide')
    fourthMovie.pause()
    fourthHalfMovie.classList.add('hide')
    fourthHalfMovie.pause()
    finalMovie.classList.add('hide')
    finalMovie.pause()
    playBtn.classList.remove('hide');
    pauseBtn.classList.add('hide')
    moviePlaying = "third"
    thirdColonialHighlight.classList.remove('hide')
    thirdContainer.classList.add("hide")
    thirdBackground.classList.remove("hide")
    thirdBackground.src = "./assets/colonial-grille.png"
    farmhouseHighlight.classList.add("hide")
    finishDiv.classList.add("hide")
    windowBtnOne.style.opacity="1"
    windowBtnTwo.style.opacity="0"
    doorBtnOne.style.opacity="0"
    doorBtnTwo.style.opacity="0"
  } else if (moviePlaying === "third") {
    playBtn.style.pointerEvents = ""
    fourthMovie.pause()
    fourthMovie.currentTime = 0;
    phone.classList.add('hide');
    phoneTwo.classList.add('hide');
    phoneThree.classList.add('hide')
    phoneFour.classList.add('hide')
    firstMovie.classList.add('hide')
    firstMovie.pause()
    secondMovie.classList.add('hide')
    secondMovie.pause();
    thirdMovie.classList.add('hide')
    thirdMovie.pause()
    fourthMovie.classList.remove('hide')
    fourthHalfMovie.classList.add('hide')
    fourthHalfMovie.pause()
    finalMovie.classList.add('hide')
    finalMovie.pause()
    playBtn.classList.remove('hide');
    pauseBtn.classList.add('hide')
    moviePlaying = "fourth"
    navBarFour.classList.add('hide')
    initialWindowHighlight.classList.remove('hide')
    fourthContainer.classList.add('hide')
    fourthBackground.src = "./assets/initial-window.png"
    fourthBackground.classList.remove('hide')
    blackWindowHighlight.classList.add('hide')
    whiteWindowHighlight.classList.add('hide')
    grayWindowHighlight.classList.add('hide')
    canvasHighlight.classList.add('hide')
    pineHighlight.classList.add('hide')
    whiteInteriorHighlight.classList.add('hide')
    savedFour.classList.add('hide')
    savedFourGray.classList.add('hide')
    uploadFour.classList.add('hide')
    uploadFourFinal.classList.add('hide')
    configureFourth.classList.add('hide')
    windowBtnTwo.style.opacity="1"
    doorBtnTwo.style.opacity="0"
    doorBtnOne.style.opacity="0"
    windowBtnOne.style.opacity="0"
  } else if (moviePlaying === "fourth"
    || moviePlaying === "fourthHalf"
    || moviePlaying === "final") {
    playBtn.style.pointerEvents = ""
    firstMovie.pause();
    firstMovie.currentTime = 0;
    phone.classList.add('hide');
    phoneTwo.classList.add('hide');
    phoneThree.classList.add('hide')
    phoneFour.classList.add('hide')
    firstMovie.classList.remove('hide')
    secondMovie.classList.add('hide')
    secondMovie.pause()
    thirdMovie.classList.add('hide')
    thirdMovie.pause()
    fourthMovie.classList.add('hide')
    fourthMovie.pause()
    fourthHalfMovie.classList.add('hide')
    fourthHalfMovie.pause()
    finalMovie.classList.add('hide')
    finalMovie.pause()
    playBtn.classList.remove('hide');
    pauseBtn.classList.add('hide')
    moviePlaying = "first"
    navBar.classList.add('hide')
    colorContainer.classList.add('hide')
    blackHighlight.classList.remove('hide');
    grayHighlight.classList.add('hide')
    stainsDefaultHighlight.classList.add('hide')
    stainsWalnutHighlight.classList.add('hide')
    redArrow.classList.add('hide')
    navImg.classList.add('hide')
    grillBlinkContainer.classList.add('hide')
    scrollDiv.classList.add('hide')
    prairieHighlight.classList.add('hide')
    prairieSelected.classList.add('hide')
    modifiedColonialHighlight.classList.add('hide')
    modifiedSelected.classList.add('hide')
    colonialHighlight.classList.add('hide')
    colonialSelected.classList.add('hide')
    grillList.classList.add('hide')
    fullIcon.classList.add('hide')
    saveHighlight.classList.add('hide')
    backpatch.classList.remove('hide')
    colorBackground.classList.remove('hide')
    initialContainer.classList.remove('hide')
    colorBlink.classList.remove('hide')
    grillBlink.classList.remove('hide')
    colorBackground.src = "./assets/white-door.png"
    colorContainer.style.overflowX = ""
    colorContainer.style.overflowY = ""
    backpatch.classList.add('hide')
    doorBtnOne.style.opacity="1"
    doorBtnTwo.style.opacity="0"
    windowBtnOne.style.opacity="0"
    windowBtnTwo.style.opacity="0"
  }
});

playBtn.addEventListener('click', (event) => {
  playBtn.classList.add('hide');
  pauseBtn.classList.remove('hide');
  if (moviePlaying === "first") {
    firstMovie.play()
    doorBtnOne.style.opacity="1"
    doorBtnTwo.style.opacity="0"
    windowBtnOne.style.opacity="0"
    windowBtnTwo.style.opacity="0"
  } else if (moviePlaying === "second") {
    secondMovie.play()
    doorBtnTwo.style.opacity="1"
    doorBtnOne.style.opacity="0"
    windowBtnOne.style.opacity="0"
    windowBtnTwo.style.opacity="0"
  } else if (moviePlaying === "third") {
    thirdMovie.play()
    windowBtnOne.style.opacity="1"
    windowBtnTwo.style.opacity="0"
    doorBtnOne.style.opacity="0"
    doorBtnTwo.style.opacity="0"
  } else if (moviePlaying === "fourth") {
    fourthMovie.play()
    windowBtnTwo.style.opacity="1"
    doorBtnTwo.style.opacity="0"
    doorBtnOne.style.opacity="0"
    windowBtnOne.style.opacity="0"
  } else if (moviePlaying === "fourthHalf") {
    fourthHalfMovie.play()
    windowBtnTwo.style.opacity="1"
    doorBtnTwo.style.opacity="0"
    doorBtnOne.style.opacity="0"
    windowBtnOne.style.opacity="0"
  } else if (moviePlaying === "final") {
    finalMovie.play()
    windowBtnTwo.style.opacity="0"
    doorBtnTwo.style.opacity="0"
    doorBtnOne.style.opacity="0"
    windowBtnOne.style.opacity="0"
  }
});

pauseBtn.addEventListener('click', (event) => {
  pauseBtn.classList.add('hide');
  playBtn.classList.remove('hide');
  if (firstMovie.playing) {
    moviePlaying = "first"
    firstMovie.pause();
  } else if(secondMovie.playing){
    moviePlaying = "second"
    secondMovie.pause()
  } else if (thirdMovie.playing) {
    moviePlaying = "third"
    thirdMovie.pause()
  } else if (fourthMovie.playing) {
    moviePlaying = "fourth"
    fourthMovie.pause()
  } else if (fourthHalfMovie.playing) {
    moviePlaying = "fourthHalf"
    fourthHalfMovie.pause()
  } else if (finalMovie.playing) {
    moviePlaying = "final"
    finalMovie.pause()
  }
});

doorBtnOne.addEventListener('click', (event) => {
  windowBtnTwo.style.opacity = "0"
  doorBtnTwo.style.opacity = "0"
  doorBtnOne.style.opacity = "1"
  windowBtnOne.style.opacity = "0"
  playBtn.style.pointerEvents = ""
  firstMovie.pause();
  firstMovie.currentTime = 0;
  phone.classList.add('hide');
  phoneTwo.classList.add('hide');
  phoneThree.classList.add('hide')
  phoneFour.classList.add('hide')
  firstMovie.classList.remove('hide')
  secondMovie.classList.add('hide')
  secondMovie.pause()
  thirdMovie.classList.add('hide')
  thirdMovie.pause()
  fourthMovie.classList.add('hide')
  fourthMovie.pause()
  fourthHalfMovie.classList.add('hide')
  fourthHalfMovie.pause()
  finalMovie.classList.add('hide')
  finalMovie.pause()
  playBtn.classList.remove('hide');
  pauseBtn.classList.add('hide')
  moviePlaying = "first"
  navBar.classList.add('hide')
  colorContainer.classList.add('hide')
  blackHighlight.classList.remove('hide');
  grayHighlight.classList.add('hide')
  stainsDefaultHighlight.classList.add('hide')
  stainsWalnutHighlight.classList.add('hide')
  redArrow.classList.add('hide')
  navImg.classList.add('hide')
  grillBlinkContainer.classList.add('hide')
  scrollDiv.classList.add('hide')
  prairieHighlight.classList.add('hide')
  prairieSelected.classList.add('hide')
  modifiedColonialHighlight.classList.add('hide')
  modifiedSelected.classList.add('hide')
  colonialHighlight.classList.add('hide')
  colonialSelected.classList.add('hide')
  grillList.classList.add('hide')
  fullIcon.classList.add('hide')
  saveHighlight.classList.add('hide')
  backpatch.classList.remove('hide')
  colorBackground.classList.remove('hide')
  initialContainer.classList.remove('hide')
  colorBlink.classList.remove('hide')
  grillBlink.classList.remove('hide')
  colorBackground.src="./assets/white-door.png"
  colorContainer.style.overflowX = ""
  colorContainer.style.overflowY = ""
  backpatch.classList.add('hide')
});

doorBtnTwo.addEventListener('click', (event) => {
  windowBtnTwo.style.opacity = "0"
  doorBtnTwo.style.opacity = "1"
  doorBtnOne.style.opacity = "0"
  windowBtnOne.style.opacity = "0"
  playBtn.style.pointerEvents = ""
  secondMovie.pause()
  secondMovie.currentTime = 0;
  phone.classList.add('hide');
  phoneTwo.classList.add('hide');
  phoneThree.classList.add('hide')
  phoneFour.classList.add('hide')
  firstMovie.classList.add('hide')
  firstMovie.pause()
  secondMovie.classList.remove('hide')
  thirdMovie.classList.add('hide')
  thirdMovie.pause()
  fourthMovie.classList.add('hide')
  fourthMovie.pause()
  fourthHalfMovie.classList.add('hide')
  fourthHalfMovie.pause()
  finalMovie.classList.add('hide')
  finalMovie.pause()
  playBtn.classList.remove('hide');
  pauseBtn.classList.add('hide')
  moviePlaying = "second"
  navBarTwo.classList.add('hide')
  secondContainer.classList.add('hide')
  secondBackground.classList.remove('hide')
  configure.classList.add('hide')
  configureSecond.classList.add('hide')
  saved.classList.add('hide')
  upload.classList.add('hide')
  colorContainerTwo.classList.add('hide')
  wineHighlightDecoy.classList.add('hide')
  wineHighlight.classList.add('hide')
  doubleDoorRedHighlight.classList.add('hide')
  doubleDoorGreenHighlight.classList.add('hide')
  doubleDoorStainsHighlight.classList.add('hide')
  scrollArrow.classList.add('hide')
  scrollDivTwo.classList.add('hide')
  brownDoorSelected.classList.add('hide')
  doorThreeHighlight.classList.add('hide')
  doorThreeSelected.classList.add('hide')
  doorList.classList.add('hide')
  secondContainer.classList.add('hide')
  colorBackgroundTwo.classList.remove('hide')
  colorBackgroundTwo.src ="./assets/default-color-two.png"
  secondBackground.src ="./assets/initial-two.png"
  firstDoorHighlight.classList.remove('hide')
  scrollArrow.style.top = "0px"
});

windowBtnOne.addEventListener('click', (event) => {
  windowBtnTwo.style.opacity = "0"
  doorBtnTwo.style.opacity = "0"
  doorBtnOne.style.opacity = "0"
  windowBtnOne.style.opacity = "1"
  playBtn.style.pointerEvents = ""
  thirdMovie.pause()
  thirdMovie.currentTime = 0;
  phone.classList.add('hide');
  phoneTwo.classList.add('hide');
  phoneThree.classList.add('hide')
  phoneFour.classList.add('hide')
  firstMovie.classList.add('hide')
  firstMovie.pause()
  secondMovie.classList.add('hide')
  secondMovie.pause();
  thirdMovie.classList.remove('hide')
  fourthMovie.classList.add('hide')
  fourthMovie.pause()
  fourthHalfMovie.classList.add('hide')
  fourthHalfMovie.pause()
  finalMovie.classList.add('hide')
  finalMovie.pause()
  playBtn.classList.remove('hide');
  pauseBtn.classList.add('hide')
  moviePlaying = "third"
  thirdColonialHighlight.classList.remove('hide')
  thirdContainer.classList.add("hide")
  thirdBackground.classList.remove("hide")
  thirdBackground.src="./assets/colonial-grille.png"
  farmhouseHighlight.classList.add("hide")
  finishDiv.classList.add("hide")
});

windowBtnTwo.addEventListener('click', (event) => {
  windowBtnTwo.style.opacity = "1"
  doorBtnTwo.style.opacity = "0"
  doorBtnOne.style.opacity = "0"
  windowBtnOne.style.opacity = "0"
  playBtn.style.pointerEvents = ""
  fourthMovie.pause()
  fourthMovie.currentTime = 0;
  phone.classList.add('hide');
  phoneTwo.classList.add('hide');
  phoneThree.classList.add('hide')
  phoneFour.classList.add('hide')
  firstMovie.classList.add('hide')
  firstMovie.pause()
  secondMovie.classList.add('hide')
  secondMovie.pause();
  thirdMovie.classList.add('hide')
  thirdMovie.pause()
  fourthMovie.classList.remove('hide')
  fourthHalfMovie.classList.add('hide')
  fourthHalfMovie.pause()
  finalMovie.classList.add('hide')
  finalMovie.pause()
  playBtn.classList.remove('hide');
  pauseBtn.classList.add('hide')
  moviePlaying = "fourth"
  navBarFour.classList.add('hide')
  initialWindowHighlight.classList.remove('hide')
  fourthContainer.classList.add('hide')
  fourthBackground.src="./assets/initial-window.png"
  fourthBackground.classList.remove('hide')
  blackWindowHighlight.classList.add('hide')
  whiteWindowHighlight.classList.add('hide')
  grayWindowHighlight.classList.add('hide')
  canvasHighlight.classList.add('hide')
  pineHighlight.classList.add('hide')
  whiteInteriorHighlight.classList.add('hide')
  savedFour.classList.add('hide')
  savedFourGray.classList.add('hide')
  uploadFour.classList.add('hide')
  uploadFourFinal.classList.add('hide')
  configureFourth.classList.add('hide')
});

firstMovie.addEventListener('ended', (event) => {
  phone.classList.remove("hide")
  phoneScreen.classList.remove('hide')
  playBtn.style.pointerEvents="none"
  playBtn.classList.remove('hide')
  pauseBtn.classList.add('hide')
});

colorBlink.addEventListener('click', (event) => {
  colorBlink.classList.add('hide')
  colorContainer.classList.remove("hide")
  phoneScreen.classList.remove('hide')
  colorContainer.style.overflowX = "hidden"
  initialContainer.classList.add('hide')
  navBar.classList.remove('hide')
});

blackHighlight.addEventListener('click', (event) => {
  colorBackground.src = "./assets/black-door.png"
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
  setTimeout(() => {
    grillBlinkContainer.classList.remove('hide')
  }, 600)
});

grillBlink.addEventListener('click', (event) => {
  colorBackground.src = "./assets/grill-default.png";
  navImg.classList.add('hide')
  grillBlink.classList.add('hide');
  prairieHighlight.classList.remove('hide')
  grillList.classList.remove('hide');
  colorContainer.style.overflowX = "hidden"
  colorContainer.style.overflowY = "hidden"
  scrollDiv.classList.remove('hide')
  backpatch.classList.remove('hide')
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
  backpatch.classList.add('hide')
});

saveHighlight.addEventListener('click', (event) => {
  colorBackground.src = "./assets/full-door.png"
  saveHighlight.classList.add('hide');
  secondMovie.currentTime = 0;
  secondMovie.classList.remove('hide');
  secondMovie.play();
  colorBackground.classList.add('hide');
  phone.classList.add('hide')
  firstMovie.classList.add('hide')
  playBtn.classList.add('hide');
  pauseBtn.classList.remove('hide')
  moviePlaying = "second";
  windowBtnTwo.style.opacity = "0"
  doorBtnTwo.style.opacity = "1"
  doorBtnOne.style.opacity = "0"
  windowBtnOne.style.opacity = "0"
  phoneScreenTwo.classList.add('hide')
});

secondMovie.addEventListener('ended', (event) => {
  phone.classList.add('hide');
  phoneTwo.classList.add('hide');
  phoneThree.classList.add('hide')
  phoneFour.classList.add('hide')
  firstMovie.classList.add('hide')
  firstMovie.pause()
  secondMovie.classList.remove('hide')
  thirdMovie.classList.add('hide')
  thirdMovie.pause()
  fourthMovie.classList.add('hide')
  fourthMovie.pause()
  fourthHalfMovie.classList.add('hide')
  fourthHalfMovie.pause()
  finalMovie.classList.add('hide')
  finalMovie.pause()
  playBtn.classList.remove('hide');
  pauseBtn.classList.add('hide')
  moviePlaying = "second"
  navBarTwo.classList.add('hide')
  secondContainer.classList.add('hide')
  secondBackground.classList.remove('hide')
  configure.classList.add('hide')
  configureSecond.classList.add('hide')
  saved.classList.add('hide')
  upload.classList.add('hide')
  colorContainerTwo.classList.add('hide')
  wineHighlightDecoy.classList.add('hide')
  wineHighlight.classList.add('hide')
  doubleDoorRedHighlight.classList.add('hide')
  doubleDoorGreenHighlight.classList.add('hide')
  doubleDoorStainsHighlight.classList.add('hide')
  scrollArrow.classList.add('hide')
  scrollDivTwo.classList.add('hide')
  brownDoorSelected.classList.add('hide')
  doorThreeHighlight.classList.add('hide')
  doorThreeSelected.classList.add('hide')
  doorList.classList.add('hide')
  secondContainer.classList.add('hide')
  colorBackgroundTwo.classList.remove('hide')
  colorBackgroundTwo.src = "./assets/default-color-two.png"
  secondBackground.src = "./assets/initial-two.png"
  firstDoorHighlight.classList.remove('hide')
  scrollArrow.style.top = "0px"
  phoneTwo.classList.remove("hide")
  phoneScreenTwo.classList.remove('hide')
  playBtn.style.pointerEvents = "none"
  playBtn.classList.remove('hide')
  pauseBtn.classList.add('hide')
});

firstDoorHighlight.addEventListener('click', (event) => {
  secondContainer.classList.remove("hide");
  firstDoorHighlight.classList.add('hide');
  phoneScreenTwo.classList.remove('hide')
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
  doorThreeSelected.classList.remove("hide")
  configureSecond.classList.remove('hide');
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
  thirdMovie.currentTime = 0;
  thirdMovie.classList.remove('hide');
  thirdMovie.play();
  secondBackground.classList.add('hide');
  colorBackground.classList.add('hide');
  phoneTwo.classList.add('hide')
  secondMovie.classList.add('hide')
  playBtn.classList.add('hide');
  pauseBtn.classList.remove('hide')
  windowBtnTwo.style.opacity = "0"
  doorBtnTwo.style.opacity = "0"
  doorBtnOne.style.opacity = "0"
  windowBtnOne.style.opacity = "1"
  phoneScreenThree.classList.add('hide')
});

thirdMovie.addEventListener('ended', (event) => {
  phone.classList.add('hide');
  phoneTwo.classList.add('hide');
  phoneThree.classList.add('hide')
  phoneFour.classList.add('hide')
  firstMovie.classList.add('hide')
  firstMovie.pause()
  secondMovie.classList.add('hide')
  secondMovie.pause();
  thirdMovie.classList.remove('hide')
  fourthMovie.classList.add('hide')
  fourthMovie.pause()
  fourthHalfMovie.classList.add('hide')
  fourthHalfMovie.pause()
  finalMovie.classList.add('hide')
  finalMovie.pause()
  playBtn.classList.remove('hide');
  pauseBtn.classList.add('hide')
  moviePlaying = "third"
  thirdColonialHighlight.classList.remove('hide')
  thirdContainer.classList.add("hide")
  thirdBackground.classList.remove("hide")
  thirdBackground.src = "./assets/colonial-grille.png"
  farmhouseHighlight.classList.add("hide")
  finishDiv.classList.add("hide")
  phoneThree.classList.remove("hide")
  phoneScreenThree.classList.remove('hide')
  playBtn.style.pointerEvents = "none"
  playBtn.classList.remove('hide')
  pauseBtn.classList.add('hide')
});

thirdColonialHighlight.addEventListener('click', (event) => {
  thirdContainer.classList.remove("hide");
  phoneScreenThree.classList.remove('hide')
  thirdColonialHighlight.classList.add('hide')
  farmhouseHighlight.classList.remove('hide')
});

farmhouseHighlight.addEventListener('click', (event) => {
  thirdBackground.src = "./assets/farm-house-grille.png"
  farmhouseHighlight.classList.add('hide')
  finishDiv.classList.remove('hide')
});

finishDiv.addEventListener('click', (event) => {
  finishDiv.classList.add('hide')
  fourthMovie.currentTime = 0;
  fourthMovie.classList.remove('hide');
  fourthMovie.play();
  thirdBackground.classList.add('hide');
  phoneThree.classList.add('hide')
  thirdMovie.classList.add('hide')
  playBtn.classList.add('hide');
  pauseBtn.classList.remove('hide')
  windowBtnTwo.style.opacity = "1"
  doorBtnTwo.style.opacity = "0"
  doorBtnOne.style.opacity = "0"
  windowBtnOne.style.opacity = "0"
  phoneScreenFour.classList.add('hide')
});

fourthMovie.addEventListener('ended', (event) => {
  phone.classList.add('hide');
  phoneTwo.classList.add('hide');
  phoneThree.classList.add('hide')
  phoneFour.classList.add('hide')
  firstMovie.classList.add('hide')
  firstMovie.pause()
  secondMovie.classList.add('hide')
  secondMovie.pause();
  thirdMovie.classList.add('hide')
  thirdMovie.pause()
  fourthMovie.classList.remove('hide')
  fourthHalfMovie.classList.add('hide')
  fourthHalfMovie.pause()
  finalMovie.classList.add('hide')
  finalMovie.pause()
  playBtn.classList.remove('hide');
  pauseBtn.classList.add('hide')
  moviePlaying = "fourth"
  navBarFour.classList.add('hide')
  initialWindowHighlight.classList.remove('hide')
  fourthContainer.classList.add('hide')
  fourthBackground.src = "./assets/initial-window.png"
  fourthBackground.classList.remove('hide')
  blackWindowHighlight.classList.add('hide')
  whiteWindowHighlight.classList.add('hide')
  grayWindowHighlight.classList.add('hide')
  canvasHighlight.classList.add('hide')
  pineHighlight.classList.add('hide')
  whiteInteriorHighlight.classList.add('hide')
  savedFour.classList.add('hide')
  savedFourGray.classList.add('hide')
  uploadFour.classList.add('hide')
  uploadFourFinal.classList.add('hide')
  configureFourth.classList.add('hide')
  phoneFour.classList.remove("hide")
  phoneScreenFour.classList.remove('hide')
  playBtn.style.pointerEvents = "none"
  playBtn.classList.remove('hide')
  pauseBtn.classList.add('hide')
  initialWindowHighlight.classList.remove('hide')
});

initialWindowHighlight.addEventListener('click', (event) => {
  fourthContainer.classList.remove("hide");
  phoneScreenFour.classList.remove('hide')
  initialWindowHighlight.classList.add('hide')
  blackWindowHighlight.classList.remove('hide')
});

blackWindowHighlight.addEventListener('click', (event) => {
  fourthBackground.src = "./assets/black-window.png"
  blackWindowHighlight.classList.add('hide')
  whiteWindowHighlight.classList.remove('hide')
});

whiteWindowHighlight.addEventListener('click', (event) => {
  fourthBackground.src = "./assets/initial-window.png"
  blackWindowHighlight.classList.add('hide')
  whiteWindowHighlight.classList.add('hide')
  savedFour.classList.remove('hide')
});

savedFour.addEventListener('click', (event) => {
  fourthBackground.src = "./assets/saved-full2.png"
  savedFour.classList.add('hide')
  uploadFour.classList.remove('hide')
});

uploadFour.addEventListener('click', (event) => {
  uploadFour.classList.add('hide')
  phoneFour.classList.add('hide')
  fourthHalfMovie.currentTime = 0;
  fourthHalfMovie.classList.remove('hide');
  fourthHalfMovie.play();
  playBtn.classList.add('hide');
  pauseBtn.classList.remove('hide')
});

fourthHalfMovie.addEventListener('ended', (event) => {
  fourthBackground.src = "./assets/initial-window.png"
  phoneFour.classList.remove("hide")
  grayWindowHighlight.classList.remove("hide")
  playBtn.style.pointerEvents = "none"
  playBtn.classList.remove('hide')
  pauseBtn.classList.add('hide')
});

grayWindowHighlight.addEventListener('click', (event) => {
  fourthBackground.src = "./assets/gray-window.png"
  grayWindowHighlight.classList.add('hide')
  configureFourth.classList.remove('hide')
});

configureFourth.addEventListener('click', (event) => {
  fourthBackground.src = "./assets/white-interior.png"
  navBarFour.classList.remove('hide')
  configureFourth.classList.add('hide')
  canvasHighlight.classList.remove('hide')
});

canvasHighlight.addEventListener('click', (event) => {
  fourthBackground.src = "./assets/canvas-interior.png"
  canvasHighlight.classList.add('hide')
  pineHighlight.classList.remove('hide')
});

pineHighlight.addEventListener('click', (event) => {
  fourthBackground.src = "./assets/pine-interior.png"
  pineHighlight.classList.add('hide')
  whiteInteriorHighlight.classList.remove('hide')
});

whiteInteriorHighlight.addEventListener('click', (event) => {
  fourthBackground.src = "./assets/white-interior.png"
  whiteInteriorHighlight.classList.add('hide')
  savedFourGray.classList.remove('hide')
});

savedFourGray.addEventListener('click', (event) => {
  fourthBackground.src = "./assets/fourth-window-full.png"
  savedFourGray.classList.add('hide')
  navBarFour.classList.add('hide')
  uploadFourFinal.classList.remove('hide')
});

uploadFourFinal.addEventListener('click', (event) => {
  uploadFourFinal.classList.add('hide')
  fourthBackground.classList.add('hide');
  finalMovie.currentTime = 0;
  finalMovie.classList.remove('hide');
  finalMovie.play();
  fourthHalfMovie.classList.add('hide')
  fourthMovie.classList.add('hide')
  phoneFour.classList.add('hide')
})

finalMovie.addEventListener('ended', (event) => {
  playBtn.classList.remove('hide')
  pauseBtn.classList.add('hide')
  playBtn.style.pointerEvents = "none"
  playBtn.classList.remove('hide')
  pauseBtn.classList.add('hide')
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
  if (xPos >= -74 && xPos <= 0) {
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
