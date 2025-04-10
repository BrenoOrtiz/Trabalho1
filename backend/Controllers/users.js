import db from "../db.js";

const getUsers = (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const offset = (page - 1) * limit;

    const countQuery = "SELECT COUNT(*) as total FROM usuarios";
    const dataQuery = "SELECT * FROM usuarios LIMIT ? OFFSET ?";

    db.query(countQuery, (err, countResult) => {
        if (err)
            return res
                .status(500)
                .json({ error: "Database error", details: err });

        const total = countResult[0].total;

        db.query(dataQuery, [limit, offset], (err, data) => {
            if (err)
                return res
                    .status(500)
                    .json({ error: "Database error", details: err });

            return res.status(200).json({
                data,
                pagination: {
                    total,
                    page,
                    limit,
                    pages: Math.ceil(total / limit),
                },
            });
        });
    });
};

const getUserById = (req, res) => {
    const { id } = req.params;
    const query = "SELECT * FROM usuarios WHERE idusuarios = ?";

    db.query(query, [id], (err, data) => {
        if (err)
            return res
                .status(500)
                .json({ error: "Database error", details: err });
        if (data.length === 0)
            return res.status(404).json({ error: "User not found" });

        return res.status(200).json(data[0]);
    });
};

const createUser = (req, res) => {
    const { name, age, cpf } = req.body;
    const query = "INSERT INTO usuarios (nome, idade, cpf) VALUES (?, ?, ?)";
    db.query(query, [name, age, cpf], (err, result) => {
        if (err) return res.status(500).json(err);
        return res.status(201).json({ message: "Usuário criado com sucesso!" });
    });
};

const updateUser = (req, res) => {
    const { id } = req.params;
    const { name, age, cpf } = req.body;
    const query =
        "UPDATE usuarios SET nome = ?, idade = ?, cpf = ? WHERE idusuarios = ?";
    db.query(query, [name, age, cpf, id], (err, result) => {
        if (err) return res.status(500).json(err);
        return res
            .status(200)
            .json({ message: "Usuário atualizado com sucesso!" });
    });
};

const deleteUser = (req, res) => {
    const { id } = req.params;
    const query = "DELETE FROM usuarios WHERE idusuarios = ?";
    db.query(query, [id], (err, result) => {
        if (err) return res.status(500).json(err);
        return res
            .status(200)
            .json({ message: "Usuário deletado com sucesso!" });
    });
};

export { getUsers, getUserById, createUser, updateUser, deleteUser };
