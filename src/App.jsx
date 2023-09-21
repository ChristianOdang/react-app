import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Profile from "./Components/Profile";
import SkillList from "./Components/SkillList";



function App() {
  

  return (
    <>
      <div className="container">
        <Header />
        <div className="card">
          <Profile />
          <SkillList />
        </div>
      </div>
    </>
  );
}

export default App;
