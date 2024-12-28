import User from "../models/user.model.js"

export const getUser = async (req, res) => {
    try {
        const {id} = req.params;

        const user = await User.findById(id);
        
        res.send(200).json(user);

    } catch (error) {
        res.statu(404).json({message: error.message})
    }
}