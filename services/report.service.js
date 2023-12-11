import db from '../utils/db.js'

// Sửa nó thành db report
export default {
    findAll() {
        return db('report');
    },

    add(entity) {
        return db('report').insert(entity);
    },
    findById(id) {
        return db('report').where('STT', id).first();
    },
    del(id) {
        return db('report').where('STT', id).del();
    },
    findFromId(limit, offset) {
        return db('report').limit(limit).offset(offset);
    },
    async countAll() {
        const list = await db('report').count('STT as amount');
        return list[0].amount;
    }
}