/**
 * Created with JetBrains WebStorm.
 * User: ryi
 * Date: 8/9/13
 * Time: 3:57 PM
 * To change this template use File | Settings | File Templates.
 */

function notLoggedIn(req, res, next) {
    if (req.session.user) {
        res.send('Unauthorized', 401);
    } else {
        next();
    }
}
module.exports = notLoggedIn