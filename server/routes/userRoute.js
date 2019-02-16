const usercontroller = require('../controllers/userCtrl')

module.exports = (router)=>{
    //get a user
    router.route('/user/:id').get(usercontroller.getUser)

    //get user profile
    router.route('/user/profile/:id').get(usercontroller.getUserProfile)

    //adds user

    router.route('/user').post(usercontroller.addUser)

    //follow user

    router.route('/user/follow').post(usercontroller.followUser)
}