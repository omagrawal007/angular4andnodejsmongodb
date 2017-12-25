
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
        var userId = mongoose.Types.ObjectId(req.body.email);
        bookCreateModel.create(req.body).exec(function (err, bookResults) {
            if (err) {
                res.json(500, err);
            }
            else {
                res.json(200, bookResults);
            }
        })
    }
};