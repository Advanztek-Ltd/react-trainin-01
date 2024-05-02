import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/Front/HomePage/HomePage";

const DashboardRoutes = () => {
  return (
    <Routes>
      <Route
        path="/dashboard"
        element={
          <HomePage />
        }
      />
    </Routes>
  );
};

export default DashboardRoutes;
