'use strict';

const _ = require("lodash");
const { loadComponents } = require("./components");

module.exports = async ({ strapi }) => {
  // bootstrap phase
  await loadComponents(strapi);
  await strapi.plugin('quizzes').service('quiz').initialize();
};
