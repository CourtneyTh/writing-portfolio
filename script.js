//active color on click event
function keepColor(clickedElement) {
  const navButtons = document.querySelectorAll('#category-nav li a');
  navButtons.forEach(button => {
    button.classList.remove('active');
  });
  clickedElement.classList.add('active');
}

const portfolioSection = document.getElementById('portfolio');
//show category on click event
function showCategory(category) {

  portfolioSection.innerHTML = '';

  const categoryData = portfolioData[category];

  populateList(categoryData);
}

function populateList(categoryData) {

  if (categoryData) {

    categoryData.forEach(item => {
      const article = document.createElement('article');
      const title = document.createElement('h4');
      title.textContent = item.title;

      const subtitle = document.createElement('subtitle');
      subtitle.textContent = item.subtitle;

      const description = document.createElement('p');
      description.textContent = item.description;

      const link = document.createElement('a');
      link.href = item.link;
      link.textContent = "Read more";

      article.appendChild(subtitle);
      article.appendChild(title);
      article.appendChild(description);
      article.appendChild(link);

      portfolioSection.appendChild(article);

    });
  }
}

