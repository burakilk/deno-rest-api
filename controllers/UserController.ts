import {RouterContext} from 'https://deno.land/x/oak/mod.ts';
import UserService from '../services/UserService.ts';

/* Service */
const userService = new UserService();

/**
 *
 * @param context
 * @description get all users
 */
export const getUsers = async (context: RouterContext) => {
    context.response.status = 200;
    context.response.body = {
        success: true,
        data: await userService.getUsers(),
    };
};

/**
 *
 * @param context
 */
export const getUser = async (context: RouterContext) => {
    const {params, response} = context;
    const {id} = params;

    if (!id) {
        response.status = 400;
        response.body = {success: false, msg: 'Invalid User ID'};
        return;
    }

    const user = await userService.getUser('id', id);

    if (!user) {
        response.status = 404;
        response.body = {success: false, msg: `User with ID ${id} not found`};
        return;
    }

    response.status = 200;
    response.body = {
        success: true,
        data: user,
    };
}

/**
 *
 * @param context
 * @description create user
 * @return
 */
export const createUser = async (context: RouterContext) => {
    const {request, response} = context;

    if (!request.hasBody) {
        response.status = 400;
        response.body = {msg: 'Invalid users data'};
        return;
    }

    const {value: {id, userId, name, surname, email, password}} = await request.body();

    const uniqueId = await userService.createUser(
        {
            id,
            userId,
            name,
            surname,
            email,
            password
        },
    );

    response.body = {msg: 'User Created', uniqueId};
};