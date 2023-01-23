let sliderImages = document.querySelectorAll('.slider-container img');

// Number Of Slides
let slidesCount = sliderImages.length; // 5

// Default Slide
let currentSlide = 1;

// Previous and Next Buttons
let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');


// Handle Click on Previous and Next Buttons
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;


// Create The Main <ul> Element
let paginationElement = document.createElement('ul');

// Set ID On Created <ul> Element
paginationElement.id = 'pagination-ul';

// Create List Items Based On Slides Count
for (let i = 1; i <= slidesCount; i++) {

  // Create The <li>
  let paginationItem = document.createElement('li');

  // Set Custom Attribute
  paginationItem.setAttribute('data-index', i);

  // Append Items to The Main <ul> List
  paginationElement.appendChild(paginationItem);

}

// Add The Created <ul> Element to The Page
document.getElementById('indicators').appendChild(paginationElement);

// Get The New Created <ul>
let paginationCreatedUl = document.getElementById('pagination-ul');

// Get Pagination Items
let paginationsBullets = document.querySelectorAll('#pagination-ul li');

// Loop Through All Bullets Items
for (let i = 0; i < paginationsBullets.length; i++) {

  paginationsBullets[i].onclick = function () {

    currentSlide = parseInt(this.getAttribute('data-index'));

    theChecker();

  }

}

// Trigger The Checker Function
theChecker();

// Next Slide Function
function nextSlide() {
    // 5 = 5
    if (currentSlide === slidesCount) {

    // Back to first img
    currentSlide = 1;
    theChecker();

  } else {

    currentSlide++;
    theChecker();

  }

}

// Previous Slide Function
function prevSlide() {

  if (currentSlide === 1) {

    // Go to last img
    currentSlide = slidesCount;
    theChecker();

  } else {

    currentSlide--;

    theChecker();

  }

}

// Create The Checker Function
function theChecker() {

  // Remove All Active Classes
  removeAllActive();

  // Set Active Class On Current Slide
  sliderImages[currentSlide - 1].classList.add('active');

  // Set Active Class on Current Pagination Item
  paginationCreatedUl.children[currentSlide - 1].classList.add('active');

}

// Remove All Active Classes From Images and Pagination Bullets
function removeAllActive() {

  // Loop Through Images & Loop Through Pagination Bullets
  [...sliderImages, ...paginationsBullets].forEach(function (e) {

    e.classList.remove('active');

  });

}