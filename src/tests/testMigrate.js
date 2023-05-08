const sequelize = require('../utils/connection');
const createCities = require('./createData/data');

const main = async() => {
    try{
        await sequelize.sync({ force: true });
        await createCities()
        process.exit();
    } catch(error){
        console.log(error);
    }
}

main();