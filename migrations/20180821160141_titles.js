
exports.up = function(knex, Promise) {
  return knex.schema.createTable('titles', function(table){
    table.increments();
    table.string('title').unique();
    table.timestamps();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('titles');
};
