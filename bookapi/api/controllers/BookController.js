
/**
 * BookController
 * @description :: managing to book
 */
module.exports = {
    list: function (req, res) {
        var bookModel = sails.models['book'];
        // var allBook=bookModel.find({});
        bookModel.find().exec(function (err, records) {
            if (err) {
                res.json(500, err);
            }
            else {
                res.json(200, records);
            }
        });
    },
    CreateBook: function (req, res) {
        var bookCreateModel = sails.models['book'];  
        
        
        bookCreateModel.create(req.body).exec(function (err, bookResults) {
            console.log("bookResults.....",bookResults);
            console.log("err.....",err);
            if (err) {
                res.json(500, err);
            }
            else {
                res.json(200, bookResults);
            }
        })
    }
};