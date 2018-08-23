
exports.up = function(knex, Promise) {
  return knex.schema.createTable('countries', function(table){
    table.increments();
    table.string('country_name').unique();
    table.string('tld').unique();
    table.boolean('sadc').index();
    table.timestamps();
    table.timestamp('deleted_at').nullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('countries');
};
