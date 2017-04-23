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

    static getByTeam(teamId) {
        return Object.keys(db).map((key) => {
            return db[key];
        }).filter((user) => {
            return user.team === teamId;
        }).sort((user1, user2) => {
            if (user1.lastName < user2.lastName) {
                return -1;
            }
            if (user1.lastName > user2.lastName) {
                return 1;
            }

            return 0;
        });
    }
}
