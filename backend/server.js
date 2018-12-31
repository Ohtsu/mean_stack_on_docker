var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Gsection = require('./models/Gsection');
const Promise = require('bluebird');
const app = express();
const router = express.Router();


app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.Promise = Promise;

mongoose.connect('mongodb://sample:sample@mongo/blog', { useNewUrlParser: true });

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established sucessfully!');
});


// Gsection ---------------------------
router.route('/gsections').get((req, res) => {
    Gsection.find((err, gsections) => {
        if (err)
            console.log(err);
        else
            res.json(gsections);
    });
});

router.route('/gsections/:id').get((req, res) => {
    Gsection.findById(req.params.id,(err, gsection) => {
        if (err)
            console.log(err);
        else
            res.json(gsection);
    });
});


router.route('/gsections/category/:category').get((req, res) => {
    var query = ({category: new RegExp(".*" + req.params.category + ".*","i")});
    Gsection.find(query,(err, gsections) => {
        if (err)
            console.log(err);
        else
            res.json(gsections);
    });
});


router.route('/gsections/content/:content').get((req, res) => {
    var query = ({content: new RegExp(".*" + req.params.content + ".*","i")});
    Gsection.find(query,(err, gsections) => {
        if (err)
            console.log(err);
        else
            res.json(gsections);
    });
});


router.route('/gsections/add').post((req, res) => {
    let gsection = new Gsection(req.body);
    gsection.save()
        .then(gsection => {
            res.status(200).json({'gsection': 'Added successfully'});
        })
        .catch(err => {
            res.status(400).send('Failed to create new record');
        });
});


router.route('/gsections/update/:id').post((req, res) => {
    Gsection.findById(req.params.id,(err, gsection) => {
        if (!gsection) 
            return next(new Error('Could not load document')) ;
        else
            {
                gsection.title = req.body.title;
                gsection.user = req.body.user;
                gsection.content = req.body.content;
                gsection.version = req.body.version;
                gsection.created = req.body.created;
                gsection.updated = req.body.updated;
                gsection.category  = req.body.category;
                gsection.target  = req.body.target;
                gsection.author_id = req.body.author_id;
                gsection.author_name = req.body.author_name;
                gsection.language = req.body.language;
                gsection.currency = req.body.currency;
                gsection.price = req.body.price;
                gsection.emergin = req.body.emergin;
                gsection.access = req.body.access;
                gsection.sold = req.body.sold;

                gsection.save().then(gsection => {
                    res.json('Update done');
                }).catch(err => {
                    res.status(400).send('Update failed');
                });
            }
    });
});

router.route('/gsections/delete/:id').get((req, res) => {
    Gsection.findByIdAndRemove({_id: req.params.id},(err, gsection) => {
        if (err)
            res.json(err); 
        else
            res.json('Remove successfully'); 
    });
});


app.use('/', router);

app.get('/', (req, res) => res.send('Hello From DigiPub!'));

app.listen(5000,() => console.log('Express server running on port 5000'));

module.exports = app;