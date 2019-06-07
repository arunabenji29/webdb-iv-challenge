const db = require('../../data/dbConfig.js')

module.exports = {
    find,
    findById,
    add,
    update,
    remove,
    
};

function find(){
    console.log(db('measurements'))
    return db('measurements');
}

function findById(id){
    return db('measurements')
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

function add(measurement){
    return db('measurements')
    .insert(measurement,'id')
}

function update(id,changes){
    return db('measurements')
    .where({id})
    .update(changes)
}

function remove(id){
    return db('measurements')
    .where({id})
    .del()
}