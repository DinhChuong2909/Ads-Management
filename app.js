// LIBRARY
import express from 'express'
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import expbs from 'express-handlebars'
import passport from 'passport'
import path from 'path'
import moment from 'moment'
import flash from 'connect-flash'
import session from 'express-session'

// PAGES
import governmentRouter from './routes/governmentRouter.js'
import homeRouter from './routes/people/homeRouter.js'
import reportRouter from './routes/people/reportRouter.js'
import aboutRouter from './routes/aboutRouter.js'
import phuongRouter from './routes/phuong/phuongRouter.js'
import quanRouter from './routes/quan/quanRouter.js'
import quanQuanTamRouter from './routes/quan/quanTamRouter.js'
import soRouter from './routes/so/soRouter.js'
import statisticsRouter from './routes/so/statisticsRouter.js'
// import publicRouter from "./routes/people/homeRouter.js"

// AUTHENTICATION ROUTERS
import forgotPasswordRouter from './routes/authentication/forgotPassword.js'
import loginRouter from './routes/authentication/login.js'
import registerRouter from './routes/authentication/register.js'
import updateRouter from './routes/authentication/update.js'
import logoutRouter from './routes/authentication/logout.js'

// DIRNAME
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express()

var DateFormats = {
  short: 'DD MMMM - YYYY',
  long: 'dddd DD.MM.YYYY HH:mm',
}

// HANDLEBARS
const hbs = expbs.create({
  defaultLayout: 'main',
  layoutsDir: path.join(__dirname, 'views/layouts'), // change layout folder name
  partialsDir: path.join(__dirname, 'views/pieces'), // change partials folder name
  helpers: {
    formatDate: function (datetime, format) {
      if (moment) {
        format = DateFormats[format] || format
        return moment(datetime).format(format)
      } else {
        return datetime
      }
    },
    eq: function (a, b, options) {
      return a === b ? options.fn(this) : options.inverse(this)
    },
  },
})

// SETTING ENGINE
app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')
app.set('views', './views')
app.use(express.urlencoded({ extended: true }))

app.use(
  session({
    secret: 'SangChuongHuyKTPM2AdsMng',
    resave: false,
    saveUninitialized: false,
    cookie: {},
  })
)

app.use(passport.authenticate('session'))

app.use(function (req, res, next) {
  var msgs = req.session.messages || []
  res.locals.messages = msgs
  res.locals.hasMessages = !!msgs.length
  req.session.messages = []
  next()
})

app.use(flash())

// AUTHENTICATION
app.use('/', loginRouter)
app.use('/', registerRouter)
app.use('/', updateRouter)
app.use('/', forgotPasswordRouter)
app.use('/', logoutRouter)

// PAGES
app.use('/static', express.static('static'))
// app.get("/", publicRouter);
// app.get('/', governmentRouter)

// Public
app.use('/report', reportRouter)
app.get('/report', reportRouter)
app.post('/report', reportRouter)
// app.use("/", allDataRouter);
app.post('/', homeRouter)
app.get('/', homeRouter)
app.get('/about', aboutRouter)
app.use('/uploads', express.static('uploads'));

// About
app.get('/about', aboutRouter)

// Phuong
app.get('/phuong', phuongRouter)
app.get('/phuong/diadiem', phuongRouter)
app.get('/phuong/diadiem/edit', phuongRouter)
app.post('/phuong/diadiem/edit/add', phuongRouter)
app.get('/phuong/baocao', phuongRouter)
app.get('/phuong/baocao/detail', phuongRouter)
app.post('/phuong/baocao/detail/:id', phuongRouter)
app.get('/phuong/capphep', phuongRouter)
app.get('/phuong/capphep/detail', phuongRouter)
app.post('/phuong/capphep/del', phuongRouter)
app.post('/phuong/capphep/edit/add', phuongRouter)
app.get('/phuong/capphep/edit/', phuongRouter)

// Quan
app.get('/quan', quanRouter)
app.get('/quan/diadiem', quanRouter)
app.get('/quan/diadiem/edit', quanRouter)
app.post('/quan/diadiem/edit/add', quanRouter)
app.get('/quan/baocao', quanRouter)
app.get('/quan/baocao/detail', quanRouter)
app.post('/quan/baocao/detail/:id', quanRouter)
app.get('/quan/capphep', quanRouter)
app.get('/quan/capphep', quanRouter)
app.get('/quan/capphep/edit', quanRouter)
app.post('/quan/capphep/edit/add', quanRouter)
app.post('/quan/capphep/del', quanRouter)
app.get('/quan/capphep/detail', quanRouter)
app.post('/quan/capphep/detail/:id', quanRouter)
app.get('/quan-select-quantam', quanQuanTamRouter)
app.post('/quan-select-quantam', quanQuanTamRouter)
app.get('/quan-select-quantam/detail', quanQuanTamRouter)

// So
app.get('/so', soRouter)
app.get('/so/add', soRouter)
app.get('/so/quan', soRouter)
app.get('/so/quan/:quan', soRouter)
app.get('/so/quangcao', soRouter)
app.get('/so/quangcao/:type', soRouter)
app.get('/so/diemdat', soRouter)
app.get('/so/bangqc', soRouter)
app.get('/so/statistics/select-ward-district', statisticsRouter)
app.get('/so/statistics-district/:ID', statisticsRouter)
app.get('/so/statistics-ward/:ID', statisticsRouter)
app.get('/so/yeu-cau-chinh-sua', soRouter)
app.get('/so/capphep', soRouter)
app.post('/so/capphep/:id', soRouter)
app.get('/so/loaibc', soRouter)
app.get('/so/loaibc/:type', soRouter)
app.get('/so/loaibc/:type/detail', soRouter)
app.get('/so/taikhoan', soRouter)
app.post('/so/taikhoan/del', soRouter)

// START
function serverStartedHandler() {
  console.log('Web server is running at http://localhost:3000')
}

app.listen(3000, serverStartedHandler)
