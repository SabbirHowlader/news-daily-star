const loadNews =  async() =>{
    const url = `https://openapi.programming-hero.com/api/news/categories`;
    const res = await fetch(url);
    const data = await res.json();
    newsCategory(data.data.news_category);
}
const newsCategory = categories => {
    const categoryContainer = document.getElementById('all-categories');
    categories.forEach(category =>{
        const categoryDiv = document.createElement('div');
        categoryDiv.classList.add('ul');
        categoryDiv.innerHTML = `
                <ul class="list ">
                    <li class="list-group-item">${category.category_name}</li>  
                </ul>
          
        `;
        categoryContainer.appendChild(categoryDiv);
    })
}

loadNews();