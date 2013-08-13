/**
 * Created with JetBrains WebStorm.
 * User: ryi
 * Date: 8/9/13
 * Time: 4:04 PM
 * To change this template use File | Settings | File Templates.
 */

var users = require('../../data/users');
function loadUser(req, res, next) {
    var user = req.user = users[req.params.name];
    if (! user) {
        res.send('Not found', 404);
    } else {
        next();
    }
}
module.exports = loadUser;