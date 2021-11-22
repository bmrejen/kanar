const products = [
  {
    "colors": ["Brown", "White", "Blue"],
    "_id": "107fb5b75607497b96722bda5b504926",
    "name": "Mandarin Duck",
    "price": 120,
    "imageUrl": "kanar01.jpeg",
    "description":
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "altTxt": "Canard mandarin"
  },
  {
    "colors": ["Green (male)", "Brown (female)"],
    "_id": "415b7cacb65d43b2b5c1ff70f3393ad1",
    "name": "Mallard Duck",
    "price": 20,
    "imageUrl": "kanar02.jpeg",
    "description":
      "Morbi nec erat aliquam, sagittis urna non, laoreet justo. Etiam sit amet interdum diam, at accumsan lectus.",
    "altTxt": "Canard col-vert"
  },
  {
    "colors": ["Black", "Brown", "White"],
    "_id": "055743915a544fde83cfdfc904935ee7",
    "name": "Call Duck",
    "price": 25,
    "imageUrl": "kanar03.jpeg",
    "description":
      "Pellentesque fermentum arcu venenatis ex sagittis accumsan. Vivamus lacinia fermentum tortor.Mauris imperdiet tellus ante.",
    "altTxt": "Canard Call Duck"
  },
  {
    "colors": ["Black", "White"],
    "_id": "a557292fe5814ea2b15c6ef4bd73ed83",
    "name": "American Black Duck",
    "price": 85,
    "imageUrl": "kanar04.jpeg",
    "description":
      "Donec mattis nisl tortor, nec blandit sapien fermentum at. Proin hendrerit efficitur fringilla. Lorem ipsum dolor sit amet.",
    "altTxt": "Canard américain"
  },
  {
    "colors": ["White", "Blue", "Brown"],
    "_id": "8906dfda133f4c20a9d0e34f18adcf06",
    "name": "White-Headed Duck",
    "price": 120,
    "imageUrl": "kanar05.jpeg",
    "description":
      "Ut laoreet vulputate neque in commodo. Suspendisse maximus quis erat in sagittis. Donec hendrerit purus at congue aliquam.",
    "altTxt": "Canard à tête blanche"
  },
  {
    "colors": ["Grey", "Brown"],
    "_id": "77711f0e466b4ddf953f677d30b0efc9",
    "name": "Wood Duck",
    "price": 235,
    "imageUrl": "kanar06.jpeg",
    "description":
      "Curabitur vel augue sit amet arcu aliquet interdum. Integer vel quam mi. Morbi nec vehicula mi, sit amet vestibulum.",
    "altTxt": "Canard branchu"
  },
  {
    "colors": ["Yellow", "Grey"],
    "_id": "034707184e8e4eefb46400b5a3774b5f",
    "name": "Duckling",
    "price": 10,
    "imageUrl": "kanar07.jpeg",
    "description":
      "EMauris imperdiet tellus ante, sit amet pretium turpis molestie eu. Vestibulum et egestas eros. Vestibulum non lacus orci.",
    "altTxt": "Petit caneton"
  },
  {
    "colors": ["Blue", "Black"],
    "_id": "a6ec5b49bd164d7fbe10f37b6363f9fb",
    "name": "Blue-winged Teal",
    "price": 80,
    "imageUrl": "kanar08.jpeg",
    "description":
      "Mauris molestie laoreet finibus. Aenean scelerisque convallis lacus at dapibus. Morbi imperdiet enim metus rhoncus.",
    "altTxt": "Sarcelle à ailes bleues"
  }
]

exports.find = () => {
  return new Promise((resolve, reject) => resolve(JSON.parse(JSON.stringify(products))))
}

exports.findById = (id) => {
  return new Promise((resolve, reject) =>
    resolve(JSON.parse(JSON.stringify(products)).find((product) => product._id == id))
  )
}
