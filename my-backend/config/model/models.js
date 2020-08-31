const connection = require('../database')
const mongoose = require('mongoose')
require('./messages')(mongoose, connection)
require('./users')(mongoose, connection)
module.exports = connection