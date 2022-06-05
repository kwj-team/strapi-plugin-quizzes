
const { nameToSlug } = require("@strapi/utils")
const { ApplicationError } = require('@strapi/utils').errors;

const answer = require('./kwj-quiz-components/answer.json')
const question = require('./kwj-quiz-components/question.json')
const singleChoice = require('./kwj-quiz-components/single-choice.json')
const multiChoice = require('./kwj-quiz-components/multi-choice.json')

// TODO: Read from directory name instead of hardcoding
const category = 'kwj-quiz-components'

module.exports = {

    /**
     * Load components
     * @param {import('@strapi/strapi').Strapi} strapi
     */
    async loadComponents(strapi) {
        let newlyCreated = 0;
        const components = await getComponents()
        const promises = components.map(async ({ component, components }) => {
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
    },

}

async function getComponents() {
    return [
        // TODO: Read from directory instead of hardcoding
        mapComponent(singleChoice, [answer, question]),
        mapComponent(multiChoice, [answer, question])
    ]
}

function mapComponent(component, components) {
    return {
        component: mapMainComponent(component), components: mapChildComponents(components),
    }
}

function mapChildComponents(components) {
    return components.map((component) => {
        return { ...mapMainComponent(component), tmpUID: `${nameToSlug(category)}.${nameToSlug(component.info.displayName)}` }
    })
}

function mapMainComponent(component) {
    return { ...component, ...component.info, category }
}
