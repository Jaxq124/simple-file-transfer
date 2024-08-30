import File from "../models/file.js";


// Assuming File is imported correctly from "../models/file.js"

export const uploadImage = async (request, response) => {
    const { originalname, path } = request.file;
    const fileObj = {
        path: path, // Using the correct 'path' from the request
        name: originalname // Using the correct 'originalname' from the request
    };
    try {
        const file = await File.create(fileObj);
        console.log(file);
        response.status(200).json({ path: `http://localhost:8000/file/${file._id}` }); // Corrected URL
    } catch (error) {
        console.error(error.message);
        response.status(500).json({ error: error.message });
    }
}

export const getImage = async (request, response) => {
    try {
        const file = await File.findById(request.params.fileId);
        if (!file) {
            return response.status(404).json({ error: 'File not found' });
        }

        file.downloadContent++;
        await file.save();

        response.download(file.path, file.name);
    } catch (error) {
        console.error(error.message);
        response.status(500).json({ error: error.message });
    }
}
