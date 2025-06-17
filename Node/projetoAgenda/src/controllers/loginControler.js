const Login = require('../models/LoginModels');

exports.index = (req, res) => {
    console.log(req.session.user);
    res.render('login')
};

exports.register = async function(req, res){
 const login = new Login(req.body);
 await login.register();

// if(login.errors.length > 0) {
//     req.flash('errors', login.errors);
//     req.session.save(function() {
//     return res.redirect('back');
//     });
//     return
// }

 res.send(login.errors);
}

exports.login = async function(req, res){
 const login = new Login(req.body);
 await login.login();

if(login.errors.length > 0) {
    req.flash('errors', login.errors);
    req.session.save(function() {
    return;
    });
    return
}

req.flash('Seu usuario foi criado com sucesso.');
req.session.save(function(){
return res.redirect('back');    
})

 res.send(login.errors);
}

