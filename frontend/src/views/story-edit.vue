<template>
  <section v-if="storyToEdit" class="edit-new-story">
      <div class="edit-img">
        <input type="file" @change="saveImg">
        
      </div>
    <form @submit.prevent="submit" class="form">
      <div class="form-control">
        <label for="txt" class="form-label"></label>
        <input required v-model="storyToEdit.txt" id="txt" type="text" class="form-input"
          placeholder="Story Text..." />
      </div>
      <div class="btn-group">
        <button type="submit">save</button>
        <button @click="goBack" class="btn btn-danger-text">go back</button>
      </div>
    </form>
  </section>
</template>

<script>
import { storyService } from '../services/story-service'

export default {
  name: 'story-edit',
  data() {
    return {
      storyToEdit: null,
      imgUrl: null ,
    }
  },
  created() {
    this.storyToEdit = storyService.getEmptyStory()
  },
  methods: {
        saveImg(ev) {
           console.log(ev);
          var file
        file = ev.target.files[0].name
        console.log(file);
      this.imgUrls='img/'+file
      this.storyToEdit.imgUrl=this.imgUrls
      console.log(this.imgUrls);
    },
    goBack() {
      console.log(this.storyToEdit);
      this.$router.push('/story')
    },
    submit() {
      
      this.$store.dispatch({ type: 'saveStory', story: this.storyToEdit }).then(() => {
        this.$router.push('/story')
      })
    },
  },
}
</script>
