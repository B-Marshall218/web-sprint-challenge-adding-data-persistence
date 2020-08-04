exports.seed = function (knex) {
  return knex("resources").insert([
    {
      Name: "Wood",
      Description: "Must get wood from home depot",
    },
    {
      Name: "Grass Seed"
    }
  ])
}