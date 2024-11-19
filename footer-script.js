
function adjustContentMargin() {
  const footer = document.querySelector('footer');
  const mainContent = document.getElementById('main-content');
  
  const footerHeight = footer.offsetHeight;
  mainContent.style.marginBottom = `${footerHeight}px`;
}

function loadContent() {
  // Load or add new content here
  // Example: mainContent.innerHTML = "<p>New content...</p>";

  adjustContentMargin();
}

adjustContentMargin();
