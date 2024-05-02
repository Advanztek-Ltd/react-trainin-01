import { Routes, Route } from "react-router-dom";
import FrontLayout from "../Components/Layout/Front";
import HomePage from "../Pages/Front/HomePage/HomePage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <FrontLayout>
            <HomePage />
          </FrontLayout>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
