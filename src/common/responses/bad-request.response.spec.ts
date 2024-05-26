import { BadRequestResponse } from './bad-request.response';

describe('BadRequestResponse', () => {
  it('should be defined', () => {
    expect(new BadRequestResponse()).toBeDefined();
  });
});
