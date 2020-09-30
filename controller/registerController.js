
var Register = require('../model/Register')

exports.getAllRegister = (req, res, next) => {
    Register.find( {}, (error, register) => {
    if (error) next(error);
    req.data = register;
    next();
  });
};


exports.saveRegister = (req, res, next) =>{

    Register.findOne({ registration: req.body.registration }).then(
        (data) => {
          if (data) {
            return res.status(401).send({
              error: 'Registration  found'
            });
       
          }
   
        // Insert the new Register if they do not exist yet
       var register = new Register({
            
            registration: req.body.registration,
           
         
        });
     
    register.save(function (err, post) {
        if (err) {
          return next(err);
        }
        res.json(201, post);
      });
    });
};
 