"use strict";

const { createCoreService } = require("@strapi/strapi").factories;
const strapiQuiz = require("../examples/strapiQuiz.json");

module.exports = createCoreService("plugin::quizzes.quiz", ({ strapi }) => ({
  async initialize() {
    const quizCount = await strapi.query("plugin::quizzes.quiz").count();

    if (quizCount === 0) {
      try {
        await strapi.entityService.create("plugin::quizzes.quiz", {
          data: strapiQuiz,
        });
      } catch (e) {
        console.error(
          "Failed to initialize base data for Quizzes plugin with error: ",
          e
        );
      }
    }
  },
}));
