import { atom, selector } from 'recoil';
import User from '../Interfaces/UserInterface';

export const UserState = atom({
    key: "user",
    default: {} as User,
});

export const InfoValue = selector({
    key: "infoValue",
    get: ({ get }) => ({
        user: get(UserState)
    }),
});