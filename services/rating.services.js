const { Reviews } = require('../models');

const reviewsServices = {
    post: async (datas, res) => {
        let { rating, description } = datas;

        try {
            await Reviews.create({
                rating, 
                description
            });

            res.status(201).json(Reviews);
        } catch(error) {
            res.status(500).json(error);
        }
    }
}

module.exports = reviewsServices;