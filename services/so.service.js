import db from '../utils/db.js'

export default {
  findAllQuan() {
    return db('quan').orderBy('ID', 'asc')
  },
  findFromIdQuan(limit, offset) {
    return db('quan').orderBy('ID', 'asc').limit(limit).offset(offset)
  },
  async countAllQuan() {
    const list = await db('quan').count('ID as amount')
    return list[0].amount
  },
  findAllPhuong() {
    return db('phuong').orderBy('ID', 'asc')
  },
  findFromIdPhuong(id, limit, offset) {
    return db('phuong').where('ThuocQuan', id).orderBy('ID', 'asc').limit(limit).offset(offset)
  },
  async countAllPhuong(id) {
    const list = await db('phuong').where('ThuocQuan', id).count('ID as amount')
    return list[0].amount
  },
  add(entity) {
    return db('quan').insert(entity)
  },
  findAdsType(limit, offset) {
    return db('ads').distinct('LoaiBangQC').limit(limit).offset(offset)
  },
  findFromAdsType(type, limit, offset) {
    return db('ads').where('LoaiBangQC', type).orderBy('ID', 'asc').limit(limit).offset(offset)
  },
  findReportType(limit, offset) {
    return db('report').distinct('HinhThucReport').limit(limit).offset(offset)
  },
  findFromReportType(type, limit, offset) {
    return db('report').where('HinhThucReport', type).orderBy('STT', 'asc').limit(limit).offset(offset)
  },
  async countAdsType() {
    const list = await db('ads').distinct('LoaiBangQC')
    return list.length
  },
  async countReportType() {
    const list = await db('report').distinct('HinhThucReport')
    return list.length
  },
  async countFromAdsType(type) {
    const list = await db('ads').where('LoaiBangQC', type).count('Id as amount')
    return list.length
  },
  async countFromReportType(type) {
    const list = await db('report').where('HinhThucReport', type).count('STT as amount')
    return list.length
  },
  //   findById(id) {
  //     return db("quan").where("ID", id).first();
  //   },
  //   del(id) {
  //     return db("quan").where("ID", id).del();
  //   },
  //   findFromId(limit, offset) {
  //     return db("quan").orderBy("ID", "asc").limit(limit).offset(offset);
  //   },
  //   async countAll() {
  //     const list = await db("quan").count("ID as amount");
  //     return list[0].amount;
  //   },
}
