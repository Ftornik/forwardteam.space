import * as db from './db';

class Pins {
    static getById(pinId) {
        if (!db[pinId]) {
            return null;
        }

        return db[pinId];
    }

    static getAll({ type }) {
        return Object.keys(db[type]).map((k) => db[type][k]);
    }
}

export default Pins;
