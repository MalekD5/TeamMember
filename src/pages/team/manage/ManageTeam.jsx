import React from "react";
import { useParams } from "react-router-dom";
import { NotFound } from "../../../components";
import { useLocalStorage } from "../../../hooks/LocalStorageHook";

const Load = ({ id }) => {
  const [value, setValue] = useLocalStorage(`team.${id}`, {});

  return (
    <div>
      <h1 className="mt-4 text-center">Team Manage</h1>
    </div>
  );
};

const ManageTeam = () => {
  const { id } = useParams();

  if (isNaN(id) || localStorage.getItem(`team.${id}`) == null)
    return <NotFound />;

  return <Load id={id} />;
};

export default ManageTeam;
