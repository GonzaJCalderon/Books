const { Router } = require('express');
const { Book, ShoppingCart, User } = require('../db');
const axios = require('axios');
const { Op } = require('sequelize');

const router = Router();

const getApiInfo = async () => {
    const apiInfo = await axios.get('https://jsonplaceholder.typicode.com/users')
    return apiInfo.data.map(({id, name, username, email, phone})=>{
        return {
            id: id,
            name: name,
            username: username,
            email: email,
            phone: phone
        }
    })
}

router.get('/users', async (req, res)=>{
    try {
        const users = getApiInfo()
        res.json(users)
    } catch (error) {
        res.status(401).send(error.message)
    }
})