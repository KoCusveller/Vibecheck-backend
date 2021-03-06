"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("cities", [
      {
        name: "Tokyo",
        imgUrl:
          "https://www.visasjapan.com/wp-content/uploads/sites/37/2019/03/traveling-to-tokyo.jpg",
        vidUrl: "https://www.youtube.com/watch?v=i3powwL7bT0",
        songUrl: "https://www.youtube.com/watch?v=5qap5aO4i9A",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Seoul",
        imgUrl: "https://imgur.com/a/X8z1sCu",
        vidUrl: "https://www.youtube.com/watch?v=I0B21LjeSUQ",
        songUrl: "https://www.youtube.com/watch?v=WBfbkPTqUtU",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "New York",
        imgUrl:
          "https://www.lastminutevakantievergelijk.nl/wp-content/uploads/2019/05/new-york.jpg",
        vidUrl: "https://www.youtube.com/watch?v=-IpXdtWfneI",
        songUrl: "https://www.youtube.com/watch?v=P7Z9QaBjmkU",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Paris",
        imgUrl:
          "https://cdn.turkishairlines.com/m/536e8df8c381e006/original/Travel-Guide-of-Paris-via-Turkish-Airlines.jpg",
        vidUrl: "https://www.youtube.com/watch?v=yc2zOWit2NQ",
        songUrl: "https://www.youtube.com/watch?v=5yx6BWlEVcY",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Hong Kong",
        imgUrl:
          "https://www.dhlexpress.nl/sites/default/files/styles/header_image_desktop/public/hong_kong_douane_informatie_dhl_express.jpg?itok=GOvrMGKZ&timestamp=1578307276",
        vidUrl: "https://www.youtube.com/watch?v=oAkCZbmFsU4",
        songUrl: "https://www.youtube.com/watch?v=-5KAN9_CzSA",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Los Angeles",
        imgUrl:
          "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/475000/475457-Los-Angeles.jpg",
        vidUrl: "https://www.youtube.com/watch?v=25VUH95sMco",
        songUrl: "https://www.youtube.com/watch?v=-5KAN9_CzSA",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("cities", null, {});
  },
};
