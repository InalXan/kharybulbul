import Contact from "../db/models/contact_model.js";

const submitForm = async (req, res, next) => {
    try {
        const { fullname, number, message } = req.body;

        if (!fullname || !number || !message) {
            return res.status(400).json({ message: "Name, number, and message are required" });
        }

        const newContact = new Contact({
            fullname: fullname,
            number: number,
            message: message
        });
        
        await newContact.save();

        res.status(201).json({ message: "Contact form submitted successfully" });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};
const messageBox = async (req, res) => {
    try {
        const messages = await Contact.findOne();
        if(!messages) {
            res.status(494).json({message: "Message Data Not Found"});
        }
        return res.status(200).json({
            id: messages._id,
            fullname: messages.fullname,
            number: messages.number,
            message: messages.message
        })
    } catch(error) {
        console.log(error);
        res.status(500).json({message: "Can not get message box"});
    }
}

const deleteMessage = async (req, res) => {
    try {
        const message = await Contact.findByIdAndDelete(req.params.id);
        if (!message) {
            return res.status(404).json({ success: false, message: "Message not found" });
        }

        return res.status(200).json({
            success: true,
            message: "Message deleted successfully"
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Message delete error" });
    }
}
export {submitForm, messageBox, deleteMessage};