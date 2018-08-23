
exports.up = function(knex, Promise) {
  return knex.schema.createTable('provinces', function(table){
    table.increments();
    table.integer('country_id').unsigned().references('id').inTable('countries');
    table.string('name')
    table.string('iso');
    table.timestamps();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('provinces');
};
