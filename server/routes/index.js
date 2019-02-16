const user = require('./userRoute')
const article = require('./articleRoute')

module.exports = (router) =>{
    user(router)
    article(router)
}