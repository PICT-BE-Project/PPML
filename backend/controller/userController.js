import userModel from "../models/user.js";


const CreateUser = async (req, res) => {
    const { firstname, lastname, email, phone, password } = req.body;
    try {
        const newUser = new userModel({ firstname, lastname, email, phone, password });
        await newUser.save();
        res.status(200).json({ success: true, message: "User created successfully !!!", newUser });
    } catch (error) {
        console.log("Error in creating a new User: ", error);
        res.status(500).json({ success: false, message: "Internal server error !!!" });
    }
}


const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if user exists
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        // Check if password is correct
        if (password !== user.password) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        // Return success message
        res.json({ message: 'Login successful' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};


const GetAllUsers = async (req, res) => {
    try {
        const users = await userModel.find();
        res.status(200).json({ success: true, message: 'All users fetched successfully !', users });

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
}

const GetUserById = async (req, res) => {
    const userId = req.params.id;
    try {
        const users = await userModel.find({ _id: userId });
        res.status(200).json({ success: true, message: 'user fetched successfully !', users });

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
}

const GetUserByEmail = async (req, res) => {
    const userEmail = req.params.email;
    try {
        const users = await userModel.find({ email: userEmail });
        res.status(200).json({ success: true, message: 'user fetched successfully !', users });

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
}


const UpdateUser = async (req, res) => {
    const userId = req.params.id;
    try {
        const user = await userModel.findByIdAndUpdate(userId, req.body, { new: true });
        res.status(200).json({ success: true, message: "User updated successfully !!!", user });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
}

const DeleteUser = async (req, res) => {
    const userId = req.params.id;
    try {
        const deleteUser = await userModel.findByIdAndDelete(userId);
        res.status(200).json({ success: true, message: 'User deleted successfully !!!' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'Internal server error !!!' });
    }
}

export { CreateUser, GetAllUsers, GetUserById, UpdateUser, DeleteUser, login, GetUserByEmail };