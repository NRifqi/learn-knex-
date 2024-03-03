/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("transaction",function(table) {
        table.increments("id").primary()
        table.integer("quantity").notNullable()
        table.integer("product_id").unsigned()
        table.integer("customer_id").unsigned()
        table.foreign("product_id").references("products.id")
        table.foreign("customer_id").references("customer.id")
        table.timestamps()
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("transaction")  
};
