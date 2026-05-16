import { createBrowserRouter } from "react-router";
import { lazy } from "react";
import LoginGuard from "../components/HomeRedirect/HomeRedirect";
import App from "../App";
import { SuspenseWrapper } from "./SuspenseWrapper";

// Lazy load page components
const StartJourney = lazy(() => import("../pages/StartJourney"));
const Chapter = lazy(() => import("../pages/LearnignZone/Index/Chapter"));
const Subchapter = lazy(() => import("../pages/LearnignZone/Subchapter/Subchapter"));
const Deficulty = lazy(() => import("../pages/LearnignZone/Deficulty/Deficulty"));
const StartInterface = lazy(() => import("../pages/LearnignZone/quiz/StartInterface"));
const Quiz = lazy(() => import("../pages/LearnignZone/quiz/quiz"));
const Registration = lazy(() => import("../pages/Registration/Registration"));
const About = lazy(() => import("../pages/About/About"));
const Profile = lazy(() => import("../pages/Profile/Profile"));
const AdminLayout = lazy(() => import("../components/Admin/AdminLayout"));
const Overview = lazy(() => import("../pages/Admin/Overview"));
const ManageChapters = lazy(() => import("../pages/Admin/ManageChapters"));
const ManageSubchapters = lazy(() => import("../pages/Admin/ManageSubchapters"));
const CreateContent = lazy(() => import("../pages/Admin/CreateContent"));
const ManageContent = lazy(() => import("../pages/Admin/ManageContent"));
const ManageTutorials = lazy(() => import("../pages/Admin/ManageTutorials"));
const CreateTutorial = lazy(() => import("../pages/Admin/CreateTutorial"));
const Section = lazy(() => import("../pages/LearnignZone/LessionSection/Section"));
const Tutorials = lazy(() => import("../pages/Tutorials/Tutorials"));


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
    element: <SuspenseWrapper><StartJourney /></SuspenseWrapper>,
  },
  {
    path: "/registration",
    element: <SuspenseWrapper><Registration /></SuspenseWrapper>,
  },
  {
    path: "/learning-zone",
    element: <SuspenseWrapper><Chapter /></SuspenseWrapper>
  },
  {
    path: "/subchapters/:chapterId",
    element: <SuspenseWrapper><Subchapter /></SuspenseWrapper>,
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
    element: <SuspenseWrapper><Section /></SuspenseWrapper>,
  },
  {
    path: '/start-quiz/:subchapterId',
    element: <SuspenseWrapper><StartInterface /></SuspenseWrapper>
  },
  {
    path: "/select-difficulty/:subchapterId",
    element: <SuspenseWrapper><Deficulty /></SuspenseWrapper>
  },
  {
    path: "/quiz",
    element: <SuspenseWrapper><Quiz /></SuspenseWrapper>,
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
    element: <SuspenseWrapper><About /></SuspenseWrapper>,
  },
  {
    path: "/tutorials",
    element: <SuspenseWrapper><Tutorials /></SuspenseWrapper>,
  },
  {
    path: "/profile",
    element: <SuspenseWrapper><Profile /></SuspenseWrapper>,
  },
  {
    path: "/admin",
    element: <SuspenseWrapper><AdminLayout /></SuspenseWrapper>,
    children: [
      {
        index: true,
        element: <SuspenseWrapper><Overview /></SuspenseWrapper>,
      },
      {
        path: "overview",
        element: <SuspenseWrapper><Overview /></SuspenseWrapper>,
      },
      {
        path: "chapters",
        element: <SuspenseWrapper><ManageChapters /></SuspenseWrapper>,
      },
      {
        path: "subchapters",
        element: <SuspenseWrapper><ManageSubchapters /></SuspenseWrapper>,
      },
      {
        path: "content",
        element: <SuspenseWrapper><ManageContent /></SuspenseWrapper>,
      },
      {
        path: "create-content",
        element: <SuspenseWrapper><CreateContent /></SuspenseWrapper>,
      },
      {
        path: "tutorials",
        element: <SuspenseWrapper><ManageTutorials /></SuspenseWrapper>,
      },
      {
        path: "create-tutorial",
        element: <SuspenseWrapper><CreateTutorial /></SuspenseWrapper>,
      },
    ],
  }
]);

export default router;