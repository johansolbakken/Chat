import { MockUserApi } from "./MockUserApi";

export interface UserApiImplementor {
    signup: (username: string, password: string) => Promise<boolean>;
    login: (username: string, password: string) => Promise<boolean>;
}

export enum ApiBackend {
    Mock
}

export class UserApi {

    impl: UserApiImplementor;

    constructor(backend: ApiBackend = ApiBackend.Mock) {
        switch (backend) {
            case ApiBackend.Mock:
            default:
                {
                    this.impl = new MockUserApi();
                    break;
                }
        }
    }

    signup = (username: string, password: string) => {
        return this.impl.signup(username, password);
    }

    login = (username: string, password: string) => {
        return this.impl.login(username, password);
    }

}