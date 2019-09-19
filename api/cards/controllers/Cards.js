'use strict';

/**
 * Cards.js controller
 *
 * @description: A set of functions called "actions" for managing `Cards`.
 */

module.exports = {

  /**
   * Retrieve cards records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.cards.search(ctx.query);
    } else {
      return strapi.services.cards.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a cards record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.cards.fetch(ctx.params);
  },

  /**
   * Count cards records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.cards.count(ctx.query);
  },

  /**
   * Create a/an cards record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.cards.add(ctx.request.body);
  },

  /**
   * Update a/an cards record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.cards.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an cards record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.cards.remove(ctx.params);
  }
};
