import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AddUser from "./components/AddUser";
import Home from "./components/Home";
import UpdateUser from "./components/UpdateUser";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      loader: async () => {
        return fetch(`http://localhost:5000/users`);
      },
    },
    {
      path: "users/add",
      element: <AddUser></AddUser>,
    },
    {
      path: "update/:id",
      element: <UpdateUser></UpdateUser>,
      loader: async ({ params }) => {
        return fetch(`http://localhost:5000/users/${params.id}`);
      },
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
