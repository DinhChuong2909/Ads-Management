import db from '../utils/db.js'

export default {
    findAll() {
        return db('vitriqc');
    },

    add(entity) {
        return db('vitriqc').insert(entity);
    },
    findById(id) {
        return db('vitriqc').where('Id', id).first();
    },
    del(id) {
        return db('vitriqc').where('Id', id).del();
    },
    findPageById(id, limit, offset) {
        return db('vitriqc').where('Id', id).limit(limit).offset(offset);
    },
    async countById(id) {
    const list = await db('vitriqc').where('Id', id).count('Id as amount');
    return list[0].amount;
    },
}