import * as jwt from 'jsonwebtoken';
import { UserInfo, getUserInfo } from "@/lib/user-info";
import { TestUser } from '@/lib/test-user';

const headers = jest.fn();
jest.mock('next/headers', () => ({ headers: () => headers() }));

describe('UserInfo', () => {
  const userInfo: UserInfo = { sub: 'testsub', name: 'test', email: 'test@example.com' };
  const secret = 'test secret';

  afterEach(() => { jest.clearAllMocks() });

  describe('getUserInfo', () => {
    describe('when headers has "x-amzn-oidc-data"', () => {
      describe('and it is a valid jwt', () => {
        const xAmznOidcData = jwt.sign(userInfo, secret);

        beforeEach(() => {
          headers.mockReturnValue({
            get: jest.fn().mockReturnValue(xAmznOidcData),
          });
        });

        it('returns the decoded jwt', () => {
          const result = getUserInfo();

          expect(result).toEqual(expect.objectContaining(userInfo));
        });
      });

      describe('and it is an invalid jwt', () => {
        const xAmznOidcData = "";

        beforeEach(() => {
          headers.mockReturnValue({
            get: jest.fn().mockReturnValue(xAmznOidcData),
          });
        });

        it('returns TestUser', () => {
          const result = getUserInfo();

          expect(result).toEqual(expect.objectContaining(TestUser));
        });
      });
    });

    describe('when headers does not have "x-amzn-oidc-data"', () => {
      beforeEach(() => {
        headers.mockReturnValue({
          get: jest.fn().mockReturnValue(null),
        });
      });

      it('returns TestUser', () => {
        const result = getUserInfo();

        expect(result).toEqual(expect.objectContaining(TestUser));
      });
    });
  });
});
