const db = require('../../data/dbConfig.js')

module.exports = {
    find,
    findById,
    add,
    update,
    remove,
    // getStudents
};

function find(){
    console.log(db('recipes_ingredients'))
    return db('recipes_ingredients');
}

function findById(id){
    return db('recipes_ingredients')
    .where({id})
    .first();
}

// function getStudents(id){
//     // return db.select('students.id','students.name')
//     // .from('students')
//     // .innerJoin('cohorts',{'students.cohort_id':'cohorts.id'})
//     return db('dishes')
//     .where({'cohort_id':id})

// }

function add(rec){
    return db('recipes_ingredients')
    .insert(rec,'id')
}

function update(id,changes){
    return db('recipes_ingredients')
    .where({id})
    .update(changes)
}

function remove(id){
    return db('recipes_ingredients')
    .where({id})
    .del()
}