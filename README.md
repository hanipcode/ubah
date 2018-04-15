# ubah
Ubah is a simple translation helper library

## INSTALLATION

To install this module, use `npm install --save ubah`

## USAGE
To setup the library, you need to provide a dictionary/js object of the translation with this format
```javascript
// languageDictionary.js
{
  en: {
    HELLO_WORLD: 'Hello, World !'
  }
  id: {
    HELLO_WORLD: 'Halo, Dunia !'
  }
}
```
then you can use this module like this.
```javascript
// index.js
const ubah = require('ubah');
const dictionary = require('./language');

// init ubah with your dictionary
ubah.init(dictionary);


// change current used language
ubah.changeLanguage('id');

// get translation
const translatedHello = ubah.getTranslation('HELLO_WORLD');
// will output `Halo, Dunia !`
console.log(translatedHello);

```

```javascript
// your-file.js
// you only need to import ubah again, no need to re init with language dictionary
// also the language set is global, so once you use a changeLanguage function it will be changged
// in everywhere you used it
const ubah = require('ubah');

const translatedHello2 = ubah.getTranslation('HELLO_WORLD');
// will still output `Halo, Dunia !` because we set it to 'id' on index.js
console.log(translatedHello2);
```
## NOTES
1. The `ubah.changeLanguage()` function will change the current used language globally on every ubah instance.
2. You only need to use `ubah.init()` function once to init ubah with your dictionary file.
3. Ubah state is build on top of redux and you can actually provide custom reducer (more notes on this later)
