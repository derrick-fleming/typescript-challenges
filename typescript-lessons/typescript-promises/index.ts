const inventory = {
  sunglasses: 1400,
  pants: 1088,
  bags: 1344
};

const checkInventory = (order: (string | number)[][]) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let inStock = order.every(item => inventory[item[0]] >= item[1]);
      if (inStock) {
        resolve(`Thank you. Your order was successful.`);
      } else {
        reject(`We're sorry. Your order could not be completed because some items are sold out.`);
      }
    }, 1000);
  })
};


console.log({inventory});

const order = [['sunglasses', 1], ['bags', 2]];

console.log(`Your order is: ${order[0][1]} pair of ${order[0][0]} and ${order[1][1]} ${order[1][0]}. Proceed to checkout?`);

const handleSuccess = (resolvedValue: string) => {
  console.log(resolvedValue);
};

const handleFailure = (rejectedValue: string) => {
  console.log(rejectedValue);
};

checkInventory(order)
  .then(handleSuccess)
  .catch(handleFailure);

const store = {
  sunglasses: {
    inventory: 817,
    cost: 9.99
  },
  pants: {
    inventory: 236,
    cost: 7.99
  },
  bags: {
    inventory: 17,
    cost: 12.99
  }
};

type orderItems = {
  items: any[][],
  giftcardBalance: number
};


const checkInventoryTwo = (order: orderItems) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const itemsArr = order.items;
      let inStock = itemsArr.every(item => store[item[0]].inventory >= item[1]);

      if (inStock) {
        let total = 0;
        itemsArr.forEach(item => {
          total += item[1] * store[item[0]].cost
        });
        console.log(`All of the items are in stock. The total cost of the order is ${total}.`);
        resolve([order, total]);
      } else {
        reject(`The order could not be completed because some items are sold out.`);
      }
    }, generateRandomDelay());
  });
};

const processPayment = (responseArray: orderItems | number[][]) => {
  const order: { items: any[][], giftcardBalance: number} = responseArray[0];
  const total = responseArray[1];
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let hasEnoughMoney = order.giftcardBalance >= total;
      // For simplicity we've omited a lot of functionality
      // If we were making more realistic code, we would want to update the giftcardBalance and the inventory
      if (hasEnoughMoney) {
        console.log(`Payment processed with giftcard. Generating shipping label.`);
        let trackingNum = generateTrackingNumber();
        resolve([order, trackingNum]);
      } else {
        reject(`Cannot process order: giftcard balance was insufficient.`);
      }

    }, generateRandomDelay());
  });
};


const shipOrder = (responseArray: orderItems | number[][]) => {
  const order = responseArray[0];
  const trackingNum = responseArray[1];
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`The order has been shipped. The tracking number is: ${trackingNum}.`);
    }, generateRandomDelay());
  });
};


function generateTrackingNumber() {
  return Math.floor(Math.random() * 1000000);
}

function generateRandomDelay() {
  return Math.floor(Math.random() * 2000);
}

const orderTwo = {
  items: [['sunglasses', 1], ['bags', 2]],
  giftcardBalance: 79.82
};

checkInventoryTwo(orderTwo)
  .then((resolvedValueArray: orderItems | number[][]) => {
    return processPayment(resolvedValueArray);
  })
  .then((resolvedValueArray: orderItems | number[][]) => {
    return shipOrder(resolvedValueArray);
  })
  .then((successMessage) => {
    console.log(successMessage);
  })
  .catch((errorMessage) => {
    console.log(errorMessage);
  });
