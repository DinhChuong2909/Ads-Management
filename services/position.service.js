import db from '../utils/db.js'

export default {
  findAll() {
    return db('ads').orderBy('Id', 'asc')
  },
  findPhuong(phuong, quan) {
    return db('ads').orderBy('Id', 'asc').where('KhuVuc', quan).where('Phuong', phuong)
  },
  findQuan(quan) {
    return db('ads').orderBy('Id', 'asc').where('KhuVuc', quan)
  },
  findDiemDat(limit, offset) {
    return db('ads').orderBy('Id', 'asc').where('QuyHoach', 0).limit(limit).offset(offset)
  },
  findBangQC(limit, offset) {
    return db('ads').orderBy('Id', 'asc').where('QuyHoach', 1).limit(limit).offset(offset)
  },
  add(entity) {
    return db('ads').insert(entity)
  },
  findById(id) {
    return db('ads').where('Id', id).first()
  },
  findByPhuong(idPhuong) {
    return db('ads').where('Phuong', idPhuong)
  },
  del(id) {
    return db('ads').where('Id', id).del()
  },
  findFromId(limit, offset) {
    return db('ads').orderBy('Id', 'asc').limit(limit).offset(offset)
  },
  findFromPhuong(limit, offset, phuong, quan) {
    return db('ads').orderBy('Id', 'asc').where('KhuVuc', quan).where('Phuong', phuong).limit(limit).offset(offset)
  },
  findFromQuan(limit, offset, quan) {
    return db('ads').orderBy('Id', 'asc').where('KhuVuc', quan).limit(limit).offset(offset)
  },
  async countAll() {
    const list = await db('ads').count('Id as amount')
    return list[0].amount
  },
  async countFromPhuong(phuong, quan) {
    const list = await db('ads').where('KhuVuc', quan).where('Phuong', phuong).count('Id as amount')
    return list[0].amount
  },
  async countDiemDat(quyhoach) {
    const list = await db('ads').where('QuyHoach', quyhoach).count('Id as amount')
    return list[0].amount
  },
  async countBangQC(quyhoach) {
    const list = await db('ads').where('QuyHoach', quyhoach).count('Id as amount')
    return list[0].amount
  },
  
}
