import db from "../db.js"

const getUsers = (_, res) => {
    const query = "SELECT * FROM usuarios"
    db.query(query, (err, data) => {
        if (err) return res.json(err)
        return res.status(200).json(data)
    })
    
}

const createUser = (req, res) => {
    const { name, age, cpf } = req.body
    const query = "INSERT INTO usuarios (nome, idade, cpf) VALUES (?, ?, ?)"
    db.query(query, [name, age, cpf], (err, result) => {
        if (err) return res.status(500).json(err)
        return res.status(201).json({ message: "Usuário criado com sucesso!" })
    })
}

const updateUser = (req, res) => {
    const { id } = req.params
    const { name, age, cpf } = req.body
    const query = "UPDATE usuarios SET nome = ?, idade = ?, cpf = ? WHERE idusuarios = ?"
    db.query(query, [name, age, cpf, id], (err, result) => {
        if (err) return res.status(500).json(err)
        return res.status(200).json({ message: "Usuário atualizado com sucesso!" })
    })
}

const deleteUser = (req, res) => {
    const { id } = req.params
    const query = "DELETE FROM usuarios WHERE idusuarios = ?"
    db.query(query, [id], (err, result) => {
        if (err) return res.status(500).json(err)
        return res.status(200).json({ message: "Usuário deletado com sucesso!" })
    })
}
 
export { getUsers, createUser, updateUser, deleteUser }