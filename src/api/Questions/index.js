import db from './db';

class Questions {
    static getById(id) {
        const item = db.find((el) => {
            return el.id === id;
        });

        if (!item) {
            return null;
        }

        return item;
    }

    static getAll() {
        return db;
    }
}

export default Questions;
