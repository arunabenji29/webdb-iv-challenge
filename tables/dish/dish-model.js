const db = require('../../data/dbConfig.js')

module.exports = {
    getDishes,
    getDish,
    addDish,
    update,
    remove,
    // getStudents
};

function getDishes(){
    console.log(db('dishes'))
    return db('dishes');
}

function getDish(id){
    return db('dishes')
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

function addDish(dish){
    return db('dishes')
    .insert(dish,'id')
}

function update(id,changes){
    return db('dishes')
    .where({id})
    .update(changes)
}

function remove(id){
    return db('dishes')
    .where({id})
    .del()
}