import fs from 'fs';
import shortid from 'shortid';

const userDir = 'src/api/Users/db';

const names = [
    'Влада Смоляр',
    'Аня Басанко',
    'Аня Степанова',
    'Миша Кашпур',
    'Глеб Андроник',
    'Тимофей Бурак',
    'Илья Шнуренко',
    'Лена Козак',
    'Богдана Андроник',
    'Лиза Кожуховская',
    'Инга Бачинская',
    'Настя Алиева',
    'Настя Гуменюк',
    'Влада Андриевская',
    'Аня Борисенко',
    'Богдан Трянов',
    'Саша Бруй',
    'Даник Окишан',
    'Илья Сергиенко',
    'Моисей Сергиенко',
    'Богдан Зубок',
    'Давид Бутурлин'
];

(async () => {
    names.map((name) => {
        const [firstName, lastName] = name.split(' ');

        return {
            id: shortid.generate(),
            firstName,
            lastName,
            "gender": "male",
            "level": "junior",
            "team": "chernigov",
            "progress": {
                "amount": 0,
                "sprints": {
                    "s1": {
                        "amount": 0,
                        "t1": 0,
                        "t2": 0,
                        "t3": 0
                    }
                },
                "challenges": [
                    {
                        "id": "init-1",
                        "done": false,
                        "visible": true
                    },
                    {
                        "id": "init-2",
                        "done": false,
                        "visible": false
                    },
                    {
                        "id": "init-3",
                        "done": false,
                        "visible": false
                    }
                ],
                "pins": {}
            }
        }; // ("000"+number).slice(-4)
    }).forEach((item, idx) => {
        const fileName = `${userDir}/CH-${('0' + (idx+1)).slice(-2)}.json`;
        fs.writeFile(fileName, JSON.stringify(item));
    });
})().catch((error) => {
    console.error(error);
});