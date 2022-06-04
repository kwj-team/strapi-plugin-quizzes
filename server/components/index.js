
const { nameToSlug } = require("@strapi/utils")

const answer = require('./kwj-quiz-components/answer.json')
const question = require('./kwj-quiz-components/question.json')
const singleChoice = require('./kwj-quiz-components/single-choice-question.json')
const multiChoice = require('./kwj-quiz-components/multi-choice-question.json')

// TODO: Read from directory name instead of hardcoding
const category = 'kwj-quiz-components'

module.exports = {
    getComponents: async () => {
        return [
            // TODO: Read from directory instead of hardcoding
            mapComponent(singleChoice, [answer, question]),
            mapComponent(multiChoice, [answer, question])
        ]
    }
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
