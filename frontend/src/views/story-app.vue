<template>
  <section class="story-app">

    <story-list @saveToUserId="saveToUserId" @removeStory="removeStory" @saveStory="saveStory" :storys="storysToShow" />
    <side :users="users"/>
  <router-view></router-view>
  </section>
</template>

<script>
import { storyService } from '../services/story-service.js'
import storyList from '../components/story-list.vue'
import side from './side.vue'

export default {
  name: 'story-app',
  data() {
    return {
      storys:null
    }
  },
  computed: {
    users(){
      return this.$store.getters.users
    },
    storysToShow() {
      return this.$store.getters.storys
    },
  },
  created() {},
  methods: {
   saveStory(story,newComment){
     this.$store.dispatch({ type: 'saveStory', story , newComment})
    },
    removeStory(storyId) {
      this.$store.dispatch({ type: 'removeStory', id: storyId })
    },
saveToUserId(storyId){
  console.log(storyId);
     this.$store.dispatch({ type: 'saveToUserId',  id:storyId })
    },

  },
  
  components: {
    storyList,
    side
  },
}
</script>
