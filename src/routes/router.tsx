import { createBrowserRouter } from "react-router";
import StartJourney from "../pages/StartJourney";
import Chapter from "../pages/LearnignZone/Index/Chapter";
import Subchapter from "../pages/LearnignZone/Subchapter/Subchapter";
import Deficulty from "../pages/LearnignZone/Deficulty/Deficulty";
import StartInterface from "../pages/LearnignZone/quiz/StartInterface";
import Quiz from "../pages/LearnignZone/quiz/quiz";
import Registration from "../pages/Registration/Registration";
import LoginGuard from "../components/HomeRedirect/HomeRedirect";
import App from "../App";
import About from "../pages/About/About";
import Profile from "../pages/Profile/Profile";
import AdminLayout from "../components/Admin/AdminLayout";
import Overview from "../pages/Admin/Overview";
import ManageChapters from "../pages/Admin/ManageChapters";
import ManageSubchapters from "../pages/Admin/ManageSubchapters";
import CreateContent from "../pages/Admin/CreateContent";
import ManageContent from "../pages/Admin/ManageContent";
import ManageTutorials from "../pages/Admin/ManageTutorials";
import CreateTutorial from "../pages/Admin/CreateTutorial";
import Section from "../pages/LearnignZone/LessionSection/Section";
import Tutorials from "../pages/Tutorials/Tutorials";


type QuizRouteData = {
  subChapterId: number;
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
    path: "/subchapters/:chapterId",
    element: <Subchapter />,
    loader: async ({ params }) => {
      const chapterIdParam = params.chapterId;
      if (!chapterIdParam) {
        throw new Response("Invalid chapter id", { status: 400 });
      }

      const chapterId = Number.parseInt(chapterIdParam, 10);
      if (Number.isNaN(chapterId)) {
        throw new Response("Invalid chapter id", { status: 400 });
      }

      const [chapterResponse, subchapterResponse] = await Promise.all([
        fetch('/chapter.json'),
        fetch('/subChapter.json'),
      ]);

      const chapters = await chapterResponse.json() as Array<{ id: number; title: string; image: string; borderColor: string; glowColor: string }>;
        const subchapters = await subchapterResponse.json() as Array<{ id: number; chapterId: number; order: number; title: string; image?: string }>;

        // determine which subchapters actually have section content
        const sectionsResponse = await fetch('/section.json');
        const sections = await sectionsResponse.json() as Array<{ subChapterId?: number }>;
        const availableSubchapterIds = Array.from(new Set(sections.map(s => s.subChapterId).filter((v): v is number => typeof v === 'number')));

      const chapter = chapters.find((item) => item.id === chapterId);
      if (!chapter) {
        throw new Response("Not Found", { status: 404 });
      }

      return {
        chapter,
        subchapters: subchapters
          .filter((item) => item.chapterId === chapterId)
          .sort((a, b) => a.order - b.order),
          availableSubchapterIds,
      };
    },
  },
  {
    path: "/lesson/:subchapterId?",
    element: <Section />,
  },
  {
    path: '/start-quiz/:subchapterId',
    element: <StartInterface />
  },
  {
    path: "/select-difficulty/:subchapterId",
    element: <Deficulty />
  },
  {
    path: "/quiz",
    element: <Quiz />,
    loader: async ({ request }) => {
      const url = new URL(request.url);
      const subchapterId = url.searchParams.get('subchapterId');
      const difficulty = url.searchParams.get('difficulty');
      const response = await fetch('/quiz.json');
      const quizData = await response.json() as QuizRouteData[];
      const filteredQuizData = quizData.filter((quiz) => {
        return (
          quiz.subChapterId === Number(subchapterId) &&
          quiz.difficulty === difficulty
        );
      });

      return filteredQuizData;
    }
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/tutorials",
    element: <Tutorials />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Overview />,
      },
      {
        path: "overview",
        element: <Overview />,
      },
      {
        path: "chapters",
        element: <ManageChapters />,
      },
      {
        path: "subchapters",
        element: <ManageSubchapters />,
      },
      {
        path: "content",
        element: <ManageContent />,
      },
      {
        path: "create-content",
        element: <CreateContent />,
      },
      {
        path: "tutorials",
        element: <ManageTutorials />,
      },
      {
        path: "create-tutorial",
        element: <CreateTutorial />,
      },
    ],
  }
]);

export default router;