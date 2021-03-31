const express = require('express');
const router = express.Router();
const {check,validationResult} = require('express-validator');
const jwt = require('jsonwebtoken');
const MusicUser = require('../../models/MusicUser');
//const config = require('config');
const auth = require('../../middleware/auth');

// Login and get token
router.post('/',
check('email','Not a valid email'),
check('password','Password is required'),
async (req,res) =>{
    const bugs = validationResult(req);
    if(!bugs.isEmpty()){
        return res.status(400).json({errors : bugs.array()});
    }
    const {email,password} = req.body;
    try{
        let user = await MusicUser.findOne({email});
        if(!user){
            return res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] });
        }
        if(password !== user.password){
            return res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] });
        }
        const payload = {
            user :{
                id : user.id
            }
        };
        jwt.sign(
            payload,
            "jwtsecrettoken",
            {expiresIn:'360000'},
            (err,token) =>{
                if (err) throw err;
                res.json({token});
            }
        )
    }
    catch(err){
        console.error(err.message);
        return res.status(500).json({msg:'Server Error..'})
    }
})
// @route    GET api/auth
// @desc     Get user by token
// @access   Private
router.get('/me', auth, async (req, res) => {
    try {
      const user = await MusicUser.findById(req.user.id).select('-password');
      res.json(user);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });

module.exports = router;