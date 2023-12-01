// App.js
import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const NotFound = lazy(() => import("./components/NotFound/NotFound.tsx"));

const Login = lazy(() => import("./components/Login.tsx"));
const Dashboard = lazy(() => import("./components/Dashboard.tsx"));
const SuspenseFallback = <div>Loading...</div>;

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={SuspenseFallback}>
              <Login />
            </Suspense>
          }
        />
        <Route
          path="/dashboard"
          element={
            <Suspense fallback={SuspenseFallback}>
              <Dashboard />
            </Suspense>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
