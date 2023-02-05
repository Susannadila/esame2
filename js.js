
 //const lista = document.getElementById("lista");

 //fetch('https://dummyjson.com/todos')
  // .then(response => response.json())
  // .then(todos => {
 //    todos.forEach(todo => {
 //      const item = document.createElement("div");
   //    item.innerText = todo.title;
   
  //     const badge = document.createElement("span");
 //      badge.classList.add("badge", "badge-primary");
 //      badge.innerText = todo.userId;
   
     //  item.appendChild(badge);
     //  lista.appendChild(item);
    // });
  // });
 


  const randomIDArray = [];

const randomIDArrayFunction = () => {
  for (let i = 0; i < 4; i++) {
    let checker = Math.floor(Math.random() * 24);
    while (randomIDArray.includes(checker)) {
      checker = Math.floor(Math.random() * 24);
    }
    randomIDArray[i] = checker;
  }
};

randomIDArrayFunction();

async function TaskRule() {
  for (let i = 0; i < randomIDArray.length; i++) {
    
    let urlFetch = "https://dummyjson.com/todos" ;
    const stringedFetch = await fetch(urlFetch);
    const stringedFetchJSON = await stringedFetch.json();
    const IDRandomCard = document.querySelector(".IDRandomCard");
    let titleTitle1;
    if (stringedFetchJSON.data[randomIDArray[i]].title_short.length > 15) {
      let titleTitle1Slice = stringedFetchJSON.data[randomIDArray[i]].title_short.title;
      titleTitle1 = titleTitle1Slice.slice(0, 15);
      titleTitle1 = titleTitle1 + "...";
    } else {
      titleTitle1 = stringedFetchJSON.data[randomIDArray[i]].title_short.title;
    }
    IDRandomCard.innerHTML =
      IDRandomCard.innerHTML +
      `<div class="col-12 col-md-2 col-lg-2 my-4 px-3">
        <div class="card SpanLeftAsideBox" style="width: 100%;">
          <a href="#"><img src='${
            stringedFetchJSON.data[randomIDArray[i]].album.cover_big
          }' class="card-img-top px-3 pt-3" alt="photo" /></a>
          <div class="card-body d-flex flex-column align-items-start">
            <a href="#"><h5 class="card-title">${titleTitle1}</h5></a>
            <a href="#"><p class="card-text greyWrite">${
              stringedFetchJSON.data[randomIDArray[i]].artist.name
            }</p></a>
          </div>
        </div>
      </div>`;
  }
}
TaskRule();
