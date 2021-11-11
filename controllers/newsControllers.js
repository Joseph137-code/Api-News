const {response} = require('express')
const axios = require('axios')
require('dotenv').config()
const key = process.env.KEY



const welcome = (req, res = response) => {
    res.json('Welcome to my News API')
}

const getNews = async (req, res= response) =>{
    try {
        const {data} = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${key}`)
        res.status(201).json({ message: 'News ', news: data.articles });
    } catch (error) {
        console.log(error)
    }
}

const newsCategory = async (req, res=response) => {
    const category = req.params.category
    try {
        const {data} = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${key}`)
        res.status(201).json({ message:`${category}`, news: data.articles });
    } catch (error) {
        console.log(error)
    }

}

module.exports = {welcome, getNews, newsCategory}