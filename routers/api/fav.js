const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

const Favorite = require('../../models/Favorite');
const { post } = require('./users');
const MusicUser = require('../../models/MusicUser');

router.put('/add/:id',auth,async (req,res) =>{
    try{
        let user = await MusicUser.findById(req.user.id);
        if(!user){
            return res.status(401).send("Not authorized");
        }
        let index = user.jsondata.map(song => song._id.toString()).indexOf(req.params.id);
        user.jsondata[index].fav = true;
        await user.save();
        res.json(user);
    }
    catch(err){
        console.log(err.message);
        res.status(500).send({msg:"Server Error.."});
    }
});



router.put('/remove/:id',auth,async (req,res) =>{
    try{
        let user = await MusicUser.findById(req.user.id);
        if(!user){
            return res.status(401).send("Not authorized");
        }
        let index = user.jsondata.map(song => song._id.toString()).indexOf(req.params.id);
        user.jsondata[index].fav = false;
        await user.save();
        res.json(user);
    }
    catch(err){
        console.log(err.message);
        res.status(500).send({msg:"Server Error.."});
    }
});



router.get('/', auth, async (req, res) => {
    try {
      const fav = await Favorite.find();
      res.json(fav);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });

router.post('/',auth,async(req,res)=>{
    const {user,title,format,musicid} = req.body;
    try{
        const fav = new Favorite({
            user,
            title,format,musicid
        });
        await fav.save();
    }
    catch(err){
        console.log(err.message);
        return res.status(500).json({msg:"Server Error.."})
    }
})

router.delete('/:id',auth,async(req,res) =>{
    try{
        const fav = await Favorite.findById(req.params.id);
        if(!fav){
            return res.status(404).json({msg:'Favorite not found'});
        }
        if(fav.user.toString() !== req.user.id){
            return res.status(401).json({msg:'User not authorized'});
        }
        await fav.remove();
        res.json({msg:'Favorite Removed'});
    }
    catch(err){
        console.error(err.message);

        res.status(500).json({msg:'Server Error'}); 
    }
})

module.exports = router;