
const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = { quiz: createCoreRouter('plugin::quiz.quiz') };