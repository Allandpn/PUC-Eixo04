import "express-async-errors";
import express, { NextFunction, Request, Response } from 'express';
import { routes } from './routes';
import { AppError } from "./errors/AppError";
import cors from 'cors'

const app = express();

const PORT = 3333;

app.use(cors())
app.use(express.json());
<<<<<<< HEAD
app.use(cors({
    origin: "http://localhost:3001"
}));
||||||| merged common ancestors
app.use(cors());
=======

>>>>>>> 7d329c7f0d63a2f085c7b3fd3fb3a15d3da7b6cb

app.use("/api", routes);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof(AppError)){
        console.error(err);
        return response.status(err.statusCode).json({
            status: "error",
            message: err.message
        })
    }
    if(err instanceof(Error)){
        console.error(err);
        return response.status(500).json({
            
            status: "error",
            message: err.message 
        })
    }
    return response.status(501).json({
        status: "error",
        message: "Erro não alinhado",
    })
});

app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
