import fs from 'fs-extra-promise';

const userDir = 'src/api/Users/db';

(async () => {
   const files = await fs.readdirAsync(userDir).filter((name) => {
       return name.includes('CH-');
   });

   files.map(async (name) => {
       const filePath = `${userDir}/${name}`;
       const user = JSON.parse(await fs.readFileAsync(filePath));

       const link = `https://my.forwardteam.space/id/${user.id}`;
       console.log(`${user.firstName} ${user.lastName}: ${link}`);
   });

})().catch((error) => {
    console.error(error);
});