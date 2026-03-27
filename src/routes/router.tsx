import { createBrowserRouter } from "react-router";
import StartJourney from "../pages/StartJourney";
import Chapter from "../pages/LearnignZone/Index/Chapter";
import Deficulty from "../pages/LearnignZone/Deficulty/Deficulty";
import Section from "../pages/LearnignZone/LessionSection/Section";
import StartInterface from "../pages/LearnignZone/quiz/StartInterface";
import Quiz from "../pages/LearnignZone/quiz/quiz";
import Registration from "../pages/Registration/Registration";
import LoginGuard from "../components/HomeRedirect/HomeRedirect";
import App from "../App";

type SectionData = {
  chapterId: number;
};

type QuizRouteData = {
  chapterId: number;
  difficulty: string;
};

const router = createBrowserRouter([

  {
    path: "/",
    element:
      <LoginGuard>
        <App />
      </LoginGuard>
    ,
  },
  {
    path: "/start-journey",
    element: <StartJourney />,
  },
  {
    path: "/registration",
    element: <Registration />,
  },
  {
    path: "/learning-zone",
    element: <Chapter />
  },
  {
    path: "/lesson/:chapterId",
    element: <Section />,
    loader: async ({ params }) => {
      const chapterIdParam = params.chapterId;
      if (!chapterIdParam) {
        throw new Response("Invalid chapter id", { status: 400 });
      }

      const chapterId = Number.parseInt(chapterIdParam, 10);
      if (Number.isNaN(chapterId)) {
        throw new Response("Invalid chapter id", { status: 400 });
      }

      const response = await fetch('/section.json');
      const sections = await response.json() as SectionData[];
      const section = sections.filter((s) => s.chapterId === chapterId);
      if (!section) {
        throw new Response("Not Found", { status: 404 });
      }

      return section;
    }
  },
  {
    path: '/start-quiz/:chapterId',
    element: <StartInterface />
  },
  {
    path: "/select-difficulty/:chapterId",
    element: <Deficulty />
  },
  {
    path: "/quiz",
    element: <Quiz />,
    loader: async ({ request }) => {
      const url = new URL(request.url);
      const chapterId = url.searchParams.get('chapterId');
      const difficulty = url.searchParams.get('difficulty');
      const response = await fetch('/quiz.json');
      const quizData = await response.json() as QuizRouteData[];
      const filteredQuizData = quizData.filter((quiz) => {
        return (
          quiz.chapterId === Number(chapterId) &&
          quiz.difficulty === difficulty
        );
      });

      return filteredQuizData;
    }
  }
  //   {
  //     path: "/about",
  //     element: <About />,
  //   },
  //   {
  //     path: "/basicMap",
  //     element: <Index />,
  //   },
  //   {
  //     path: '/lesson/:id',
  //     element: <Lesson />
  //   }
]);

export default router;