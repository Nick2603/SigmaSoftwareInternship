// Генератор високосных годов:

let generateLeapYears = function () {
  let range = {
    from: 1900,

    to: new Date().getFullYear(),

    *[Symbol.iterator]() {
      for (let value = this.from; value <= this.to; value += 4) {
        yield value;
      }
    },
  };

  for (const value of range) {
    console.log(value);
  }
};

// generateLeapYears();

// Генерация id:

let idGenerator = function* (max = 5) {
  let i = Math.floor(Math.random() * max);
  while (true) yield i++;
};

const ids = idGenerator();

// console.log(ids.next().value);
// console.log(ids.next().value);
// console.log(ids.next().value);
// console.log(ids.next().value);

// Генератор счетчиков с изменяемым интервалом:

let counter = function* () {
  let counter = 0;

  let step = 1;

  while (true) {
    let newStep = yield (counter += step);

    if (newStep) {
      step = newStep;
    }
  }
};

const iterator = counter();

// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next(10).value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next(100).value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
