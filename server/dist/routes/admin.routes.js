"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminRoutes = void 0;
const CreateAdminController_1 = require("./../modules/users/useCases/createAdmin/CreateAdminController");
const express_1 = require("express");
const createAdminController = new CreateAdminController_1.CreateAdminController();
const adminRoutes = (0, express_1.Router)();
exports.adminRoutes = adminRoutes;
adminRoutes.post("/", createAdminController.handle);
//# sourceMappingURL=admin.routes.js.map