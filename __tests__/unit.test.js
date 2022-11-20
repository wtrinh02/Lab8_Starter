// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');
const { isPhoneNumber, isEmail, isStrongPassword, isDate, isHexColor } = functions;

/** isPhoneNumber() tests */

// True match
test('matches a valid phone number', () => {
    expect(isPhoneNumber('(123) 456-7890')).toBe(true);
  })
  
  // True match
  test('matches a valid phone number', () => {
    expect(isPhoneNumber('098-765-4321')).toBe(true);
  })
  
  // False match
  test('doesn\'t match, a non-phone number', () => {
    expect(isPhoneNumber('qwertyuiop')).toBe(false);
  })
  
  // False match
  test('doesn\'t match, phone number unsplit', () => {
    expect(isPhoneNumber('4155218666')).toBe(false);
  })
  
  /** isEmail() tests */
  
  // True match
  test('matches gmail', () => {
    expect(isEmail('yelsew02@gmail.com')).toBe(true);
  })
  
  // True match
  test('matches ucsd email', () => {
    expect(isEmail('wtrinh@ucsd.edu')).toBe(true);
  })
  
  // False match
  test('does not match email format', () => {
    expect(isEmail('wtrinh123.com')).toBe(false);
  })
  
  // False match
  test('does not match email format 2', () => {
    expect(isEmail('test email dot com')).toBe(false);
  })
  
  /** isStrongPassword() tests */
  
  // True match
  test('matches a strong password', () => {
    expect(isStrongPassword('testPassword123')).toBe(true);
  })
  
  // True match
  test('matches a strong password 2', () => {
    expect(isStrongPassword('abkbgbkbwe_j12')).toBe(true);
  })
  
  // False match
  test('does not match, password too short', () => {
    expect(isStrongPassword('abc')).toBe(false);
  })
  
  // False match
  test('does not match, an invalid password', () => {
    expect(isStrongPassword('123')).toBe(false);
  })
  
  /** isDate() tests */
  
  // True match
  test('matches a date', () => {
    expect(isDate('03/25/2002')).toBe(true);
  })
  
  // True match
  test('matches date 2', () => {
    expect(isDate('11/19/2022')).toBe(true);
  })
  
  // False match
  test('does not match, wrong date format', () => {
    expect(isDate('123/123/12345')).toBe(false);
  })
  
  // False match
  test('does not match, wrong date format 2', () => {
    expect(isDate('March 25, 2002')).toBe(false);
  })
  
  /** isHexColor() tests */
  
  // True match
  test('matches a 6 digit hexcolor', () => {
    expect(isHexColor('AAAAAA')).toBe(true);
  })
  
  // True match
  test('matches a 3 digit hexcolor', () => {
    expect(isHexColor('#AAA')).toBe(true);
  })
  
  // False match
  test('does not matchl, not a hexcolor', () => {
    expect(isHexColor('1234567')).toBe(false);
  })
  
  // False match
  test('does not match, too short', () => {
    expect(isHexColor('12')).toBe(false);
  })