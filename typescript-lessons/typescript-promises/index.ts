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

// Promise.all()

const checkAvailability = (itemName: string, distributorName: string) => {
  console.log(`Checking availability of ${itemName} at ${distributorName}...`);
  return new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      if (restockSuccess()) {
        console.log(`${itemName} are in stock at ${distributorName}`)
        resolve(itemName);
      } else {
        reject(`Error: ${itemName} is unavailable from ${distributorName} at this time.`);
      }
    }, 1000);
  });
};

function restockSuccess() {
  return (Math.random() > .2);
}

const onFulfill = (itemsArray: string[]) => {
  console.log(`Items checked: ${itemsArray}`);
  console.log(`Every item was available from the distributor. Placing order now.`);
};

const onReject = (rejectionReason: string) => {
  console.log(rejectionReason);
};

const checkSunglasses: Promise<string> = checkAvailability('sunglasses', 'Favorite Supply Co.');

const checkPants: Promise<string>  = checkAvailability('pants', 'Favorite Supply Co.');

const checkBags: Promise<string> = checkAvailability('bags', 'Favorite Supply Co.');

Promise.all([checkSunglasses, checkPants, checkBags])
  .then(onFulfill)
  .catch(onReject);

/* Async Await */

const shopForBeans = () => {
  return new Promise<string>((resolve, reject) => {
	const beanTypes = ['kidney', 'fava', 'pinto', 'black', 'garbanzo'];
  setTimeout(()=>{
    let randomIndex = Math.floor(Math.random() * 5);
    let beanType = beanTypes[randomIndex];
    console.log(`I bought ${beanType} beans because they were on sale.`);
   resolve(beanType);
  }, 1000)
})
}

let soakTheBeans = (beanType: string) => {
   return new Promise<boolean>((resolve, reject) => {
     console.log('Time to soak the beans.');
    setTimeout(()=>{
      console.log(`... The ${beanType} beans are softened.`);
      resolve(true);
      }, 1000);
  });
}

let cookTheBeans = (isSoftened: boolean) => {
  return new Promise<string>((resolve, reject) => {
    console.log('Time to cook the beans.');
    setTimeout(()=>{
      if (isSoftened) {
        console.log('... The beans are cooked!');
        resolve('\n\nDinner is served!');
      }
    }, 1000);
  });
}

async function makeBeans() {
  const type = await shopForBeans();
  const isSoft = await soakTheBeans(type);
  const dinner = await cookTheBeans(isSoft);
  console.log(dinner);
}

makeBeans();

// This function returns true 50% of the time.
let randomSuccess = () => {
  let num = Math.random();
  if (num < .5) {
    return true;
  } else {
    return false;
  }
};

// This function returns a promise that resolves half of the time and rejects half of the time
let cookBeanSouffle = () => {
  return new Promise((resolve, reject) => {
    console.log('Fingers crossed... Putting the Bean Souffle in the oven');
    setTimeout(() => {
      let success = randomSuccess();
      if (success) {
        resolve('Bean Souffle');
      } else {
        reject('Dinner is ruined!');
      }
    }, 1000);
  });
};

async function hostDinnerParty() {
  try {
    const resolvedValue = await cookBeanSouffle();
    console.log(`${resolvedValue} is served!`)
  } catch (error) {
    console.log(error);
    console.log('Ordering a pizza!');
  }
}

hostDinnerParty();

/* Async with Promise.All */

let cookBeans = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('beans');
    }, 1000);
  });
};

let steamBroccoli = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('broccoli');
    }, 1000);
  });
};

let cookRice = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('rice');
    }, 1000);
  });
};

let bakeChicken = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('chicken');
    }, 1000);
  });
};

async function serveDinnerAgain() {
  const foodArray = await Promise.all([steamBroccoli(), cookRice(), bakeChicken(), cookBeans()]);
  console.log(`Dinner is served. We're having ${foodArray[0]}, ${foodArray[1]}, ${foodArray[2]}, and ${foodArray[3]}.`);
}

serveDinnerAgain();
