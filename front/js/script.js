fetch("http://localhost:3000/api/products")
  .then((res) => res.json())
  .then((data) => addProducts(data))

function addProducts(donnees) {
  const imageUrl = donnees[0].imageUrl

  const anchor = document.createElement("a")
  anchor.href = imageUrl
  anchor.text = "Un super canard"
  const items = document.querySelector("#items")
  if (items != null) {
    items.appendChild(anchor)
  }
}
