import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import CandidatesPage from "./components/pages/MainPage";
import CandidateDetailPage from "./components/pages/CandidateDetailsPage";
import PreAdversePage from "./components/pages/PreadversePage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<CandidatesPage />} />
          <Route
            path="/candidateDetails/:candidateId"
            element={<CandidateDetailPage />}
          />
          <Route path="/preAdverse/:candidateId" element={<PreAdversePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
