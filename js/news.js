const loadCategory = () => {
    const url = ` https://openapi.programming-hero.com/api/news/categories`
    fetch(url)
      .then(res => res.json())
    .then(data =>displayNews(data) )
    .catch(error => console.log(error));
  }
  
const displayNews = button => {
    const categoryIdName = button.data.news_category;
    const buttonsContainer = document.getElementById('button-container');
    
    categoryIdName.forEach(buttonData =>{
      
      const li = document.createElement('li');
      li.innerHTML = `
    <button onclick="categoryId('${buttonData.category_id}')" class='hover:text-green-600 ' onclick=" "> ${buttonData.category_name} </button>
    ` ;
      buttonsContainer.appendChild(li);
    })
  }
 
  
  
loadCategory();
  
  const categoryId = (id) => {
    loadNewsById(id);
    console.log(id);
  };

  const loadNewsById = (category_id) => {
    const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`;
    fetch(url)
      .then(res => res.json())
      .then(data => loadNewsIdDisplay(data))
      .catch(error => console.log(error));
  };
  
  const loadNewsIdDisplay = (data) => {
    
    const newsByIdArray = data.data;
      console.log(newsByIdArray);
    const newsItems = document.getElementById('news-items');
    newsItems.innerHTML = "";
    newsByIdArray.forEach(element => {
      const div = document.createElement('div');
      const newsDetails = element.details.slice(0, 200) + '...';
      div.innerHTML = `
      <div class="card lg:card-side bg-base-100 shadow-xl shadow-indigo-200 rounded-lg mx-32 mt-10">
     <figure><img class="rounded" src=" ${element.thumbnail_url}" alt="Album"></figure>
     <div class="card-body">
       <h2 class="card-title font-bold text-lg">${element.title}</h2>
       <p>${newsDetails}</p>
       <nav>
         <div class="navbar bg-base-100">
       <div class="flex-1">
         <div class="avatar">
           <div class="w-24 rounded-full ring ring-green-300">
             <img src="${element.author.img}" />
           </div>
         </div>
             <div class="stat">
             <p class="stat font-bold text-green-500 normal-case text-xl">${element.author.name}</p> 
             <p class="stat-desc ml-5">Jan 1st - Feb 1st</p> 
             </div>
            <div class="fill-green-500 ml-20">  
           <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="h-10 w-10"><path d="m11.998 5c-4.078 0-7.742 3.093-9.853 6.483-.096.159-.145.338-.145.517s.048.358.144.517c2.112 3.39 5.776 6.483 9.854 6.483 4.143 0 7.796-3.09 9.864-6.493.092-.156.138-.332.138-.507s-.046-.351-.138-.507c-2.068-3.403-5.721-6.493-9.864-6.493zm.002 3c2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4 1.792-4 4-4zm0 1.5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5z" fill-rule="nonzero"/></svg>
         </div>
         <div class="stat ">
           <div class="stat-title font-bold">Page Views</div>
           <div class="stat-value text-green-400">${element.total_view}</div>
           <div class="stat-desc ">21% more than last month</div>
         </div>
     
       </div>
       <div>
          <button type="button" class="btn-green-500 bg-green-500 p-2 rounded-lg" data-bs-toggle="modal" data-bs-target="#newsModal">
           Details
          </button>
         </div>
         </div>
            
       </nav>
     </div>
   </div>
      `;
      newsItems.appendChild(div);
    });
  
  }
  loadNewsById('01');
  
  
  
  const loadDetails = (id) => {
    const url = `https://openapi.programming-hero.com/api/news/${id}`;
    fetch(url)
        .then(response => response.json())
        .then(data => loadDetailsDisplay(data))
        .catch(error => console.log(error));
  };
  
  const loadDetailsDisplay = (data) => {
    const modalContainer =document.getElementById()
  }