import User from "../models/user.model.js"

export const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id); // Adjust query logic as needed
        if (!user) {
            return res.status(404).json({ error: "User not found" }); // Ensure response is returned
        }
        res.status(200).json(user); // Send user data
    } catch (error) {
        res.status(500).json({ error: error.message }); // Handle errors
    }
};
