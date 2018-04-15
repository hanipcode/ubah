const ubah = require('./index');

// Should Output Hello, World!
console.log(ubah.getTranslation('HELLO_WORLD'));

//fr is not a defined language
ubah.changeLanguage('fr');
//should output Hello, World !
console.log(ubah.getTranslation('HELLO_WORLD'));

ubah.changeLanguage('id');
// should Output Halom Dunia !
console.log(ubah.getTranslation('HELLO_WORLD'));

ubah.changeLanguage('en');

const newLanguageDictionary = {
  en: {
    SIMPLE: 'Ubah is a simple translation helper library'
  },
  id: {
    SIMPLE: 'Ubah adalah library untuk translasi yang mudah'
  },
  java: {
    SIMPLE: 'Ubah ki modul nggo mbantu nraslate bahasa'
  }
};

ubah.init(newLanguageDictionary);
// Should output Ubah is a simple translation helper library
console.log(ubah.getTranslation('SIMPLE'));

ubah.changeLanguage('java');
//shold output: Ubah ki modul nggo mbantu nraslate bahasa
console.log(ubah.getTranslation('SIMPLE'));
