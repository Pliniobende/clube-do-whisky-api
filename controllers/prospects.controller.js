const prospectsController = {
    getAll: (req, res) => res.status(401).json('Unauthorized route'), 
    getById: (req, res) => res.status(401).json('Unauthorized route'),
    put: (req, res) => res.status(401).json('Unauthorized route'),
    delete: (req, res) => res.status(401).json('Unauthorized route')
}

module.exports = prospectsController;