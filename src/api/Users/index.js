import * as db from './db';

export default class Users {
    static getById(userId) {
        for (const name of Object.keys(db)) {
            const user = db[name];
            if (user.id === userId) {
                return user;
            }
        }
    }
}
