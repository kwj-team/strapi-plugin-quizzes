'use strict';

module.exports = {
  index(ctx) {
    ctx.body = strapi
      .plugin('kwj-quiz-components')
      .service('myService')
      .getWelcomeMessage();
  },
};
