import * as db from './db';

export default class Teams {
    static getById(id) {
        if (!db[id]) {
            return null;
        }

        return db[id];
    }
}
