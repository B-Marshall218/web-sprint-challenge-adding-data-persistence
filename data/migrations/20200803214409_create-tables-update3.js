exports.up = function (knex) {
    return knex.schema
        .createTable("projects", tbl => {
            tbl.increments();
            tbl.string("Name", 128).notNullable();
            tbl.string("Description", 255);
            tbl.boolean("Completed").defaultTo(false);

        })
        .createTable("resources", tbl => {
            tbl.increments();
            tbl.string("Name", 128).notNullable().unique();
            tbl.string("Description", 255);
        })
        .createTable("tasks", tbl => {
            tbl.increments();
            tbl.string("Description", 255).notNullable();
            tbl.string("Notes", 255);
            tbl.boolean("Completed").defaultTo(false);
            tbl.integer("project_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("projects")
                .onDelete("CASCADE")
                .onUpdate("CASCADE");

        })
        .createTable("project_resources", tbl => {
            tbl.integer("project_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("projects")
                .onDelete("CASCADE")
                .onUpdate("CASCADE");
            tbl.integer("resource_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("resources")
                .onDelete("CASCADE")
                .onUpdate("CASCADE");
        })
}


exports.down = function (knex) {
    return (
        knex.schema
            .dropTableIfExists('project_resources')
            .dropTableIfExists('tasks')
            .dropTableIfExists('resources')
            .dropTableIfExists('projects')
    );
};