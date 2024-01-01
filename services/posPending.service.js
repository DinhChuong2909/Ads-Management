import db from '../utils/db.js'

// Sửa nó thành db report
export default {
    findAll() {
        return db('updatepos');
    },

    add(entity) {
        return db('updatepos').insert(entity);
    },
    findById(id) {
        return db('updatepos').where('ID', id).first();
    },
    del(id) {
        return db('updatepos').where('ID', id).del();
    },
    findFromId(limit, offset) {
        return db('updatepos').limit(limit).offset(offset);
    },
    async countAll() {
        const list = await db('updatepos').count('ID as amount');
        return list[0].amount;
    },
    updateDuyetById(id, status)
    {
      return db('updatepos').where('ID', id).update('Duyet', status);
    }
}