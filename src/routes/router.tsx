import { createBrowserRouter, redirect } from "react-router";
import { lazy } from "react";
import LoginGuard from "../components/HomeRedirect/HomeRedirect";
import App from "../App";
import { SuspenseWrapper } from "./SuspenseWrapper";
import { getStoredLocale } from "../utils/language";

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
const AdminLayout = lazy(() => import("../components/banglaVersion/Admin/AdminLayout"));
const Overview = lazy(() => import("../pages/Admin/Overview"));
const ManageChapters = lazy(() => import("../pages/Admin/ManageChapters"));
const ManageSubchapters = lazy(() => import("../pages/Admin/ManageSubchapters"));
const CreateContent = lazy(() => import("../pages/Admin/CreateContent"));
const ManageContent = lazy(() => import("../pages/Admin/ManageContent"));
const ManageTutorials = lazy(() => import("../pages/Admin/ManageTutorials"));
const CreateTutorial = lazy(() => import("../pages/Admin/CreateTutorial"));
const Section = lazy(() => import("../pages/LearnignZone/LessionSection/Section"));
const Tutorials = lazy(() => import("../pages/Tutorials/Tutorials"));
const EnglishHome = lazy(() => import("../pages/EnglishVersion/Home"));
const EnglishAbout = lazy(() => import("../pages/EnglishVersion/About/About"));
const EnglishStartJourney = lazy(() => import("../pages/EnglishVersion/StartJourney/StartJourney"));
const EnglishChapter = lazy(() => import("../pages/EnglishVersion/Chapter/Chapter"));
const EnglishSubchapter = lazy(() => import("../pages/EnglishVersion/Subchapter/Subchapter"));
const EnglishStartInterface = lazy(() => import("../pages/EnglishVersion/QuizStartInterface/StartInterface"));
const EnglishQuizDeficultyLevel = lazy(()=>import("../pages/EnglishVersion/Deficulty/Deficulty"))
const EnglishProfile = lazy(() => import("../pages/EnglishVersion/Profile/Profile"));

type QuizRouteData = {
  subChapterId: number;
  difficulty: string;
};

function redirectToStoredLocale(requestUrl: string, bnPath: string, enPath: string) {
  const storedLocale = getStoredLocale();
  const url = new URL(requestUrl);
  const pathname = url.pathname;

  const matchesBnPath = pathname === bnPath || (bnPath !== "/" && pathname.startsWith(`${bnPath}/`));
  const matchesEnPath = pathname === enPath || (enPath !== "/" && pathname.startsWith(`${enPath}/`));

  if (!matchesBnPath && !matchesEnPath) {
    return null;
  }

  const currentBase = matchesEnPath ? enPath : bnPath;
  const targetBase = storedLocale === "en" ? enPath : bnPath;
  const suffix = pathname.slice(currentBase.length);

  if (targetBase === currentBase) {
    return null;
  }

  return redirect(`${targetBase}${suffix}${url.search}`);
}

const router = createBrowserRouter([

  {
    path: "/",
    element:
      <LoginGuard>
        <App />
      </LoginGuard>
    ,
    loader: () => {
      if (getStoredLocale() === "en") {
        return redirect("/en");
      }

      return null;
    },
  },
  {
    path: "/en",
    element:
      <LoginGuard>
        <SuspenseWrapper><EnglishHome /></SuspenseWrapper>
      </LoginGuard>
    ,
    loader: () => {
      if (getStoredLocale() === "bn") {
        return redirect("/");
      }

      return null;
    },
  },
  {
    path: "/start-journey",
    element: <SuspenseWrapper><StartJourney /></SuspenseWrapper>,
    loader: ({ request }) => redirectToStoredLocale(request.url, "/start-journey", "/en/start-journey"),
  },
  {
    path: "/en/start-journey",
    element: <SuspenseWrapper><EnglishStartJourney /></SuspenseWrapper>,
    loader: ({ request }) => redirectToStoredLocale(request.url, "/start-journey", "/en/start-journey"),
  },
  {
    path: "/registration",
    element: <SuspenseWrapper><Registration /></SuspenseWrapper>,
    loader: ({ request }) => redirectToStoredLocale(request.url, "/registration", "/en/registration"),
  },
  {
    path: "/en/registration",
    element: <SuspenseWrapper><Registration /></SuspenseWrapper>,
    loader: ({ request }) => redirectToStoredLocale(request.url, "/registration", "/en/registration"),
  },
  {
    path: "/learning-zone",
    element: <SuspenseWrapper><Chapter /></SuspenseWrapper>
    ,loader: ({ request }) => redirectToStoredLocale(request.url, "/learning-zone", "/en/learning-zone"),
  },
  {
    path: "/en/learning-zone",
    element: <SuspenseWrapper><EnglishChapter /></SuspenseWrapper>
    ,loader: ({ request }) => redirectToStoredLocale(request.url, "/learning-zone", "/en/learning-zone"),
  },
  {
    path: "/subchapters/:chapterId",
    element: <SuspenseWrapper><Subchapter /></SuspenseWrapper>,
    loader: async ({ request, params }) => {
      const localeRedirect = redirectToStoredLocale(request.url, "/subchapters", "/en/subchapters");
      if (localeRedirect) return localeRedirect;

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

      const chapter = chapters.find((item) => item.id === chapterId);
      if (!chapter) {
        throw new Response("Not Found", { status: 404 });
      }

      return {
        chapter,
        subchapters: subchapters
          .filter((item) => item.chapterId === chapterId)
          .sort((a, b) => a.order - b.order),
      };
    },
  },
  {
    path: "/en/subchapters/:chapterId",
    element: <SuspenseWrapper><EnglishSubchapter /></SuspenseWrapper>,
    loader: async ({ request, params }) => {
      const localeRedirect = redirectToStoredLocale(request.url, "/subchapters", "/en/subchapters");
      if (localeRedirect) return localeRedirect;

      const chapterIdParam = params.chapterId;
      if (!chapterIdParam) {
        throw new Response("Invalid chapter id", { status: 400 });
      }

      const chapterId = Number.parseInt(chapterIdParam, 10);
      if (Number.isNaN(chapterId)) {
        throw new Response("Invalid chapter id", { status: 400 });
      }

      const [chapterResponse, subchapterResponse] = await Promise.all([
        fetch('/chapter.en.json'),
        fetch('/subChapter.en.json'),
      ]);

      const chapters = await chapterResponse.json() as Array<{ id: number; title: string; image: string; borderColor: string; glowColor: string }>;
        const subchapters = await subchapterResponse.json() as Array<{ id: number; chapterId: number; order: number; title: string; image?: string }>;

      const chapter = chapters.find((item) => item.id === chapterId);
      if (!chapter) {
        throw new Response("Not Found", { status: 404 });
      }

      return {
        chapter,
        subchapters: subchapters
          .filter((item) => item.chapterId === chapterId)
          .sort((a, b) => a.order - b.order),
      };
    },
  },
  {
    path: "/lesson/:subchapterId?",
    element: <SuspenseWrapper><Section /></SuspenseWrapper>,
    loader: ({ request }) => redirectToStoredLocale(request.url, "/lesson", "/en/lesson"),
  },
  {
    path: "/en/lesson/:subchapterId?",
    element: <SuspenseWrapper><Section /></SuspenseWrapper>,
    loader: ({ request }) => redirectToStoredLocale(request.url, "/lesson", "/en/lesson"),
  },
  {
    path: '/start-quiz/:subchapterId',
    element: <SuspenseWrapper><StartInterface /></SuspenseWrapper>
    ,loader: ({ request }) => redirectToStoredLocale(request.url, "/start-quiz", "/en/start-quiz"),
  },
  {
    path: '/en/start-quiz/:subchapterId',
    element: <SuspenseWrapper><EnglishStartInterface /></SuspenseWrapper>
    ,loader: ({ request }) => redirectToStoredLocale(request.url, "/start-quiz", "/en/start-quiz"),
  },
  {
    path: "/select-difficulty/:subchapterId",
    element: <SuspenseWrapper><Deficulty /></SuspenseWrapper>
    ,loader: ({ request }) => redirectToStoredLocale(request.url, "/select-difficulty", "/en/select-difficulty"),
  },
  {
    path: "/en/select-difficulty/:subchapterId",
    element: <SuspenseWrapper><EnglishQuizDeficultyLevel /></SuspenseWrapper>
    ,loader: ({ request }) => redirectToStoredLocale(request.url, "/select-difficulty", "/en/select-difficulty"),
  },
  {
    path: "/quiz/:subchapterId/:difficulty",
    element: <SuspenseWrapper><Quiz /></SuspenseWrapper>,
    loader: async ({ request, params }) => {
      const localeRedirect = redirectToStoredLocale(request.url, "/quiz", "/en/quiz");
      if (localeRedirect) return localeRedirect;
      const response = await fetch('/quiz.json');

      const { subchapterId, difficulty } = params;
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
    path: "/en/quiz/:subchapterId/:difficulty",
    element: <SuspenseWrapper><Quiz /></SuspenseWrapper>,
    loader: async ({ request, params }) => {
      const localeRedirect = redirectToStoredLocale(request.url, "/quiz", "/en/quiz");
      if (localeRedirect) return localeRedirect;

      const { subchapterId, difficulty } = params;
      const response = await fetch('/quiz.en.json');
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
    loader: ({ request }) => redirectToStoredLocale(request.url, "/about", "/en/about"),
  },
  {
    path: "/en/about",
    element: <SuspenseWrapper><EnglishAbout /></SuspenseWrapper>,
    loader: ({ request }) => redirectToStoredLocale(request.url, "/about", "/en/about"),
  },
  {
    path: "/tutorials",
    element: <SuspenseWrapper><Tutorials /></SuspenseWrapper>,
    loader: ({ request }) => redirectToStoredLocale(request.url, "/tutorials", "/en/tutorials"),
  },
  {
    path: "/en/tutorials",
    element: <SuspenseWrapper><Tutorials /></SuspenseWrapper>,
    loader: ({ request }) => redirectToStoredLocale(request.url, "/tutorials", "/en/tutorials"),
  },
  {
    path: "/profile",
    element: <SuspenseWrapper><Profile /></SuspenseWrapper>,
    loader: ({ request }) => redirectToStoredLocale(request.url, "/profile", "/en/profile"),
  },
  {
    path: "/en/profile",
    element: <SuspenseWrapper><EnglishProfile /></SuspenseWrapper>,
    loader: ({ request }) => redirectToStoredLocale(request.url, "/profile", "/en/profile"),
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