import Post from "./dao.js"

class Controllers {
    async add(req, res) {
        try {
            const { name, author, content } = req.body;
            const message = await Post.create({ name, author, content });
            console.log(req.body);
            res.json(message);
        } catch (e) {
            res.status(500).json(e);
        }

    }
    async getAll(req, res) {
        try {
            const messages = await Post.find();
            return res.json(messages);
        } catch {
            res.status(500).json(e);
        }
    }
    async getOne(req, res) {
        try {
            const { id } = req.params;
            if (!id) {
                res.status(400).json("Error!");
            }
            const mes = await Post.findById(id);
            return res.json(mes);
        } catch {
            res.status(500).json(e);
        }
    }
    async update(req, res) {
        try {
            const mes = req.body;
            if (!mes._id) {
                res.status(400).json("Error!");
            }
            const newMes = await Post.findByIdAndUpdate(mes._id, mes, { new: true });
            return res.json(newMes);
        } catch {
            res.status(500).json(e);
        }
    }
    async delete(req, res) {
        try {
            const { id } = req.params;
            if (!id) {
                res.status(400).json("Error!");
            }
            const mes = await Post.findByIdAndDelete(id);
            return res.json(mes);
        } catch {
            res.status(500).json(e);
        }
    }
}



export default new Controllers();