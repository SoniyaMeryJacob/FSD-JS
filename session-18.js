//fn statement or fn declaration
function calculateDeliveryCharge(distance) {
  return distance > 5 ? 50 : 20;
}
// **************************************-------------------------------------**************************

//fn expression+default parameter(discount=0)
const applyDiscount = (amount, discount = 0) => amount-amount*discount;
//debugging
// const applyDiscount = (amount, discount = 0) => {
//     let dis=amount-amount*discount;
//     console.log("dis=",amount,discount,dis);
// };
// **************************************-------------------------------------**************************

function placeYourOrder(order, discountType, callbackFn) {
  //destructring-taking values from obj
  const { customerName, items, distance } = order;
  const totalPrice = items.reduce(
    (sum, { price, quantity = 1 }) => sum + price * quantity,
    0,
  );
//   console.log("totalprice=",totalPrice);
  const discountedPrice = discountType(totalPrice);
//   console.log("discountedprice=",discountedPrice);
  
  const finalAmount = discountedPrice + calculateDeliveryCharge(distance);
  callbackFn(customerName, finalAmount);
}
//sample order
const order = {
  customerName: "Rahul",
  distance: 8,
  items: [
    { name: "Pizza", price: 300, quantity: 2 },
    { name: "Burger", price: 150 },
  ],
};

const festivalDiscount = (total) => applyDiscount(total, 0.1);

placeYourOrder(order, festivalDiscount, (name, finalAmount) => {
  console.log(`Order confirmed for ${name}.Pay Rs.${finalAmount}`);
});

//callbackFn-when a function become parameter of another function
//HOC-when a parameter become another function