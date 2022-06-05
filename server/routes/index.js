module.exports = {
  "quiz-admin": {
    type: "admin",
    routes: [
      {
        method: "GET",
        path: "/quizzes",
        handler: "quiz.find",
      },
      {
        method: "GET",
        path: "/quizzes/:id",
        handler: "quiz.findOne",
      },
    ],
  },
  quiz: {
    type: "content-api",
    routes: [
      {
        method: "GET",
        path: "/",
        handler: "quiz.find",
      },
      {
        method: "GET",
        path: "/:id",
        handler: "quiz.findOne",
      },
      {
        method: "POST",
        path: "/",
        handler: "quiz.create",
      },
      {
        method: "PUT",
        path: "/:id",
        handler: "quiz.update",
      },
      {
        method: "DELETE",
        path: "/:id",
        handler: "quiz.delete",
      },
    ],
  },
};
