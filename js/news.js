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

const newsDetails = async() =>{
    const url = `https://openapi.programming-hero.com/api/news/category/01`;
    const res = await fetch(url);
    const data = await res.json();
    displayNews (data.data);
}
const displayNews = news =>{
    const NewsContainer = document.getElementById('news-container');

    // only 4 news in display 
        news = news.slice(0,4);
    news.forEach(news => {
        const newsDiv = document.createElement('div');
        newsDiv.classList.add('col');
        newsDiv.innerHTML =`
               <div class="row g-0 mt-5">
                    <div class="col-md-4">
                        <img src="${news.thumbnail_url}" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${news.title}</h5>
                            <p class="card-text">${news.details}</p>
                            <div class="d-flex justify-content-between">  
                                <div> 
                                    <img style="border-radius: 50%;" src="${news.author.img}" alt="" height="50px" width="50px">
                                    <p class="p-date">${news.author.published_date}</p>
                                </div>
                                <div>
                                      <p class = "mt-3">${news.total_view}</p>
                                </div>
                                <div>
                                    <div>${news.rating.badge}</div>
                                    <div>${news.rating.number}</div>
                                </div>
                                <div>
                                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#newsModal">
                                    Details
                                </button>
                                </div>
                            </div
                        </div>
                    </div>
               </div>
        `;
        NewsContainer.appendChild(newsDiv);
    })
}

const displayNewsDetails = news => {
    console.log(news);
    const modelTitle = document.getElementById('newsModalLabel');
    modelTitle.innerText = news.name;
    const newsDetails = document.getElementById('news-container');
    newsDetails.innerHTML = `
    <p>title: ${news.title}`
}
 
newsDetails();
loadNews();