
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('provinces').del()
    .then(function () {
      // Inserts seed entries
      return knex('provinces').insert([
        {id: 1, country_id: 177, name: 'Eastern Cape', iso: 'ZA-EC', created_at: new Date(), updated_at: new Date()},
        {id: 2, country_id: 177, name: 'Free State', iso: 'ZA-FS', created_at: new Date(), updated_at: new Date()},
        {id: 3, country_id: 177, name: 'Gauteng', iso: 'ZA-GT', created_at: new Date(), updated_at: new Date()},
        {id: 4, country_id: 177, name: 'Limpopo', iso: 'ZA-LP', created_at: new Date(), updated_at: new Date()},
        {id: 5, country_id: 177, name: 'Mpumalanga', iso: 'ZA-MP', created_at: new Date(), updated_at: new Date()},
        {id: 6, country_id: 177, name: 'Northern Cape', iso: 'ZA-NC', created_at: new Date(), updated_at: new Date()},
        {id: 7, country_id: 177, name: 'Kwazulu-Natal', iso: 'ZA-NL', created_at: new Date(), updated_at: new Date()},
        {id: 8, country_id: 177, name: 'North-West', iso: 'ZA-NW', created_at: new Date(), updated_at: new Date()},
        {id: 9, country_id: 177, name: 'Western Cape', iso: 'ZA-WC', created_at: new Date(), updated_at: new Date()},
      ]);
    });
};