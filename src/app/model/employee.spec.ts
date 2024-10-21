import { Employee } from './employee';

describe('Employee', () => {
  it('should create an instance', () => {
    expect(new Employee("andrew", '03-17-2004', "London", 1000)).toBeTruthy();
  });
});
