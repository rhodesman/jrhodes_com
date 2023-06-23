module.exports = function (app) {
  const path = require('path');
    //var dataStream = require('../controllers/appController');

    app.route('/')
      .get(function (req, res) {
          res.render('index');
      });

    app.route('/fw/:name')
      .get(function (req, res) {
        var fwName = req.params.name;
        var options = {
          root: path.join(__dirname, '../node_modules'),
          dotfiles: 'deny',
          headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
          }
        };
        if(fwName == 'jquery') {
          res.sendFile('/jquery/dist/jquery.js', options, function (err) {
            if (err) {
              console.log(err);
            }
          });
        }else if(fwName == 'bootsjs') {
          res.sendFile('/bootstrap/dist/js/bootstrap.js', options, function (err) {
            if (err) {
              console.log(err);
            }
          });
        }else if(fwName == 'bootscss') {
          res.sendFile('/bootstrap/dist/css/bootstrap.css', options, function (err) {
            if (err) {
              console.log(err);
            }
          });
        }else if(fwName == 'popper') {
          res.sendFile('/popper.js/dist/popper.min.js', options, function (err) {
            if (err) {
              console.log(err);
            }
          });
        }
      });
};
