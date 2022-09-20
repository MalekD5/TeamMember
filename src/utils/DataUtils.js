export function createTeam(form, teams) {
  if (!form) return;

  const newTeam = {
    name: form.name.value.toLowerCase(),
    description: form.description.value,
    members: [],
    date: new Date(),
  };

  teams.push(newTeam);
  localStorage.setItem("teams", JSON.stringify(teams));
}

export function getTeam(name) {
  const teams = JSON.parse(localStorage.getItem("teams")) || [];
  return teams.find((team) => team.name.toLowerCase() === name.toLowerCase());
}

export function deleteTeam(name) {
  const teams = JSON.parse(localStorage.getItem("teams")) || [];
  if (teams.length === 0) return -1;
  const index = teams.findIndex(
    (team) => team.name.toLowerCase() === name.toLowerCase()
  );
  teams.splice(index, 1);
  return teams;
}
