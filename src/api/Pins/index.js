import * as db from './db';

class Pins {
    static getById(pinId) {
        if (!db[pinId]) {
            return null;
        }

        return db[pinId];
    }

    static getAll() {
        return Object.keys(db).map((k) => db[k]);
    }
}

export default Pins;
