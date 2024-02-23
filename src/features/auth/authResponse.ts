export type LoginResponse = {
    user: {
        id: string;
        name: string;
        email: string;
    };
    tokens: {
        accessToken: string;
        refreshToken: string;
    };
};
