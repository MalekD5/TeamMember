import React from "react";
import "./App.css";

import { Header, NotFound } from "./components/";
import { Routes, Route } from "react-router-dom";
import { Home, AddTeam, ManageTeam, ListTeams } from "./pages";
import Employee from "./pages/employee/Employee";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="teams" element={<ListTeams />} />
        <Route path="teams/:id" element={<ManageTeam />} />
        <Route path="teams/add/" element={<AddTeam />} />
        <Route path="employees" element={<Employee />} />

        {/* This is going to act like a '404 page' if the user requests an invalid route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
