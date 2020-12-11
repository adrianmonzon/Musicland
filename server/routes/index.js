module.exports = app => {

    // Base URLS
    app.use('/api/users', require('./user.routes.js'))
    app.use('/api/auth', require('./auth.routes.js'))
    app.use('/api/mail', require('./mail.routes.js'))
}