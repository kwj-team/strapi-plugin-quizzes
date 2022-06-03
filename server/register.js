'use strict';

const { ApplicationError } = require('@strapi/utils').errors;
const { getComponents } = require("./components");

module.exports = ({ strapi }) => {
  // registeration phase
  getComponents().forEach(async ({ component, components }) => {
    try {
      await strapi.plugin('content-type-builder').services.components.createComponent({
        component,
        components
      });
    } catch (e) {
      if (e instanceof ApplicationError) {
        if (e.message === "component.alreadyExists") {
          return
        }
      }

      throw e
    }
  });
}