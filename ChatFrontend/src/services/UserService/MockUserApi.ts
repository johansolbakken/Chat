import { UserApiImplementor } from "./UserApi";

export class MockUserApi implements UserApiImplementor {
    signup = (username: string, password: string) => {
        return new Promise<boolean>((resolve) => {
            resolve(true);
        })
    }
    login = (username: string, password: string) => {
        return new Promise<boolean>((resolve) => {
            resolve(true);
        })
    }
}