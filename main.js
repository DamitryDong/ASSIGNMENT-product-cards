// array of objects with:
// section 1 -product image
//           -product name
//           -product description

// section 2 -       "specification"
//           -"size and weight"
//           - valid until <date> 

// section 3 -         "Price"
//           -"3 blocks for price for differnt quantity"
const products = [
    {
      productImage: "https://i.pinimg.com/474x/32/f6/69/32f669f03de51d76cc8d7d5e216e0b63.jpg",
      productName: "Magic Bananas",
      productDesciption: "Magical Bananas that unicorns eat",
      Availability: "Available",

      size: '4"x4"',
      weight: "3 oz",
      validUntil: "Valid until 11/13/2024",
      
      price1: "$299.99",
      price250: "$259.99",
      price51: "$200.99"

    },
    {
      productImage: "https://i.pinimg.com/474x/32/f6/69/32f669f03de51d76cc8d7d5e216e0b63.jpg",
      productName: "Magic Bananas",
      productDesciption: "Magical Bananas that unicorns eat",
      Availability: "Available",

      size: '4"x4"',
      weight: "3 oz",
      validUntil: "Valid until 11/13/2024",
      
      price1: "$299.99",
      price250: "$259.99",
      price51: "$200.99"

    },
    {
      productImage: "https://i.pinimg.com/474x/32/f6/69/32f669f03de51d76cc8d7d5e216e0b63.jpg",
      productName: "Magic Bananas",
      productDesciption: "Magical Bananas that unicorns eat",
      Availability: "Available",

      size: '4"x4"',
      weight: "3 oz",
      validUntil: "Valid until 11/13/2024",
      
      price1: "$299.99",
      price250: "$259.99",
      price51: "$200.99"

    },
    {
      productImage: "https://i.pinimg.com/474x/32/f6/69/32f669f03de51d76cc8d7d5e216e0b63.jpg",
      productName: "Magic Bananas",
      productDesciption: "Magical Bananas that unicorns eat",
      Availability: "Available",

      size: '4"x4"',
      weight: "3 oz",
      validUntil: "Valid until 11/13/2024",
      
      price1: "$299.99",
      price250: "$259.99",
      price51: "$200.99"

    },    
    {
      productImage: "https://i.pinimg.com/474x/32/f6/69/32f669f03de51d76cc8d7d5e216e0b63.jpg",
      productName: "Magic Bananas",
      productDesciption: "Magical Bananas that unicorns eat",
      Availability: "Available",

      size: '4"x4"',
      weight: "3 oz",
      validUntil: "Valid until 11/13/2024",
      
      price1: "$299.99",
      price250: "$259.99",
      price51: "$200.99"

    }, 
];

// section 1 -product image
//           -product name
//           -product description

// section 2 -       "specification"
//           -"lenght and width"
//           - valid until <date> 

// section 3 -         "Price"
//           -"3 blocks for price for differnt quantity"

//running a FOR OF loop through array
const targetinglocation = document.querySelector("#container")

let domString = "";
for (const product of products) {
  domString +=
  `<div class="Product-Cards" style="width: 15rem;">
    <div class="card-body">

      <h2 class="Section1">${product.productName}</h5>
      <img src=${product.productImage} class="card-img-top" alt=${product.productName}>
      <p class="Description">${product.productDesciption}</p>
      <p class="Availability">${product.Availability}</p>

      <h5 class="Section2">Specification</h5>
      <p class="Size">Size: ${product.size}</p>
      <p class="Weight">Weight: ${product.size}</p>
      <p class="Valid-Until"> ${product.validUntil}</p>

      <h4 class="Section3">Pricing</h4>
      <p class="Single">1: ${product.price1}</p>
      <p class="TwoToFifty">2-50: ${product.price250}</p>
      <p class="FiftyPlus">51+: ${product.price51}</p>
      
    </div>
  </div>`;
}

//call innerHTML function to populate
targetinglocation.innerHTML = domString;