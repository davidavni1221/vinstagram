<template>
  <section class="story-app">
    <story-list @saveToUserId="saveToUserId" @removeStory="removeStory" @saveStory="saveStory" :storys="storysToShow"  />
    <side  :user="user" :users="users" @following="following"/>
  <router-view></router-view>
  </section>
</template>
<script>
import storyList from '../components/story-list.vue'
import side from '../components/side.vue'

export default {
  name: 'story-app',
  data() {
    return {
      storys:null
    }
  },
  computed: {
    user(){
      return this.$store.getters.user
    },
    users(){
      return this.$store.getters.users
    },
    storysToShow() {
      return this.$store.getters.storys
    },
  },
  created() {},
  methods: {
    following(userId){
     this.$store.dispatch({ type: 'newFollowing',  _id:userId })
  },
   saveStory(story,newComment){
     this.$store.dispatch({ type: 'saveStory', story , newComment})
    },
    removeStory(storyId) {
      this.$store.dispatch({ type: 'removeStory', id: storyId })
    },
saveToUserId(storyId){
     this.$store.dispatch({ type: 'saveToUserId',  id:storyId })
    },
  },
  components: {
    storyList,
    side
  },
}
</script>
