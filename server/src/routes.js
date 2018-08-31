const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const ShowUsersController = require('./controllers/ShowUsersController')
const Profile = require('./controllers/Profile')
const AddFriend = require('./controllers/AddFriend')


module.exports = (app) => {
  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register),

  app.post('/login', AuthenticationController.login),

  app.post('/addFriend', AddFriend.add)

  app.get('/otherUsers',
    ShowUsersController.showUsers),

  app.get('/profile/:id',
    Profile.showInfo)
}
