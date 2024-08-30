import mongoose from "mongoose";

const DBConnection = async () => {
    const DB_USERNAME = "bppradyumna2";
    const DB_PASSWORD = "Physicsbaba1";  // Replace with your actual password
    const DB_NAME = "mydatabase";  // Replace with your database name

    // MongoDB Atlas connection URL format
    const DB_URL = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.3botz5v.mongodb.net/${DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`;
    

    try {
        await mongoose.connect(DB_URL, {
            useUnifiedTopology: true
        });
        console.log('Database connection successful');
    } catch (error) {
        console.error('Error while connecting to the database', error.message);
    }
}

export default DBConnection;
