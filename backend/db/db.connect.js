import mongoose from "mongoose";
import logger from "../utils/logger.js";
import chalk from "chalk";

const connectDB = async () => {
    try {
     
        if (!process.env.DB_USER || !process.env.DB_PASSWORD || !process.env.DB_HOST || !process.env.DB_NAME) {
            throw new Error("Missing required environment variables for database connection");
        }

       
        const MONGODB_URI = `mongodb+srv://${process.env.DB_USER}:${encodeURIComponent(process.env.DB_PASSWORD)}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`;

      
        logger.info(chalk.blue.bold.italic(`Attempting to connect to MongoDB at ${process.env.DB_HOST}`));

        const connectionInstance = await mongoose.connect(MONGODB_URI);

        logger.info(
            chalk.green.bold.italic(
                `Successfully connected to MongoDB! Database: ${connectionInstance.connection.name}`
            )
        );
    } catch (error) {
        logger.error(
            chalk.red.bold.italic("MongoDB Connection Error:"),
            chalk.red(error.message)
        );
        
        if (error.name === 'MongoServerSelectionError') {
            logger.error(chalk.yellow("Possible causes:"));
            logger.error(chalk.yellow("1. Incorrect MongoDB Atlas cluster URL"));
            logger.error(chalk.yellow("2. Network connectivity issues"));
            logger.error(chalk.yellow("3. IP address not whitelisted in MongoDB Atlas"));
            logger.error(chalk.yellow("4. Invalid credentials"));
        }
        
        process.exit(1);
    }
};

export default connectDB;
