import { storyService } from '../../services/story-service'

export default {
  state: {
    storys: null,
    users: null
  },
  getters: {
    storys(state) {
      return state.storys
    },
    users(state){
      return state.users
    }
  },
  mutations: {
    setStorys(state, { storys }) {
      state.storys = storys
    },
    removeStory(state, { id }) {
      const idx = state.storys.findIndex((story) => story._id === id)
      state.storys.splice(idx, 1)
    },
    saveStory(state, { story }) {
      const idx = state.storys.findIndex((currStory) => currStory._id === story._id)
      if (idx !== -1) state.storys.splice(idx, 1, story)
      else state.storys.unshift(story)
    },
    setUsers(state, {users}){
      console.log(users);
      state.users = users
    }
  },
  actions: {
    loadStorys({ commit }) {
      storyService.query().then((storys) => {
        commit({ type: 'setStorys', storys })
      })
    },
    async loadUsers({ commit }) {
      storyService.getUsers().then((users) => {
        commit({ type: 'setUsers', users })
      })
    },
    saveStory({ commit }, { story ,newComment=null}) {
     return storyService.save(story,newComment).then((story) => {
        // console.log(story);
        commit({ type: 'saveStory', story })
        return story
        
      })
    },

    saveToUserId( { commit }, {id} ){
      console.log(id);
      storyService.saveToUser(id)
},

async newFollowing( { commit }, userId ){
  const users = await storyService.saveNewfollowing(userId._id)
  console.log(users);
  commit({type:'setUsers', users})
  return users
},

    removeStory({ commit }, { id }) {
      storyService.remove(id).then(() => {
        commit({ type: 'removeStory', id })
      })
    },
   
    
  },
}
