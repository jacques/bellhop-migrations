
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('titles').del()
    .then(function () {
      // Inserts seed entries
      return knex('titles').insert([
        {id: 1, title: 'Mr.', created_at: new Date(), updated_at: new Date()},
        {id: 2, title: 'Mrs.', created_at: new Date(), updated_at: new Date()},
        {id: 3, title: 'Miss.', created_at: new Date(), updated_at: new Date()},
        {id: 4, title: 'Ms.', created_at: new Date(), updated_at: new Date()},
        {id: 5, title: 'Dr.', created_at: new Date(), updated_at: new Date()},
        {id: 6, title: 'Prof.', created_at: new Date(), updated_at: new Date()}
      ]);
    });
};