fetch("http://localhost:5000/products")
  .then((res) => res.json())
  .then((res) => console.log(res));
