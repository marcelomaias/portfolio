import Vuex from 'vuex'

import data from '../api/data'  // Import the data

const createStore = () => {
  return new Vuex.Store({
    state: {
      projects: [],
      filterBtn: ''
    },
    getters: {
      // filteredProjects: (state) => (setSkill) => {
      //   return state.projects.includes(project => project.skills(setSkill))
      // }
      // filteredProjects: state => {
      //   return state.projects.filter((project) => project.active)
      // }
    },
    actions: {
      getProjects (context) {
        context.commit('setProjects') // Commits the mutation
      }
    },
    mutations: {
      setProjects (state) {
        state.projects = data.projectsList() // Mutate state with the imported data
      }
    }
  })
}

export default createStore