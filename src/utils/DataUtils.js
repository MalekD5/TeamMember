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
