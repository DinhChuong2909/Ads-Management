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
        return db('report').where('Id', id).first();
    },
    del(id) {
        return db('report').where('Id', id).del();
    },
    findFromId(limit, offset) {
        return db('report').limit(limit).offset(offset);
    },
    async countAll() {
        const list = await db('report').count('Id as amount');
        return list[0].amount;
    }
}