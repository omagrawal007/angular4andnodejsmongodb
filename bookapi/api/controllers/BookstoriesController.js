/**
 * @description  This is manging the lession via book id
 */
module.exports = {
    List: function (req, res) {
        var bookListModel = sails.models['bookstories'];   
        
        try{
            // console.log(bookListModel.find({bookId:ObjectId(req.body.id)}));
            bookListModel.find({bookId:req.body.bookId}).exec(function (err, result) {
                if (err) {
                    res.json(500,err);
                }
                else {
                    res.json(200,result);
                }
            });
        }catch(ex){
            res.json(500,'id wrong formate');
        }
    },
    CreateLession: function (req, res) {
        var bookListModel = sails.models['bookstories'];
        bookListModel.create(req.body).exec(function (err, result) {
            if (err) {
                res.json(500, err)
            }
            else {
                res.json(200, result);
            }
        });
    }
}