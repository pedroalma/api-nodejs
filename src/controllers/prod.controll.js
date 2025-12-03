let prod = [
    { id: 1, name: 'relogio'},
    { id: 2, name: 'celular'},
    { id: 3, name: 'tablet'},
    { id: 4, name: 'notebook'},
    { id: 5, name: 'monitor'},
    { id: 6, name: 'teclado' }
];
module.exports = {
    listprod: (req, res) => {
        res.json(prod);
    },
    getUser: (req, res) => {
        const id = Number(req.params.id);
        const user = prod.find(u => u.id === id);

        if (!user) {
            return res.status(404).json({ message: 'Produto nao encontrado ' });
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
        prod.push(newUser);

        res.status(201).json({
            message: 'Produto criado com sucesso',
            user: newUser,
        });
    },
    updateUser: (req, res) => {
        const id = Number(req.params.id);
        const { name } = req.body;

        const index = prod.findIndex(u => u.id === id);
        if (index === -1) 
            return res.status(404).json({ message: 'Produto nao encontrado' });
        
        prod[index].name = name || prod[index].name;
        res.json({
            message: 'Produto atualizado com sucesso',
            user: prod[index]
        });
    },    
    deleteUser: (req, res) => {
        const id = Number(req.params.id);
        const exists = prod.some(u => u.id === id);

        if (!exists) 
            return res.status(404).json({ message: 'Produto nao encontrado' });
        
        prod = prod.filter(u => u.id !== id);

        res.json({ 
            message: 'Produto deletado com sucesso' 
        });
    }
}