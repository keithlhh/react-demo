#!/usr/bin/env node

/* eslint-disable, global-require, import/no-dynamic-require */

const fs = require('fs');
const path = require('path');

const chalk = require('chalk');
let flag = false;

module.exports = function(source) {
  // source 为compiler 传递给 loader 的一个文件的源内容

  // 该处理函数需要返回处理后的内容
  // console.log(source,'77777',this.query)
    return source
}