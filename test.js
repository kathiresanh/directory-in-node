
const fs = require("fs");
const { type } = require("os");
const path = require('path');

d=(process.argv[2])
 var files = [];
fs.readdir(d,
{ withFileTypes: true },(err,file)=>{
  if(err) throw err;
  file.map((obj)=>{
    if((obj.isDirectory())==false){
      console.log(obj.name+"    "+"file")
    }else{
      console.log(obj.name+"   "+"folder")
    }
  })
  })


