
/**
 *  userModel
 * @description::user model management
 */

module.exports = {
    attributes: {
        bookName: {
            type: 'string'
        },
        isDeleted: {
            type: 'string'
        },
        userId: {
            model: 'user',
            required:true
        }
    }
}