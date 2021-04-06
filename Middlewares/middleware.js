module.exports = function addReqUser(req, res, next) {
    req.user = { name: "user has no name" };
    next();
};