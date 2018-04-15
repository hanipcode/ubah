const sampleLanguage = require('./sampleLanguage');
const stateLib = require('./stateLib');
const changeLanguage = stateLib.changeLanguage;

class Ubah {
  constructor(store) {
    this.store = store;
    this.dictionary = {};
    this.useCustom = false;
  }
  changeToCustomReducer(
    options = {
      customStore: null,
      customReducerName: 'languageReducer',
      customFieldName: 'language'
    }
  ) {
    if (options) {
      if (options.customStore === null) {
        throw new Error(
          'You need to specify customStore field in order to use custom reducer'
        );
      }
      this.store = options.customStore;
      this.options = options;
      this.useCustom = true;
    }
  }
  init(languageDictionary = sampleLanguage) {
    this.dictionary = languageDictionary;
  }
  changeLanguage(language) {
    const dictionaryKeys = Object.keys(this.dictionary);
    let selectedLanguage;
    if (
      !language ||
      !this.dictionary[language] ||
      this.dictionary[language] === {}
    ) {
      selectedLanguage = dictionaryKeys[0];
    } else {
      selectedLanguage = language;
    }
    this.store.dispatch(changeLanguage(selectedLanguage));
  }
  getTranslation(word) {
    let currentLanguage;
    if (!this.useCustom) {
      currentLanguage = this.store.getState().language;
    } else {
      const reducerName = this.options.customReducerName;
      const fieldName = this.options.customFieldName;
      currentLanguage = this.store().getState()[reducerName][fieldName];
    }
    if (this.dictionary === {}) return word;
    if (!this.dictionary[currentLanguage][word]) return word;
    return this.dictionary[currentLanguage][word];
  }
}

module.exports = Ubah;
