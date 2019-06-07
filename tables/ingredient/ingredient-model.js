const db = require('../../data/dbConfig.js')

module.exports = {
    find,
    findById,
    add,
    update,
    remove,
    
};

function find(){
    console.log(db('ingredients'))
    return db('ingredients');
}

function findById(id){
    return db('ingredients')
    .where({id})
    .first();
}

function add(ingredient){
    return db('ingredients')
    .insert(ingredient,'id')
}

function update(id,changes){
    return db('ingredients')
    .where({id})
    .update(changes)
}

function remove(id){
    return db('ingredients')
    .where({id})
    .del()
}