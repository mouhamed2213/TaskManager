import { TaskList } from "./pages/TaskList";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import AddTask from "./pages/AddTask";
const route = createBrowserRouter([
  // default page
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "tasks", Component: TaskList },
      { path: "add-task", Component: AddTask },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={route} />
    </>
  );
}

export default App;
