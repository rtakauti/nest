import { ForbiddenResponse } from './forbidden.response';

describe('ForbiddenResponse', () => {
  it('should be defined', () => {
    expect(new ForbiddenResponse()).toBeDefined();
  });
});
