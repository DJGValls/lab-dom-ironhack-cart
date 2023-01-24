// ITERATION 1
console.log("hello world");

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  let price = product.querySelector('.price span');
  let quantity = product.querySelector(".quantity input");
  let subTotalResult = price.innerText * quantity.value;
  let subTotal = product.querySelector(".subtotal span");
  
  subTotal.innerText = subTotalResult;

  return subTotalResult;


  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  let totalPrice = 0;
  let allProductsDOM = document.querySelectorAll(".product") 
   allProductsDOM.forEach(eachProductDOM => {
    
    totalPrice += updateSubtotal(eachProductDOM);
   });

  // ITERATION 3
  //... your code goes here
   
   let totalResultDOM = document.querySelector("#total-value span");

   totalResultDOM.innerText = totalPrice;
   
   
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
