// const express = require('express');
const LocalStorage = require('node-localstorage').LocalStorage;
if (typeof localStorage === "undefined" || localStorage === null) {
  localStorage = new LocalStorage('./scratch');
}


const User = {
    getID : () => localStorage.getItem('NVTUserID'),
}

module.exports = User;
