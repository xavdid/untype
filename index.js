#! /usr/bin/env node

'use strict'

const fs = require('fs')
// const glob = require('glob')
const rm = require('rimraf')

const config = JSON.parse(fs.readFileSync('tsconfig.json', 'utf8'))
const files = config.files

files.forEach((file) => {
  let fname = `${file.slice(0, -2)}js`
  rm(fname, (err) => {
    if (err) {
      console.error(`there was an issue deleting ${fname}`)
    } else {
      console.log(`deleted ${fname}`)
    }
  })
})
