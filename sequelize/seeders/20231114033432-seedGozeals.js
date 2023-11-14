"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "gozeals",
      [
        {
          name: "Item 1",
          description: "This is item 1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Item 2",
          description: "This is item 2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Item 3",
          description: "This is item 3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("gozeals", null, {});
  },
};
