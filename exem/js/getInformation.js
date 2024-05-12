const cardsWrapper = document.querySelector(".cards__wrapper");

const getData = async () => {
  const request = await fetch("https://fakestoreapi.com/products");
  const responce = await request.json();
  return responce;
};

getData().then((data) => {
  console.log(data);
  data.forEach((card) => {
    cardsWrapper.innerHTML += `
      <div class="card">
        <img src=${card.image} alt="" width="100"/>
        <p>${card.title}</p>
        <p>${card.price}$</p>
        <p>${card.description}</p>
      </div>`;
  });
});
