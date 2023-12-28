import db from '../utils/db.js'

export default {
    findAll() {
        return db('ads').orderBy('Id', 'asc');
    },
    add(entity) {
        return db('ads').insert(entity);
    },
    findById(id) {
        return db('ads').where('Id', id).first();
    },
    del(id) {
        return db('ads').where('Id', id).del();
    },
    findFromId(limit, offset) {
        return db('ads').orderBy('Id', 'asc').limit(limit).offset(offset);
    },
    async countAll(phuong) {
        const list = await db('ads').where('Phuong', phuong).count('Id as amount');
        return list[0].amount;
    },
}