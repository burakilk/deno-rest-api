import IUser from '../entities/IUser.ts';
import {UserModel} from '../model/UserModel.ts';

class UserRepository {
    constructor() {
    }

    readonly userCollection = UserModel;

    /**
     *
     */
    async getUsers() {
        const users = await this.userCollection.getUsers();
        return users;
    }

    /**
     *
     * @param user
     * @description create user
     * @return user
     */
    async createUser(user: IUser) {
        return await this.userCollection.createUser(user);
    }

    /**
     *
     * @param column
     * @param value
     * @description create user
     * @return user
     */
    async getUser(column: string, value: any) {
        return await this.userCollection.findBy(column, value);
    }
}

export default UserRepository;