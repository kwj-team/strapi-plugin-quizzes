'use strict';
const quizSchema = require('./quiz/schema.json')

module.exports = {
    [quizSchema.info.singularName]: { schema: quizSchema }
};
