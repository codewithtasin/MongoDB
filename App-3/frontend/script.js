const searchText = window.location.search;
const urlParam = new URLSearchParams(searchText);
const id = urlParam.get("id");

fetch(`http://localhost:2043/products?id=${id}`)
  .then((res) => res.json())
  .then((res) => console.log(res));
