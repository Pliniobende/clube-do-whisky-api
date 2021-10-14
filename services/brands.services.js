const { Categories } = require("../models");
const { Brands, Reviews } = require("../models");
const reviewsServices = require("./reviews.services");

const brandsServices = {
  getAll: async (id) => {
    let status = null;
    let error = null;
    let data = {};
    console.log(id)
    let brands = await Brands.findAll({
      where: {id},
      include: Reviews,
      require: true
    })


    try {
      if (brands && brands.length !=0) {
        status = 200;
        data=brands
        
      } else {
        status = 404;
        /*res.send("Nenhuma marca encontrada");*/
      }
    } catch (e) {
    
      status = 500;
      error = e;
      console.log(e)
    }
    
    return { data, status, error };
  },



  
  getOne: async (id) => {
    let data = {};
    let status = null;
    let error = null;
    let brand = await Brands.findOne({
      where: { id },
    });

    try {
      if (brand) {
        status = 200;
        let { image, description } = brand;
        data = {
          image,
          description,
        };
      } else {
        status = 404;
        res.send("Brand não encontrada");
      }
    } catch (e) {
      status = 500;
      error = e;
      console.log(error);
    }

    return { data, status, error };
  },
};

module.exports = brandsServices;