const Cities = require("../../models/Cities")

const createCities = async() => {
    const citiesTest = [
        {
            "name": "San Felipe",
            "country": "Venezuela",
            "isCapital": false
        },
        {
            "name": "Caracas",
            "country": "Venezuela",
            "isCapital": true
        }
    ]

    await Cities.bulkCreate(citiesTest)
}

module.exports = createCities;