/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Button, Form, Stack } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { TeamCard } from "../../../components";
import { useLocalStorage } from "../../../hooks/LocalStorageHook";
import { deleteTeam } from "../../../utils/DataUtils";

const TeamView = () => {
  const [search, setSearch] = useState("");
  const [teams, setTeams] = useLocalStorage("teams", []);
  const nav = useNavigate();
  const resetbtn = document.getElementById("reset-btn");

  const resetSearch = () => {
    setSearch("");
    resetbtn.value = "";
  };

  const editTeam = (name) => {
    nav(`/teams/${name}`);
  };

  const removeBtn = (name) => {
    const newTeams = deleteTeam(name);
    if (newTeams === -1) return;
    setTeams(newTeams);
  };

  useEffect(() => {
    setTeams(JSON.parse(localStorage.getItem("teams")) || []);
  }, []);

  return (
    <div>
      <h1 className="mt-4 mb-4 text-center">Teams</h1>
      <div className="w-50 ms-auto me-auto">
        <Stack className="mt-2 mb-4" direction="horizontal" gap={3}>
          <Form.Control
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
            id="reset-btn"
            placeholder="Search for team..."
          />
          <Button onClick={resetSearch} variant="danger">
            Reset
          </Button>
          <div className="vr" />
          <Button onClick={() => nav("/teams/add")} variant="outline-primary">
            Create
          </Button>
        </Stack>

        <Stack gap={0} direction="vertical" className="mt-3">
          {teams && search && search === ""
            ? teams.map(({ name }) => (
                <TeamCard
                  key={name}
                  name={name}
                  editAction={editTeam}
                  removeAction={removeBtn}
                />
              ))
            : teams
                .filter(({ name }) => name.includes(search))
                .map(({ name }) => (
                  <TeamCard
                    key={name}
                    name={name}
                    editAction={editTeam}
                    removeAction={removeBtn}
                  />
                ))}
        </Stack>
      </div>
    </div>
  );
};

export default TeamView;
