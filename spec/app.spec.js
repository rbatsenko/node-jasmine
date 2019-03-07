const Add = require('../app');

describe('Add functionality', () => {
  it('calculate x + y = z', () => {
    expect(Add(5, 10)).toBe(15);
  });
});