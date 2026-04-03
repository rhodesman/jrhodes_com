module.exports = function (app) {
  const path = require('path');

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
        if(fwName == 'bootsjs') {
          res.sendFile('/bootstrap/dist/js/bootstrap.bundle.min.js', options, function (err) {
            if (err) {
              console.log(err);
            }
          });
        }else if(fwName == 'bootscss') {
          res.sendFile('/bootstrap/dist/css/bootstrap.min.css', options, function (err) {
            if (err) {
              console.log(err);
            }
          });
        }
      });
};
