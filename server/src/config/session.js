export function setSession(req, res, next) {
    if (!req.session.user) {
        req.session.user = { isLogged: false, alias: null };
    }
    next();
}