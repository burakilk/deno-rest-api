import UserRepository from '../repositories/UserRepository.ts';
import IUser from '../entities/IUser.ts';

class UserService {
    constructor() {
    }

    readonly userRepository = new UserRepository();

    /**
     *
     */
    getUsers = async () => {
        return await this.userRepository.getUsers();
    };

    /**
     *
     * @param user
     */
    createUser = async (user: IUser) => {
        return await this.userRepository.createUser(user);
    };

    /**
     *
     * @param column
     * @param value
     */
    getUser = async (column: string, value: any) => {
        return await this.userRepository.getUser(column, value);
    };
}

export default UserService;