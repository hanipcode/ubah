const redux = require('redux');
const stateLib = require('./stateLib');
const Ubah = require('./ubah');
const createStore = redux.createStore;
const reducers = stateLib.reducers;

const store = createStore(reducers);

const ubah = new Ubah(store);
ubah.init();

module.exports = ubah;
