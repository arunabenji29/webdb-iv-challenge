const db = require('../../data/dbConfig.js')

module.exports = {
    getRecipes,
    findById,
    addRecipe,
    update,
    remove,
    
};

function getRecipes(){
    console.log(db('recipes'))
    return db('recipes');
}

function findById(id){
    return db('recipes')
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

function addRecipe(recipe){
    return db('recipes')
    .insert(recipe,'id')
}

function update(id,changes){
    return db('recipes')
    .where({id})
    .update(changes)
}

function remove(id){
    return db('recipes')
    .where({id})
    .del()
}