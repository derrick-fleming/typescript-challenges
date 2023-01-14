const inventory = {
  sunglasses: 1400,
  pants: 1088,
  bags: 1344
};

console.log({inventory});

function myExecutor(resolve: (arg0: string) => void, reject: (arg0: string) => void) {
  if (inventory.sunglasses > 0) {
    resolve('Sunglasses order processed.');
  } else {
    reject('That item is sold out.');
  }
}

function orderSunglasses() {
  return new Promise(myExecutor)
}

const orderPromise = orderSunglasses();

console.log(orderPromise);
