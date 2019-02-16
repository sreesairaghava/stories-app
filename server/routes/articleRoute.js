const articlecontroller = require('../controllers/articleCtrl')
const multipart = require('connect-multiparty')
const multipartWare = multipart()

module.exports =(router) =>{
    //Get all the articles
    router.route('/articles').get(articlecontroller.getAll)

    //Add an article
    router.route('/article').post(multipartWare, articlecontroller.addArticle)

    //Clap on Article
    router.route('/article/clap').post(articlecontroller.clapArticle)

    //Comment on Article
    router.route('/article/comment').post(articlecontroller.commentArticle)

    //Get a particular article to view

    router.route('/article/:id').get(articlecontroller.getArticle)
}