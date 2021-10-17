const reviewsServices = require("../services/reviews.services");

const reviewsController = {
    media: async (req, res) => {
      try {
     
        const { data, status, error } = await reviewsServices.getAvg(req,res);
    
        error ? res.status(status).json(error) : res.status(status).json(data);
      } catch (e) {
        res.status(500).json(e);
      }
    },

    reviews: async (req, res) => {
      try {

         let {id}=req.params;
        const { data, status, error } = await reviewsServices.getAllRatings(id);
    
        error ? res.status(status).json(error) : res.status(status).json(data);
      } catch (e) {
        res.status(500).json(e);
      }
    },
    rating: async (req, res) => {
      try {

         let {body}=req.body;
        const { data, status, error } = await reviewsServices.ratingPost(body);
    
        error ? res.status(status).json(error) : res.status(status).json(data);
      } catch (e) {
        res.status(500).json(e);
      }
    },
}

module.exports = reviewsController