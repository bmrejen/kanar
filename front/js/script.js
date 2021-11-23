fetch("http://localhost:3000/api/products")
  .then((res) => res.json())
  .then((data) => addProducts(data))

// altTxt: "Canard mandarin"
// colors: (3) ['Brown', 'White', 'Blue']
// description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
// imageUrl: "http://localhost:3000/images/kanar01.jpeg"
// name: "Mandarin Duck"
// price: 120
// _id: "107fb5b75607497b96722bda5b504926"

function addProducts(ducks) {
  // const _id = ducks[0]._id
  // const imageUrl = ducks[0].imageUrl
  // const altTxt = ducks[0].altTxt
  // const name = ducks[0].name
  // const description = ducks[0].description

  ducks.forEach((duck) => {
    const { _id, imageUrl, altTxt, name, description } = duck
    const anchor = makeAnchor(_id)
    const article = document.createElement("article")
    const image = makeImageDiv(imageUrl, altTxt)
    const h3 = makeH3(name)
    const p = makeParagraph(description)

    appendElementsToArticle(article, [image, h3, p])
    appendArticleToAnchor(anchor, article)
  })
}

function appendElementsToArticle(article, array) {
  array.forEach((item) => {
    article.appendChild(item)
  })
  // article.appendChild(image)
  // article.appendChild(h3)
  // article.appendChild(p)
}

function makeAnchor(id) {
  const anchor = document.createElement("a")
  anchor.href = "./product.html?id=" + id
  return anchor
}

function appendArticleToAnchor(anchor, article) {
  const items = document.querySelector("#items")
  if (items != null) {
    items.appendChild(anchor)
    anchor.appendChild(article)
  }
}
function makeImageDiv(imageUrl, altTxt) {
  const image = document.createElement("img")
  image.src = imageUrl
  image.alt = altTxt
  image.removeAttribute("title")
  image.removeAttribute("style")
  return image
}

function makeH3(name) {
  const h3 = document.createElement("h3")
  h3.textContent = name
  h3.classList.add("productName")
  return h3
}
function makeParagraph(description) {
  const p = document.createElement("p")
  p.textContent = description
  p.classList.add("productDescription")
  return p
}
