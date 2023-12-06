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
    findFromId(limit, offset) {
        return db('vitriqc').limit(limit).offset(offset);
    },
    async countAll() {
        const list = await db('vitriqc').count('Id as amount');
        return list[0].amount;
    }
}