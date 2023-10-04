import { CreateAdminController } from './../modules/users/useCases/createAdmin/CreateAdminController';
import { Router } from "express";


const createAdminController = new CreateAdminController();

const adminRoutes = Router();

adminRoutes.post("/", createAdminController.handle)

export { adminRoutes };