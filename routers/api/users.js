const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
//const config = require('config');
const { check, validationResult } = require('express-validator');

const MusicUser = require('../../models/MusicUser');

// register and get token
router.post('/',
check('name','Name is required').notEmpty(),
check('email', 'Please include a valid email').isEmail(),
  check(
    'password',
    'Please enter a password with 6 or more characters'
  ).isLength({ min: 6 }),
  async (req, res) => {
    const bugs = validationResult(req);
    if (!bugs.isEmpty()) {
      return res.status(400).json({ errors: bugs.array() });
    }

    const { name, email, password,jsondata } = req.body;

    try {
      let user = await MusicUser.findOne({ email });
      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'User already exists' }] });
      }
      user = new MusicUser({
        name,
        email,
        password,
        jsondata
      });
      await user.save();

      const payload = {
        user: {
          id: user.id
        }
      };

      jwt.sign(
        payload,
        "jwtsecrettoken",
        { expiresIn: '360000' },//5 days
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;