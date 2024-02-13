import { User } from '../user/userTypes';

export type LoginResponse = {
    user: User;
    token: string;
    // Include any other fields returned by your login API
};
