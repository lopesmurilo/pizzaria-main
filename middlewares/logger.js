const loggerMiddleware = (req, res, next) => {
     const horaAtual = new Date().toLocaleTimeString();
     console.log(`[${horaAtual}] requisição Recebida:
        ${req.method} ${req.originalUrl}`);
        next();
};

module.exports = loggerMiddleware;