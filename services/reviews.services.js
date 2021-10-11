const { Reviews, Brands, sequelize } = require("../models");

const reviewsServices = {
  ratingGet: async (id) => {
    let status = null;
    let error = null;
    let data = {};
    let review = await Reviews.findAll({
      include: {
        model: Brands[id],
        as: "Brands",
        required: true,
      },
    });
    try {
      if (review) {
        let { rating, description, userId } = review;
        data = {
          rating,
          description,
          userId,
          createdAt,
        };
      } else {
        status = 404;
        res.send("Nenhuma avaliação encontrada");
      }
    } catch (e) {
      status = 500;
      error = e;
    }

    return { data, status, error };
  },

  ratingPost: async (datas, res) => {
    let { rating, description } = datas;

    try {
      await Reviews.create({
        rating,
        description,
      });

      res.status(201).json("Avaliação enviada com sucesso!");
    } catch (error) {
      res.status(500).json(error);
    }
  },

  getAvg: async (req,res) => {
    let status = null;
    let error = null;
    let data = {};
    let review = await Reviews.findAll({
     subQuery: false,
      attributes: {
        include:[
          [sequelize.fn('AVG', sequelize.col('rating')), 'rating']
        ],
        where: {brandId:1}
      }
    });

    console.log(review.length)
    try {
      if (review && review.length !=0) {
        status = 200;
        /*let { rating, description, userId } = review;*/
        data = review;
      } else {
        status = 404;
        res.send("Nenhuma avaliação encontrada");
      }
    } catch (e) {
      status = 500;
      error = e;
    }

    return { data, status, error };
  },
};

module.exports = reviewsServices;
