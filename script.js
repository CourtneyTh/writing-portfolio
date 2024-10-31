// Active color on click event
function keepColor(clickedElement) {
  const navButtons = document.querySelectorAll('#category-nav li a');
  navButtons.forEach(button => {
    button.classList.remove('active');
  });
  clickedElement.classList.add('active');
}

const portfolioSection = document.getElementById('portfolio');

// Show category on click event
function showCategory(category) {
  portfolioSection.innerHTML = '';

  const categoryData = portfolioData[category];

  populateList(categoryData);
}

// Populate list with each item in categoryData
function populateList(categoryData) {
  if (categoryData) {
    categoryData.forEach(item => {
      const article = document.createElement('article');
      
      // Add image if present
      if (item.image) {
        const image = document.createElement('img');
        image.src = item.image;
        image.alt = item.title;
        image.classList.add('portfolio-image');
        article.appendChild(image);
      }

      // Subtitle, title, and description
      const subtitle = document.createElement('p');
      subtitle.classList.add('subtitle');
      subtitle.textContent = item.subtitle || '';

      const title = document.createElement('h4');
      title.textContent = item.title;

      const description = document.createElement('p');
      description.textContent = item.description;

      // Append elements to the article
      article.appendChild(subtitle);
      article.appendChild(title);
      article.appendChild(description);
      article.appendChild(buildArticleLink(item));

      // Add article to portfolio section
      portfolioSection.appendChild(article);
    });
  }
}

// Build article link
function buildArticleLink(item) {
  const link = document.createElement('a');
  link.href = item.link;
  link.target = '_blank';
  link.textContent = "Read more";
  return link;
}
