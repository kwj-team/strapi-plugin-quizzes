/*
 *
 * HomePage
 *
 */

import React, { useEffect, memo, useCallback } from "react";

//I18n
import { useIntl } from "react-intl";
import getTrad from "../../utils/getTrad";

//Layout
import { ContentLayout, HeaderLayout } from "@strapi/design-system/Layout";
import { Typography, Box } from "@strapi/design-system";
import { Main } from "@strapi/design-system/Main";

import { request } from "@strapi/helper-plugin";

import { QuizPage } from "@kwj-team/react-quiz-components";
import QuizTable from "../../components/QuizTable";

const HomePage = () => {
  const { formatMessage, locale } = useIntl();
  const [quizzes, setQuizzes] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [quizPreview, setQuizPreview] = React.useState(null);

  const onSelect = useCallback(
    (quiz) => {
      if (quizPreview && quizPreview.id === quiz.id) {
        setQuizPreview(null);
        return;
      }

      getQuiz(quiz.id).then((quiz) => {
        setQuizPreview(quiz);
      });
    },
    [quizPreview]
  );

  useEffect(() => {
    setIsLoading(true);
    request("/quizzes/quizzes?publicationState=preview")
      .then((data) => {
        setQuizzes(data.data);
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setIsLoading(false);
      });
  }, []);

  return (
    <Main>
      <HeaderLayout
        id="title"
        title={formatMessage({ id: getTrad("plugin.homepage.title") })}
        subtitle={formatMessage({ id: getTrad("plugin.homepage.subtitle") })}
      />
      <ContentLayout>
        <QuizTable
          quizzes={quizzes}
          selected={quizPreview}
          onSelect={onSelect}
          isLoading={isLoading}
        />

        {quizPreview && (
          <Box padding={8}>
            <QuizPage
              quiz={quizPreview}
              userContext={{ attemptsTaken: 0 }}
              onFinish={() => setQuizPreview(null)}
            />
          </Box>
        )}
      </ContentLayout>
    </Main>
  );
};

export default memo(HomePage);

function getQuiz(id) {
  return request(
    `/quizzes/quizzes/${id}?populate=questions,questions.answers,questions.question`
  ).then((response) => ({
    ...response.data.attributes,
    id: response.data.id,
  }));
}
