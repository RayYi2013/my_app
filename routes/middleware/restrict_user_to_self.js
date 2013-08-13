/**
 * Created with JetBrains WebStorm.
 * User: ryi
 * Date: 8/9/13
 * Time: 4:06 PM
 * To change this template use File | Settings | File Templates.
 */

function restrictUserToSelf(req, res, next) {
    if (! req.session.user || req.session.user.username !== req.user.username) {
        res.send('Unauthorized', 401);
    } else {
        next();
    }
}
module.exports = restrictUserToSelf;
