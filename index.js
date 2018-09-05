'use strict';

module.exports = {
  name: 'ember-bliss',
  isDevelopingAddon: function() {
    return true;
  },
  included: function( /* app */ ) {
    this._super.included.apply(this, arguments);
  }
};
