const fizzbuzz = (num) => {
  const esMultiplo = (num, divisor) => num % divisor === 0;

  if (num === 0) return 0;
  if (esMultiplo(num, 3) && esMultiplo(num, 5)) return 'fizzbuzz';
  if (esMultiplo(num, 3)) return 'fizz';
  if (esMultiplo(num, 5)) return 'buzz';
  return num;
};

const lista = (num) => {
  for (let i = 0; i <= num; i++) {
    console.log(`${i}: ${fizzbuzz(i)}`);
  }
};

const args = process.argv.slice(2);
lista(args[0]);

module.exports = fizzbuzz;
