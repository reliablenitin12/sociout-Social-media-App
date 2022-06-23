const User=require('../models/user');


module.exports.profile=function(req,res)
{
    return res.render('user_profile',{
        title:"Friendly | Profile"
    });
}


//render the signUp Page
module.exports.signUp=function(req,res)
{
    return res.render('user_sign_up',{
        title: "Friendly | Sign Up"
    })
}

//render the signIn page
 module.exports.signIn=function(req,res)
{
     return res.render('user_sign_in',{
        title: "Friendly | Sign In"
     })
 }

//get the sign up data
 module.exports.create=function(req,res)
 {
   if(req.body.password!=req.body.confirm_password)
   {
    return res.redirect('back');
   }
   User.findOne({email:req.body.email},function(err,user){
      if(err)
      {
        return console.log("Error in finding user in signing up",err);
      }
      if(!user)
      {
        User.create(req.body, function(err,user){
            if(err)
            {
                return console.log("Error in creating user while signing up",err);
            }
           return res.redirect('/users/sign-in');
        });
      }else{
        return res.redirect('back');
      }
   });

 }
//get the sign in data and create the session for the user
 module.exports.createSession=function(req,res){

 }