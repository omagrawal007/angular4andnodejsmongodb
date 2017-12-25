/**
 * @description This is model for lession via book id and user is
 */
module.exports={
    attributes:{        
        lessionName:{
            type:'string',
            required:true
        },
        language:{
            type:'string',            
            required:true
        },
        bookId:{
            model:'book',
            required:true
        }
    },
    beforeValidate:function(value,cb){
        this.find({lessionName:value.lessionName,language:value.language}).exec(function(err,result){
            if(result.length>0)
            { 
                value.bookId='';
                cb();
            }
            else
            {
                cb()
            }


        });


    }
}