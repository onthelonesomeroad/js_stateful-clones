'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  const cloneState = { ...state };
  const historyOfStates = [];

  for (const action of actions) {
    if (action.type === 'addProperties') {
      Object.assign(cloneState, action.extraData);
    }

    if (action.type === 'removeProperties') {
      for (const key of action.keysToRemove) {
        delete cloneState[key];
      }
    }

    if (action.type === 'clear') {
      for (const key in cloneState) {
        delete cloneState[key];
      }
    }
    historyOfStates.push({ ...cloneState });
  }

  return historyOfStates;
}

module.exports = transformStateWithClones;
