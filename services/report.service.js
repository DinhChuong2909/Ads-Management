import db from '../utils/db.js'

// Sửa nó thành db report
export default {
  findAll() {
    return db('report')
  },
  add(entity) {
    return db('report').insert(entity)
  },
  findById(id) {
    return db('report').where('STT', id).first()
  },
  findByAdsID(adsID) {
    return db('report').where('AdsID', adsID)
  },
  getAdsID() {
    return db('report').select('AdsID')
  },
  del(id) {
    return db('report').where('STT', id).del()
  },
  findFromId(limit, offset) {
    return db('report').limit(limit).offset(offset)
  },
  updateXuLyByID(id, xl) {
    return db('report').where('STT', id).update('Xuly', xl)
  },
  updateNDXuLyByID(id, ndxl) {
    return db('report').where('STT', id).update('NoiDungXuLy', ndxl)
  },
  findReportType(id) {
    return db('reporttype').where('ID', id).first()
  },
  async countAll() {
    const list = await db('report').count('STT as amount')
    return list[0].amount
  },
}
