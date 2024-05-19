import * as jwt from 'jsonwebtoken';
import { headers } from 'next/headers';

const TEST_USER_INFO = {
  sub: '1234567890',
  name: 'testuser',
  email: 'test@example.com'
}

type UserInfo = {
  sub?: string;
  name?: string;
  email?: string;
};

export const getUserInfo = (): UserInfo => {
    const xAmznOidcData = headers().get('x-amzn-oidc-data');

    if (!xAmznOidcData) return process.env.NODE_ENV !== 'production' ? TEST_USER_INFO : {};

    const token = JSON.parse(xAmznOidcData);
    if (!token) return process.env.NODE_ENV !== 'production' ? TEST_USER_INFO : {};

    const payload = jwt.decode(token);
    if (!payload || typeof payload === 'string')
      return process.env.NODE_ENV !== 'production' ? TEST_USER_INFO : {};

    return payload;
};
