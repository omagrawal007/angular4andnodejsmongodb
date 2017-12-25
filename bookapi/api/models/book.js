
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
            type: 'boolean',
            defaultsTo:false
        },
        userId: {
            model: 'user',
            required:true
        }
    },
    validationMessages: {
        userId: {
          required: "This is dublicate value or invalid user id",
        }
      },
    beforeValidate:function(value,cb){
        this.find({bookName:value.bookName,userId:value.userId}).exec(function(err,result){
            if(result.length>0)
            {
                value.userId='';
                cb();
            }
            else{
                cb();
            }
            
            
            

        })
    }
}