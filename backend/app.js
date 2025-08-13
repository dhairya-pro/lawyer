import express from "express";
import cors from "cors";
import morgan from "morgan";
import chalk from "chalk";
import logger from "./utils/logger.js";
import cookieParser from "cookie-parser";
import apiError from "./utils/apiError.js";
const app = express();

app.use(
    cors({
        origin: ["http://localhost:5173", "http://localhost:5174","https://jimitthakore.in"],

        credentials: true,
        methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"]
    })
);

const morganFormat = ":method :url :status :response-time ms";
app.use(
    morgan(morganFormat, {
        stream: {
            write: (message) => {
                const logObject = {
                    method: message.split(" ")[0],
                    url: message.split(" ")[1],
                    status: message.split(" ")[2],
                    responseTime: message.split(" ")[3]
                };
                const coloredLogObject = {
                    method: chalk.red.bold(logObject.method),
                    url: chalk.blue.bold(logObject.url),
                    status: chalk.yellow.bold(logObject.status),
                    responseTime: chalk.green.bold(logObject.responseTime)
                };
                logger.info(
                    `Method: ${coloredLogObject.method}, URL: ${coloredLogObject.url}, Status: ${coloredLogObject.status}, Response Time: ${coloredLogObject.responseTime}`
                );
            }
        }
    })
);


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
import userRoutes from "./routes/user.routes.js";
app.use("/api/v1/user", userRoutes);
app.use((err, req, res, next) => {

    if (err instanceof apiError) {
        return res.status(err.statusCode).json({
            status: "error",
            message: err.message
        });
    }


    console.error(err.stack);
    return res.status(500).json({
        status: "error",
        message: "Internal Server Error"
    });
});

export default app;
