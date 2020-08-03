
// exports.seed = function (knex) {
//   // Deletes ALL existing entries

//   // Inserts seed entries
//   return knex('resources').insert([
//     { Name: "Wood", Description: "Get wood from home deopt" },
//     { Name: "Hammer" }
//   ]);
// };

exports.seed = function (knex, Promise) {
  return knex("resources").insert([
    {
      resource_id: 1,
      Name: "Wood",
      Description: "Get wood from Home Deopt",
    },
    {
      resource_id: 2,
      Name: "Hammer",
      Description: "",

    }
  ])
}