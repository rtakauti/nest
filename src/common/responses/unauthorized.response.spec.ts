import { UnauthorizedResponse } from './unauthorized.response';

describe('UnauthorizedResponse', () => {
  it('should be defined', () => {
    expect(new UnauthorizedResponse()).toBeDefined();
  });
});
