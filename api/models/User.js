/**
 * User
 *
 * @module      :: Model
 * @description :: This is the base user model
 * @docs        :: http://waterlock.ninja/documentation
 */

module.exports = {

  attributes: require('waterlock').models.user.attributes({
    
    /* e.g.
    nickname: 'string'
    */
    nickname: 'string',

    phone: {
    	type: 'string',
    	unique: true
    },

    pastors: {
    	collection: 'Pastor',
    	via: "users"
    },

    my_audios: {
    	collection: 'Audio',
    	via: "users"
    }

  }),
  
  beforeCreate: require('waterlock').models.user.beforeCreate,
  beforeUpdate: require('waterlock').models.user.beforeUpdate
};
