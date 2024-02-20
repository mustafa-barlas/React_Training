export interface IUsers {
    users: IUser[];
    total: number;
    skip: number;
    limit: number;
}

export interface IUser {
    id: number;
    firstName: string;
    lastName: string;
    maidenName: string;
    age: number;
    email: string;
    phone: string;
    username: string;
    password: string;
    birthDate: Date;
    image: string;
    bloodGroup: string;
    height: number;
    weight: number;
    domain: string;
    ip: string;
    macAddress: string;
    university: string;
}