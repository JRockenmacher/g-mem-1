const pg = require('./knexConfig')

function listResolution(){
    return pg('resolution')
}
// read(id){
//     return database('resolution').select().where('id', id).first()
// },
// create(resolution){
//     return database('resolution').insert(resolution).returning('*').then(record => record[0])
// },
// update(id, resolution){
//     return database('resolution').update(resolution).where('id', id).returning('*').then(record => record[0])
// },
// delete(id){
//     return database('resolution').delete().where('id', id)
// }
module.exports = {
  listResolution
};


