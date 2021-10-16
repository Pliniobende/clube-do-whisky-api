'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
 
     await queryInterface.bulkInsert('Categories', [{
        name: 'Bourbon',
        description: 'O bourbon é um whiskey americano feito de grãos maltados, dos quais no mínimo 51% da composição é milho.As regras que regem o bourbon são menos rígidas que as do Escocês, porém ele deve ser totalmente fabricado nos Estados Unidos para ser qualificado como Bourbon.',
        detail: 1
      },
      {
        name: 'Straight Bourbon',
        description: 'Esse é um bourbon de um estado Americano, Kentucky por exemplo, que foi envelhecido por no mínimo 2 anos e não contém aditivos, tais como sabores ou corantes.',
        detail: 2
      },
      {
        name: 'Rye',
        description: 'O rye é fabricado especialmente na América do Norte. Nos Estados Unidos, ele deve ser fermentado a partir de uma mistura de grãos maltados que contenha pelo menos 51% de centeio.As regras sobre o rye canadense são bem menos rígidas e a bebida pode conter muito menos do que 51% de centeio.',
        detail: 3
      },
      {
        name: 'Whiskey Escocês',
        description: 'Também conhecido como Scotch, são produzidos apenas na Escócia. O termo Scotch é protegido por legislação e só pode ser usado para bebidas produzidas no país, assim como a cachaça no Brasil.',
        detail: 4
      }      
    ], {});
  
  },

  down: async (queryInterface, Sequelize) => {
  
      await queryInterface.bulkDelete('Categories', null, {});
     
  }
};
