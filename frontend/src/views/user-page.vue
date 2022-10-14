<template><section class="user-page-container flex-column">
  <div class="info-prfile-page flex">
    <div class="img-profile"><img :src="user.imgUrl"></div>
    <div class="flex-column name-info-profile"><p class="name-user regular">{{user.username}}</p>
    <div class="flex post-follo regular"><p><span class="bold">{{user.storys.length}}&nbsp;</span>post</p><p><span class="bold">{{user.followers.length}}&nbsp;</span>followers</p><p><span class="bold">{{user.following.length}}&nbsp;</span>following</p></div>
    <p class="bold name-profile">{{user.fullname}}</p>
    </div>
    </div>
    <div  class="posts-saved-container flex">
      
      <div v-if="posts" class="posts-saved flex bold-12-regular-grey">
<svg  aria-label="" class="_ab6-" color="#262626" fill="#262626" height="12" role="img" viewBox="0 0 24 24" width="12"><rect fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" width="18" x="3" y="3"></rect><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="9.015" x2="9.015" y1="3" y2="21"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="14.985" x2="14.985" y1="3" y2="21"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="21" x2="3" y1="9.015" y2="9.015"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="21" x2="3" y1="14.985" y2="14.985"></line></svg>   
 <p class="posts-save-toggle bold">POSTS</p>
    <svg @click="toggleSaved" aria-label="" class="_ab6- toggle" color="#8e8e8e" fill="#8e8e8e" height="12" role="img" viewBox="0 0 24 24" width="12"><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg>
    <p class="toggle" @click="toggleSaved">SAVED</p>  
     <!-- v-for ="story in user.savedStoryIds" :key="story._id" -->
     </div>

      <div v-else class="posts-saved flex bold-12-regular-grey">
<svg @click="togglePosts" aria-label="" class="_ab6- toggle" color="#8e8e8e" fill="#8e8e8e" height="12" role="img" viewBox="0 0 24 24" width="12"><rect fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" width="18" x="3" y="3"></rect><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="9.015" x2="9.015" y1="3" y2="21"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="14.985" x2="14.985" y1="3" y2="21"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="21" x2="3" y1="9.015" y2="9.015"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="21" x2="3" y1="14.985" y2="14.985"></line></svg>
 <p class="toggle"  @click="togglePosts">POSTS</p>
<svg aria-label="" class="_ab6-" color="#262626" fill="#262626" height="12" role="img" viewBox="0 0 24 24" width="12"><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg>
    <p class="posts-save-toggle bold">SAVED</p>  
     </div></div>

  <div v-if="posts" class="img-container-user">
  <div class="img-user" v-for ="story in user.storys" :key="story._id">
    <img @click.native="toComments(story._id)" :src="story.imgUrl" >
    </div>
  </div>

  <div v-else class="img-container-user">
  <div class="img-user" v-for ="story in saved" :key="story._id">
    <img  @click.native="toComments(story._id)" :src="story.imgUrl" >
    </div>
  </div>

  <router-view></router-view>
  </section>
  
</template>

<script>
import { storyService } from '../services/story-service'
export default {
data() {
    return {
        user:null,
        posts:true,
       saved:[]
    }
  },
     created() {
    this.user = storyService.getUser()
    console.log(this.user.storys);
    for (var i = 0; i < this.user.savedStoryIds.length; i++) {
  var id=this.user.savedStoryIds[i]._id
    storyService.getById(id).then((value)=>this.saved.push(value)) 
    }
    console.log(this.saved);
  },
  methods:{
   
toStory(){
       this.$router.push(`/story`)
    },
    toComments(storyId){
       this.$router.push(`/user-page/comments/`+storyId)
    },
  },
  computed:{
toggleSaved(){
this.posts=false
console.log(this.posts);
},

togglePosts(){
  this.posts=true
  console.log(this.posts);
},
  },
 
  
}
</script>
<style>
</style>