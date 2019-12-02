export interface IUser {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    isDoctor: boolean;
    choiceDoctor: string;
    id: number;
    specialty?: string;
    history: IVacina[];
}

export interface IDoctor {
    id: number;
    specialty: string;
    patients: number[];
    firstName: string;
    lastName: string;
}

export interface IVacina {
    name: string;
    exist: boolean;
    date: null | Date;
}
