<template>
  <ul v-if="storys" class="list">
    <story-preview @saveToUserId="saveToUserId" @removeStory="removeStory" @saveStory="saveStory"  v-for="story in storys" :story="story" :key="story._id" />
  </ul>
</template>

<script>
import storyPreview from './story-preview.vue'

export default {
  props: {
    storys: {
      type: Array,
      required: true,
    },
  },
  components: {
    storyPreview,
  },
  methods: {
    removeStory(storyId) {
      this.$emit('removeStory', storyId)
    },
     saveStory(story,newComment){
     this.$emit('saveStory', story,newComment)
    
    },
    saveToUserId(storyId){
    this.$emit('saveToUserId', storyId)
    },
  },
}
</script>
