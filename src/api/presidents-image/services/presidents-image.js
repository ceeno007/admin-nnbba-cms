'use strict';

/**
 * presidents-image service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::presidents-image.presidents-image');
