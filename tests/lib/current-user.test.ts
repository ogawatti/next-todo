import { currentUser } from "@/lib/current-user";
import { TestUser } from "@/lib/test-user";
import { prismaMock } from "../singleton";

const getUserInfo = jest.fn();
jest.mock('../../src/lib/user-info', () => ({ getUserInfo: () => getUserInfo() }));

describe('CurrentUser', () => {
  afterEach(() => { jest.clearAllMocks() });

  describe('currentUser', () => {
    describe('when user info can get', () => {
      describe('and the user exists in the database', () => {
        describe('and the user info is different from the database', () => {
          const foundUser = { ...TestUser, name: 'found', createdAt: new Date(), updatedAt: new Date() };
          const updatedUser = { ...foundUser, name: 'updated', updatedAt: new Date() };

          beforeEach(() => {
            getUserInfo.mockReturnValue(TestUser);
            prismaMock.user.findUnique.mockResolvedValue(foundUser);
            prismaMock.user.update.mockResolvedValue(updatedUser);
          });

          it('updates the user', async () => {
            const result = await currentUser();

            expect(result).toEqual(updatedUser)
            expect(prismaMock.user.findUnique).toHaveBeenCalledTimes(1);
            expect(prismaMock.user.update).toHaveBeenCalledTimes(1);
            expect(prismaMock.user.create).not.toHaveBeenCalled();
          });
        });

        describe('and the user info is not different from the database', () => {
          const foundUser = { ...TestUser, createdAt: new Date(), updatedAt: new Date() };

          beforeEach(() => {
            getUserInfo.mockReturnValue(TestUser);
            prismaMock.user.findUnique.mockResolvedValue(foundUser);
          });

          it('updates the user', async () => {
            const result = await currentUser();

            expect(result).toEqual(foundUser)
            expect(prismaMock.user.findUnique).toHaveBeenCalledTimes(1);
            expect(prismaMock.user.update).not.toHaveBeenCalled();
            expect(prismaMock.user.create).not.toHaveBeenCalled();
          });
        });
      });

      describe('and the user does not exist in the database', () => {
        const createdUser = { ...TestUser, createdAt: new Date(), updatedAt: new Date() };

        beforeEach(() => {
          getUserInfo.mockReturnValue(TestUser);
          prismaMock.user.findUnique.mockResolvedValue(null);
          prismaMock.user.create.mockResolvedValue(createdUser);
        });

        it('updates the user', async () => {
          const result = await currentUser();

          expect(result).toEqual(createdUser);
          expect(prismaMock.user.findUnique).toHaveBeenCalledTimes(1);
          expect(prismaMock.user.update).not.toHaveBeenCalled();
          expect(prismaMock.user.create).toHaveBeenCalledTimes(1);
        });
      });
    });

    describe('when user info can not get', () => {
      beforeEach(() => {
        getUserInfo.mockReturnValue({});
      });

      it('throws an error', async () => {
        await expect(currentUser).rejects.toThrow('Invalid user info');
      });
    });
  });
});
