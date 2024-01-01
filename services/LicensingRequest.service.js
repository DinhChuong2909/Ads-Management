import db from '../utils/db.js'

export default {
    findAll() {
        return db('capphep').orderBy('ID', 'asc');
    },
    add(entity) {
        return db('capphep').insert(entity);
    },
    findById(id) {
        return db('capphep').where('ID', id).first();
    },
    del(id) {
        return db('capphep').where('ID', id).del();
    },
    findFromId(limit, offset) {
        return db('capphep').orderBy('ID', 'asc').limit(limit).offset(offset);
    },
    findFromPhuong(limit, offset, phuong, quan) {
        return db('capphep').orderBy('ID', 'asc').where('Phuong', phuong).where('Khuvuc', quan).limit(limit).offset(offset);
    },
    findFromQuan(limit, offset, quan) {
        return db('capphep').orderBy('ID', 'asc').where('Khuvuc', quan).limit(limit).offset(offset);
    },
    async countAll() {
        const list = await db('capphep').count('ID as amount');
        return list[0].amount;
    },
    async countPhuong(phuong, quan) {
        const list = await db('capphep').where('Phuong', phuong).where('Khuvuc', quan).count('ID as amount');
        return list[0].amount;
    },
    async countQuan(quan) {
        const list = await db('capphep').where('Khuvuc', quan).count('ID as amount');
        return list[0].amount;
    },
    updateDuyetById(id, status)
    {
      return db('capphep').where('ID', id).update('Duyet', status);
    }
  
}