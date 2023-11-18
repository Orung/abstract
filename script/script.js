const searchInput = document.getElementById('searchInput');
const searchIcon = document.getElementById('searchIcon');
const hamburger = document.getElementById('hamburger');
const cancelIcon = document.getElementById('cancelIcon');
const toggle = document.getElementById('toggle');
const navItem = document.getElementById('navItem');
const cancelSearch = document.getElementById('cancelSearch');
 
 


// Function to toggle visibility of an element
function toggleVisibility(element, show) {
    element.classList.toggle('hidden', !show);
}

// Function to show navigation items and hide hamburger icon
function showNav() {
    toggleVisibility(navItem, true);
    toggleVisibility(hamburger, false);
    toggleVisibility(cancelIcon, true);
}

// Function to hide navigation items and show hamburger icon
function hideNav() {
    toggleVisibility(navItem, false);
    toggleVisibility(cancelIcon, false);
    toggleVisibility(hamburger, true);
}

// Function to show the search input
function showSearchInput() {
    toggleVisibility(searchInput, true);
}

// Function to hide the search input
function hideSearchInput() {
    toggleVisibility(searchInput, false);
}

// Event listeners
hamburger.addEventListener('click', showNav);
cancelIcon.addEventListener('click', hideNav);
searchIcon.addEventListener('click', showSearchInput);
cancelSearch.addEventListener('click', hideSearchInput);
