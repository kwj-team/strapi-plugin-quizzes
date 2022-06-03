
const { nameToSlug } = require("@strapi/utils")

const answer = require('./kwj-components/answer.json')
const question = require('./kwj-components/question.json')
const singleChoice = require('./kwj-components/single-choice-question.json')
const multiChoice = require('./kwj-components/multi-choice-question.json')

const category = 'kwj-components'

module.exports = {
    getComponents: () => {
        return [{
            component: mapMainComponent(singleChoice), components: mapChildComponents([answer, question]),
        }, {
            component: mapMainComponent(multiChoice), components: mapChildComponents([answer, question]),
        }]
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
