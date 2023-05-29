//Nayzak Attract Data Value And Apply Inline CSS JavaScript
var dataSize = document.querySelectorAll('[data-size]');
dataSize.forEach(sizeValue => {
  sizeValue.style.width = sizeValue.getAttribute('data-size') + 'px';
  sizeValue.style.height = sizeValue.getAttribute('data-size') + 'px';
});



//Nayzak Swiper Slider
var sliderSelector = '.swiper', defaultOptions = {
  breakpointsInverse: true,
  observer: true
};
var nSlider = document.querySelectorAll(sliderSelector);
[].forEach.call(nSlider, function(slider, index, arr) {
  var data = slider.getAttribute('data-swiper') || {};
  if (data) {
    var dataOptions = JSON.parse(data);
  }
  slider.options = Object.assign({}, defaultOptions, dataOptions);
  var swiper = new Swiper(slider, slider.options);
  console.log(slider.options.autoplay)
  if (typeof slider.options.autoplay !== 'undefined' && slider.options.autoplay !== false) {
    slider.addEventListener('mouseenter', function(e) {
      swiper.autoplay.stop();
      console.log('stop')
    });
    slider.addEventListener('mouseleave', function(e) {
      swiper.autoplay.start();
      console.log('start')
    });
  }
});

//Nayzak Swiper Destroyed Slider Script
const breakpoint = window.matchMedia('(min-width:768px)');
let mySwiper;
const breakpointChecker = function() {
  if(breakpoint.matches === true) {
    if(mySwiper !== undefined) mySwiper.destroy(true, true);
    return;
  }
  else if (breakpoint.matches === false) {
    return enableSwiper();
  }
};
const enableSwiper = function() {
  var sliderSelector = '[data-distorted]', defaultOptions = {
    breakpointsInverse: true,
    observer: true
  };
  var nSlider = document.querySelectorAll(sliderSelector);
  [].forEach.call(nSlider, function(slider, index, arr) {
    var data = slider.getAttribute('data-swiper') || {};
    if (data) {
      var dataOptions = JSON.parse(data);
    }
    slider.options = Object.assign({}, defaultOptions, dataOptions);
    var swiper = new Swiper(slider, slider.options);
    console.log(slider.options.autoplay)
    if (typeof slider.options.autoplay !== 'undefined' && slider.options.autoplay !== false) {
      slider.addEventListener('mouseenter', function(e) {
        swiper.autoplay.stop();
        console.log('stop')
      });
      slider.addEventListener('mouseleave', function(e) {
        swiper.autoplay.start();
        console.log('start')
      });
    }
  });
};
breakpoint.addListener(breakpointChecker);
breakpointChecker();

//Nayzak Attract Video SRC From Custom Data Attribute And Play Video JavaScript
document.querySelectorAll('[data-modal-video]').forEach(dataModalVideo => {
  dataModalVideo.addEventListener('click', () => {
    document.getElementById('videoIframe').src = dataModalVideo.getAttribute('data-modal-video');
  });
});

//Nayzak Footer Menus JavaScript
const accordionTitles = document.querySelectorAll('.data-expendable');
accordionTitles.forEach((accordionTitle) => {
  accordionTitle.addEventListener('click', () => {
    if (accordionTitle.classList.contains('is-open')) {
      accordionTitle.classList.remove('is-open');
    }
    else {
      const accordionTitlesWithIsOpen = document.querySelectorAll('.is-open');
      accordionTitlesWithIsOpen.forEach((accordionTitleWithIsOpen) => {
        accordionTitleWithIsOpen.classList.remove('is-open');
      });
      accordionTitle.classList.add('is-open');
    }
  });
});


//Nayzak Get File Name JavaScript
var span = document.getElementsByClassName('uploaded-file');
var uploader = document.getElementsByTagName('input');
for(item in uploader) {
  uploader[item].onchange = function() {
    span[0].innerHTML = this.files[0].name;
  }
}

//Nayzak AOS JavaScript
AOS.init ({
  once: true,
});

//Nayzak Intl Tel Input JavaScript
var lazyLoadInstance = new LazyLoad ({
  elements_selector: '[data-src]',
});