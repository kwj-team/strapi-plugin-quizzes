'use strict';

const _ = require("lodash");
const { ApplicationError } = require('@strapi/utils').errors;
const { getComponents } = require("./components");

module.exports = async ({ strapi }) => {
  // bootstrap phase
  await loadComponents(strapi);
};

/**
 * Load components
 * @param {import('@strapi/strapi').Strapi} strapi
 */
async function loadComponents(strapi) {
  let newlyCreated = 0;

  const promises = getComponents().map(async ({ component, components }) => {
    try {
      await strapi.plugin('content-type-builder').services.components.createComponent({
        component,
        components
      });
      newlyCreated++;
    } catch (e) {
      if (e instanceof ApplicationError) {
        if (e.message === "component.alreadyExists") {
          return;
        }
      }

      throw e;
    }
  });

  await Promise.all(promises);

  if (newlyCreated > 0) {
    strapi.reload.isReloading = true;
    strapi.reload();
    // TODO: More reliable way to wait for reload
    await new Promise((resolve) => setTimeout(() => resolve(), 100));
  }
}

