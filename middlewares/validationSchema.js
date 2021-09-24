const middleware = (schema, property) => {
    return (req, res, next) => {
        const { error } = schema.validate(req.body);
        const valid = error == null

        if (valid) {
            next();
        } else {
            const { detail } = error;
            res.status(400).send(detail[0].message);
        }
    }
}

module.exports = middleware;