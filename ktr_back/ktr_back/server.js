const express = require('express')
const app = express()
const bcrypt = require('bcrypt')

app.use(express.json())

const users = []

app.get('/users', (req, res) => {
    res.json(users)
})

app.post('/users', async (req, res) => {
    try {
        users.forEach(function(item, index, array) {
            if (item.name === req.body.name) {
                res.status(409).send()
                throw 'conflict with name'
            }
        });
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        const user = { name: req.body.name, password: hashedPassword, companyName: req.body.companyName, email: req.body.email, tel: req.body.tel, cards: [] }
        users.push(user)
        res.status(201).send()
    } catch {
        res.status(500).send()
    }
})

app.post('/users/login', async (req, res) => {
    const user = users.find(user => user.name === req.body.name)
    if (user == null) {
        return res.status(400).send('Cannot find user')
    }
    try {
        if(await bcrypt.compare(req.body.password, user.password)) {
            res.send('Success')
        } else {
            res.send('Not Allowed')
        }
    } catch {
        res.status(500).send()
    }
})

app.post('/business_card/:userName', async (req, res) => {
    try {
        const userName = req.params.userName;
        users.forEach(function(item, index, array) {
            if (item.name === userName) {
                users[index].cards.push({ name: req.body.name, companyName: req.body.companyName, email: req.body.email, tel: req.body.tel })
            }
        });
        res.status(201).send()
    } catch {
        res.status(500).send()
    }
})

app.post('/business_card/exchange/:userName1/:userName2', async (req, res) => {
    try {
        let userIndex1;
        let userIndex2;
        let userCard1;
        let userCard2;
        users.forEach(function(item, index, array) {
            if (item.name === req.params.userName1) {
                userIndex1 = index;
                userCard1 = { name: item.name, companyName: item.companyName, email: item.email, tel: item.tel }
            }
            if (item.name === req.params.userName2) {
                userIndex2 = index;
                userCard2 = { name: item.name, companyName: item.companyName, email: item.email, tel: item.tel }
            }
        });
        if (userIndex1 !== undefined && userIndex2 !== undefined) {
            users[userIndex1].cards.push(userCard2);
            users[userIndex2].cards.push(userCard1);
            res.status(201).send()
        } else {
            res.status(500).send()
        }

    } catch {
        res.status(500).send()
    }
})

app.get('/user/:userName', async (req, res) => {
    try {
        const userName = req.params.userName;
        users.forEach(function(item, index, array) {
            if (item.name === userName) {
                res.json(item);
            }
        });
        res.status(500).send()
    } catch {
        res.status(500).send()
    }
})

app.listen(3000)