exports.seed = function (knex) {
    return knex("projects").insert([
        {
            Name: "Build Front Porch",
            Description: "Need to build wrap around front porch and replace stairs that exist now",
            Completed: "True",
        },
        {
            Name: "Seed back yard",
            Completed: "False",
        }
    ])
}