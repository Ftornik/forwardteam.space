import * as db from './db';

class Sprints {
    static getById(sprintId) {
        if (!db[sprintId]) {
            return null;
        }

        return db[sprintId];
    }
}

export default Sprints;
