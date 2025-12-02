let users = [
    { id: 1, name: 'Alice'},
    { id: 2, name: 'Bob'},
    { id: 3, name: 'Charlie'},
    { id: 4, name: 'Diana'},
    { id: 5, name: 'Ethan'},
    { id: 6, name: 'Fiona' }
];
module.exports = {
    listUsers: (req, res) => {
        res.json(users);
    },
    getUser: (req, res) => {
        const id = Number(req.params.id);
        const user = users.find(u => u.id === id);

        if (!user) {
            return res.status(404).json({ message: 'Usuari nao encontrado ' });
        }
        res.json(user);
    },
    createUser: (req, res) => {
        const { name } = req.body;
        if (!name) 
            return res.status(400).json({ message: 'Nome e obrigatorio' });

        const newUser = {
            id: Date.now(),
            name,
        };
        users.push(newUser);

        res.status(201).json({
            message: 'Usuario criado com sucesso',
            user: newUser,
        });
    },
    updateUser: (req, res) => {
        const id = Number(req.params.id);
        const { name } = req.body;

        const index = users.findIndex(u => u.id === id);
        if (index === -1) 
            return res.status(404).json({ message: 'Usuario nao encontrado' });
        
        users[index].name = name || users[index].name;
        res.json({
            message: 'Usuario atualizado com sucesso',
            user: users[index]
        });
    },    
    deleteUser: (req, res) => {
        const id = Number(req.params.id);
        const exists = users.some(u => u.id === id);

        if (!exists) 
            return res.status(404).json({ message: 'Usuario nao encontrado' });
        
        users = users.filter(u => u.id !== id);

        res.json({ 
            message: 'Usuario deletado com sucesso' 
        });
    }
}