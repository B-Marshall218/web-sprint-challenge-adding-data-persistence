exports.seed = function (knex) {
  return knex("tasks").insert([
    {
      Description: "Set foundation footings for deck",
      Notes: "Deck is 24X18",
      Completed: false,
      project_id: 1
    },
    {
      Description: "Need to rake the yard",
      Notes: "Only have mon and tues to do this",
      Completed: true,
      project_id: 2
    }
  ])
}