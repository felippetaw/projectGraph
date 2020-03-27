
exports.up = function(knex) {
  return knex.schema.createTable('graph', function(table) {
      table.string('option');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('graph')
};
