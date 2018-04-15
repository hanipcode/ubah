// Action Types
const CHANGE_LANGUAGE = 'changeLanguage';

// Action Creator
function changeLanguage(language) {
  return {
    type: CHANGE_LANGUAGE,
    language: language
  };
}

const initialState = {
  language: 'en'
};

// reducer
function reducers(state = initialState, action) {
  if (action.type === CHANGE_LANGUAGE) {
    return Object.assign(
      {},
      {
        ...state,
        language: action.language
      }
    );
  }
  return state;
}

function getLanguage(state) {
  return state.language;
}

module.exports = {
  reducers,
  changeLanguage,
  getLanguage
};
