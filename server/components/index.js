
const answer = require('./kwj-components/answer.json')
const question = require('./kwj-components/question.json')
const singleChoice = require('./kwj-components/single-choice-question.json')
const multiChoice = require('./kwj-components/multi-choice-question.json')

module.exports = {
    getComponents: () => {
        return mapComponentToFormat([answer, question, multiChoice, singleChoice], 'kwj-components')
    }
}

function mapComponentToFormat(components, category) {
    return components.map((component) => {
        return { component: { ...component, ...component.info, category } }
    })
}