const {check, validationResult} = require('express-validator/check')

module.exports = function (router) {
    // @route POST api/users
    // @desc Register user
    // @access Public
    router.post('/api/users', [ // exress-validator check
        check('name', 'Name is required')
            .not()
            .isEmpty(),
        check('email', 'Please include a valid email')
            .isEmail(),
        check('password', 'Please enter a password with 6 or more characters')
            .isLength({
                min: 6
            })
    ], (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()});
        }
        console.log(req.body);
        res.send('User route')
    });

    // @route POST api/users
    // @desc Register user
    // @access Public
    router.get('/api/auth', (req, res) => res.send('Auth route'));

    // @route POST api/users
    // @desc Register user
    // @access Public
    router.get('/api/profile', (req, res) => res.send('Profile route'));

    // @route POST api/users
    // @desc Register user
    // @access Public
    router.get('/api/posts', (req, res) => res.send('Posts routes'));
};