const loadNavbar =  async() =>{
    const url = `https://openapi.programming-hero.com/api/news/categories`;
    const res = await fetch(url);
    const data = await res.json();
    newsCategory (data.data);
}
const newsCategory = categories => {
    const categoryContainer = document.getElementById('all-categories');
    categories.forEach(categories =>{
        const categoryDiv = document.createElement('div');
        categoryDiv.classList.add('col');
        categoryDiv.innerHTML = `
          <div class="nav">
          <h5 class="category-name">${categories.news_category}</h5>
          </div>
        `;
        categoryContainer.appendChild(categoryDiv);
    })
}

loadNavbar();