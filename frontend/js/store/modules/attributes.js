/**
 * Attributes
 *
 * Create new attributes (categories, tags...) in forms
 */

import { ATTRIBUTES } from '../mutations'

const state = {
  options: {}
}

// getters
const getters = {
  optionsByName (state) {
    return name => state.options[name] || []
  }
}

const mutations = {
  [ATTRIBUTES.EMPTY_OPTIONS] (state, name) {
    if (state.options[name]) {
      delete state.options[name]
    }
  },
  [ATTRIBUTES.UPDATE_OPTIONS] (state, attributes) {
    const name = attributes.name
    const options = attributes.options
    let currentOptions = []

    // Update existing form field
    if (state.options[name]) {
      currentOptions = state.options[name]

      delete state.options[name]
    }

    // Make sure there is no duplicates
    if (Array.isArray(options)) {
      options.forEach(function (option) {
        const currentOptionIndex = currentOptions.findIndex(currentOption => currentOption.value === option.value)
        if (currentOptionIndex === -1) {
          currentOptions.push(option)
        }
      })
    }

    state.options[name] = currentOptions
  }
}

const actions = {}

export default {
  state,
  getters,
  mutations,
  actions
}
