const car = {
  name: 'Golf',
  brand: 'Volkswagen',
  year: 2008,
  mileage: 145000,
  description() {
    return `Dit is een ${this.name} van ${this.brand}`;
  },
  isOld() {
    return this.year < 2010;
  },
  drive(km) {
    this.mileage += km;
    return this.mileage;
  },
};

const output1 = document.querySelector('#output-1');
const output2 = document.querySelector('#output-2');
const output3 = document.querySelector('#output-3');

output1.textContent = car.description();
output2.textContent = car.isOld();
output3.textContent = car.drive(100);
