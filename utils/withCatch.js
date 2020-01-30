// wrapper for controller which sends error to errorController

module.exports = fn => (req, res, next) => fn(req, res, next).catch(next)
