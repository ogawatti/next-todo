import * as jwt from 'jsonwebtoken';
import { headers } from 'next/headers';
import { TestUser } from './test-user';

type UserInfo = {
  sub?: string;
  name?: string;
  email?: string;
};

export const getUserInfo = (): UserInfo => {
    const xAmznOidcData = headers().get('x-amzn-oidc-data');

    if (!xAmznOidcData) return process.env.NODE_ENV !== 'production' ? TestUser : {};

    const token = JSON.parse(xAmznOidcData);
    if (!token) return process.env.NODE_ENV !== 'production' ? TestUser : {};

    const payload = jwt.decode(token);
    if (!payload || typeof payload === 'string')
      return process.env.NODE_ENV !== 'production' ? TestUser : {};

    return payload;
};
