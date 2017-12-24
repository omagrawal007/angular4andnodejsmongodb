/**
 * user
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 *  user type:- 0 no user,1 book user
 */

module.exports = {
    attributes: {
        name: {
            type: 'string'
        },
        userType: {
            type: 'string'
        },
        email: {
            type: 'string'
        },
        password: {
            type: 'string'
        },
        dob: {
            type: 'string'

        }
    }
};