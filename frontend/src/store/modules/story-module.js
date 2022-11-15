import { storyService } from '../../services/story-service'

export default {
  state: {
    storys: null,
    users: null,
    user:null
  },
  getters: {
    storys(state) {
      return state.storys
    },
    users(state){
      return state.users
    },
    user(state){
      return state.user  
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
      state.users = users
    },
    setUser(state, {user}){
      state.user = user
    },
  },
  actions: {
    async loadStorys({ commit }) {
      const storys= await storyService.query()
        commit({ type: 'setStorys', storys 
    })
    },
    async loadUsers({ commit }) {
      storyService.getUsers().then((users) => {
        commit({ type: 'setUsers', users })
      })
    },
    async loadUser({ commit }) {
      storyService.getUser().then((user) => {
        commit({ type: 'setUser', user })
      })
    },
    saveStory({ commit }, { story ,newComment=null}) {
     return storyService.save(story,newComment).then((story) => {
        commit({ type: 'saveStory', story })
        return story
        
      })
    },

      async saveToUserId( { commit }, {id} ){
      const user = await storyService.saveToUser(id)
      commit({type:'setUser', user})
      const story=await storyService.changeSaved(id)
      let storys =await storyService.query() 
      // let index= storys.findIndex( el => el._id === id )
      // storys.splice(index,1,story)
      commit({type:'setStorys', storys})
},

async newFollowing( { commit }, {_id} ){
  const [users,user] = await storyService.saveNewfollowing(_id)
  commit({type:'setUsers', users})
  commit({type:'setUser', user})
},

    removeStory({ commit }, { id }) {
      storyService.remove(id).then(() => {
        commit({ type: 'removeStory', id })
      })
    },
   
    
  },
}
