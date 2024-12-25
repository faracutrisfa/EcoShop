import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/Homepage"
import PageLayout from "../components/Layout/PageLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PageLayout>
        <Homepage />
      </PageLayout>
    ),
  },
  {
    path: "/Home",
    element: (
      <PageLayout>
        <Homepage />
      </PageLayout>
    ),
  },
]);

export default router;
