import {db} from '../db/Postgres.ts';
import IUser from '../entities/IUser.ts';

export class UserModel {
    /**
     * @description get all users
     * @return users
     */
    static async getUsers() {
        const result = await db.query('SELECT * FROM users ORDER BY id');
        return result.rowsOfObjects();
    }

    /**
     *
     * @param user
     * @description create user
     * @return user
     */
    static async createUser(user: IUser): Promise<IUser> {
        const result = await db.query(
            'insert into users (name, surname, email, password) values ($1, $2, $3, $4) returning name',
            user.name,
            user.surname
        );
        console.log('user from createUser: ', result.rowsOfObjects()[0]);
        return result.rowsOfObjects()[0] as IUser;
    }

    /**
     *
     * @param column
     * @param value
     * @description return user
     * @return user
     */
    static async findBy(column: string, value: string | number
    ): Promise<IUser | null> {
        const result = await db.query(
            `select * from users where ${column} = $1`,
            value
        );
        if (!result) return null;
        return result.rowsOfObjects()[0] as IUser;
    }

    /**
     *
     * @param id
     * @description return user by id
     * @return user
     */
    static async findById(id: string): Promise<Omit<IUser, 'password'> | null> {
        const user = await this.findBy('id', id);
        return user;
    }

    /**
     *
     * @param email
     * @description return user by email
     * @return user
     */
    static async findByEmail(
        email: string
    ): Promise<Omit<IUser, 'password'> | null> {
        const user = await this.findBy('email', email);
        return user;
    }
}
