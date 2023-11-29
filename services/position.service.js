import db from '../utils/db.js'

export default {
    findAll() {
        return db('vitriqc');
    },

    add(entity) {
        return db('vitriqc').insert(entity);
    },
    findById(id) {
        return db('vitriqc').where('ID', id).first();
    },
    del(id) {
        return db('vitriqc').where('ID', id).del();
    },
}