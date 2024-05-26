import { InternalServerErrorResponse } from './internal-server-error.response';

describe('InternalServerErrorResponse', () => {
  it('should be defined', () => {
    expect(new InternalServerErrorResponse()).toBeDefined();
  });
});
