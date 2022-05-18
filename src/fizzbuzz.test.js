const fizzbuzz = require('./fizzbuzz.js');

describe('Pruebas en fizzbuzz.js', () => {
  // Primer Test
  test('se espera que número sea igual a numero', () => {
    const num = 1;
    const expected = fizzbuzz(num);
    const result = num;

    expect(expected).toBe(result);
  });

  // Segundo Test
  test('se espera que 3 sea igual a fizz', () => {
    const num = 3;
    const expected = fizzbuzz(num);
    const result = 'fizz';

    expect(expected).toBe(result);
  });

  // Tercer Test
  test('se espera que los múltiplos de 3 sea igual a fizz', () => {
    const num = 6;
    const expected = fizzbuzz(num);
    const result = 'fizz';

    expect(expected).toBe(result);
  });

  // Cuarto Test
  test('se espera que 5 sea igual a buzz', () => {
    const num = 5;
    const expected = fizzbuzz(num);
    const result = 'buzz';

    expect(expected).toBe(result);
  });

  // Quinto Test
  test('se espera que los múltiplos de 5 sea igual a buzz', () => {
    const num = 10;
    const expected = fizzbuzz(num);
    const result = 'buzz';

    expect(expected).toBe(result);
  });

  // Sexto Test
  test('se espera que los múltiplos de 3 y 5 sea igual a fizzbuzz', () => {
    const num = 15;
    const expected = fizzbuzz(num);
    const result = 'fizzbuzz';

    expect(expected).toBe(result);
  });
});
