"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("express-async-errors");
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const AppError_1 = require("./errors/AppError");
const app = (0, express_1.default)();
const PORT = 3333;
app.use(express_1.default.json());
app.use("/api", routes_1.routes);
app.use((err, request, response, next) => {
    if (err instanceof (AppError_1.AppError)) {
        console.error(err);
        return response.status(err.statusCode).json({
            status: "error",
            message: err.message
        });
    }
    if (err instanceof (Error)) {
        console.error(err);
        return response.status(500).json({
            status: "error",
            message: err.message
        });
    }
    return response.status(501).json({
        status: "error",
        message: "Erro não alinhado",
    });
});
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
//# sourceMappingURL=server.js.map