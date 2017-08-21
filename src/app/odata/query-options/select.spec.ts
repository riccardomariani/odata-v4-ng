import { Select } from './select';

describe('Select', () => {
  it('test toString', () => {
    expect(new Select(['first', 'second']).toString()).toEqual('first,second');
  });
});
