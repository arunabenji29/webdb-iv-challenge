const express = require('express')
const helmet = require('helmet')

const DishRouter = require('./tables/dish/dish-router.js')
const RecipeRouter = require('./tables/recipe/recipe-router.js')
const RecipeIngredientRouter = require('./tables/recipe-ingredient/recipe-ingredient-router.js')
const IngredientRouter = require('./tables/ingredient/ingredient-router.js')
const QuantityRouter = require('./tables/quantity/quantity-router.js')

const server = express();

server.use(helmet());

server.use(express.json());

server.use('/dishes',DishRouter)
server.use('/recipes',RecipeRouter)
server.use('/recipe-ingredient',RecipeIngredientRouter)
server.use('/ingredient',IngredientRouter)
server.use('/quantity',QuantityRouter)

const port = 3500;

server.listen(port, ()=>
console.log(`api running at http://localhost:${port}`)
)