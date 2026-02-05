export interface LoginData {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    yearAsFan: number;
}

export const initialLoginData: LoginData = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    yearAsFan: NaN,
};