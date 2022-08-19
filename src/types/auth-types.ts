export interface IAuthRepository {
    signup: (singupData: SignupData) => void;
}

export interface SignupData {
    email: string;
    password: string;
}