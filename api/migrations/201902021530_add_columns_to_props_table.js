// Add columns to table.
module.exports.up = async db => {
  await db.schema.alterTable('properties', table => {
    table.float('land_surface');
    table.float('number_of_rooms');
    table.integer('number_of_parkings');
  });
};
// If something goes wrong remove created columns.
module.exports.down = async db => {
  await db.schema.alterTable('properties', table => {
    table.dropColumns('land_surface', 'number_of_rooms', 'number_of_parkings');
  });
};

module.exports.config = {
  transaction: true,
};
