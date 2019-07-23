module.exports = function (router) {
    router.get('/api/users', (req, res) => res.send('User route'));

    router.get('/api/auth', (req, res) => res.send('Auth route'));

    router.get('/api/profile', (req, res) => res.send('Profile route'));

    router.get('/api/posts', (req, res) => res.send('Posts routes'));
};