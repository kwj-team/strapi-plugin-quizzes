# Strapi plugin quizzes

A quick description of Strapi Plugin Quizzes.

It's a plugin that sets up basic structure for creating your own quizzes.

It has dynamic zone which let's you pick what type of question it will be:

- _Single Choice Question_
- _Multi Choice question_
- ... more to come

Plugin allows for low effort fully Strapi CMS managable Quizzes. Feel free to create your own variations of the components.

## Installing the plugin

To install the plugin in Strapi you need to type

```
npm install @kwj-team/strapi-plugin-quizzes --save
```

or

```
yarn add @kwj-team/strapi-plugin-quizzes
```

That's it 🎉, plugin will create content-type and components for you. Have fun with it! 😎

## Paired Components

We have prepared React Components ✨ that use MUI library and match the data that the plugin will provide.
You can customize the components as you would `@material/mui` library. Samples are available in the admin page of the plugin as well as on the storybook.

Components are available under `https://www.npmjs.com/package/@kwj-team/react-quiz-components`

You can add them to your react project using `npm i @kwj-team/react-quiz-components`

[Storybook](http://lms-strapi.kwjteam.com:6006/?path=/story/components-sections-quiz--default-quiz-page) for the components which allows you to preview how the quiz would look like.

## Contributing

Feel free to create issue in github, it's just starting up so there will be quite a few :)

## Roadmap

- Storing the results of quiz attempt in strapi
- More types of questions
- More flavours of matching components (styled-components or tailwind 🤔)
- Anonymous/Registered support - only authorized etc.
- ...

## Contact

Feel free to contact us on wojtek@kwjteam.com and klaudia@kwjteam.com also you can check out our page at [kwjteam.com](http://www.kwjteam.com)
