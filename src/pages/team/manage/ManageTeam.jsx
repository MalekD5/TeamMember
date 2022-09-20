import React from "react";
import { useParams } from "react-router-dom";
import { NotFound } from "../../../components";
import { getTeam } from "../../../utils/DataUtils";

const Load = ({ team }) => {
  return (
    <div>
      <h1 className="mt-4 text-center">Team Manage</h1>
      {team.name}
    </div>
  );
};

const ManageTeam = () => {
  const { id } = useParams();
  const team = getTeam(id);

  if (!team) return <NotFound />;

  return <Load team={team} />;
};

export default ManageTeam;
