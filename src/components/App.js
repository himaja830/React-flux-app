import React from "react";
import HomePage from "./Homepage";
import AboutPage from "./Aboutpage";
import Header from "./common/Header";
import CoursesPage from "./CoursesPage";

function App() {
  function getPage() {
    const route = window.location.pathname;
    if (route === "/Courses") return <CoursesPage />;
    if (route === "/about") return <AboutPage />;
    return <HomePage />;
  }
  return (
    <div className="container-fluid">
      <Header />
      {getPage()}
    </div>
  );
}

export default App;
