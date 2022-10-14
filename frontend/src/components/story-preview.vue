<template>
<section>

  <li class="story-preview">
   
      <div class="top-info"><div class="flex">
        <img class="profile-pic" :src="story.by.imgUrl">
        <div class="name-place">
        <p class="bold">{{ story.by.fullname }}</p>
        <!-- <p><span>date:</span> {{ story.creaetedAt }}</p> -->
        <p class="bold-12-regular"> {{ story.loc.name }}</p>
        <!-- <p><span>place:</span> {{ story.loc.lng }}</p> -->
        </div></div>
        <button @click="removeStory(story._id)" class="info-button"><svg aria-label="More options" class="_ab6- option" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12" cy="12" r="1.5"></circle><circle cx="6" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg></button>
        </div>
        <img class="story-img" :src="story.imgUrl">

        <div class="bottom-info flex-column">

          <div class="icons flex">
<div  class="left-icons">
  <svg v-if="!isRed" @click.native="makeLike(story)" aria-label="Like" class="_ab6- hover" :class="{ red: isRed }" color="#ff0000" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path></svg> 
<svg v-else @click.native="makeLike(story)" class="hover" color="#ed4956" fill="#ed4956" height="24" role="img" viewBox="0 0 48 48" width="24"><path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>
<svg @click.native="toComments(story._id)" aria-label="Comment" class="_ab6- hover" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>
<svg aria-label="Share Post" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon></svg>
</div>
<div v-if="!isBlack" @click="savePost(story._id)" class="right-icon hover"><svg aria-label="Save" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg>  </div>
<div v-else @click="savePost(story._id)" class="right-icon hover"><svg aria-label="Remove" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M20 22a.999.999 0 01-.687-.273L12 14.815l-7.313 6.912A1 1 0 013 21V3a1 1 0 011-1h16a1 1 0 011 1v18a1 1 0 01-1 1z"></path></svg>  </div>

          </div>

          <div class="likes bold" v-if="story.likedBy" ><span>{{story.likedBy.length}}</span>&nbsp;likes</div>
          <div class="story-discription flex" v-if="story.txt"> <p class="bold">{{story.by.fullname}}</p><p class="regular">&nbsp;{{story.txt}}</p></div>
          <div v-if="story.comments" class="viwe-comments-conteiner">
          <p @click.native="toComments(story._id)" class="font-light-medium regular viwe-comments-to">View all {{story.comments.length}} comments </p>
          </div>
          <p class="date regular">{{ story.createdAt }}</p>
          
          <div class="add-comment">
            <svg aria-label="Emoji" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M15.83 10.997a1.167 1.167 0 101.167 1.167 1.167 1.167 0 00-1.167-1.167zm-6.5 1.167a1.167 1.167 0 10-1.166 1.167 1.167 1.167 0 001.166-1.167zm5.163 3.24a3.406 3.406 0 01-4.982.007 1 1 0 10-1.557 1.256 5.397 5.397 0 008.09 0 1 1 0 00-1.55-1.263zM12 .503a11.5 11.5 0 1011.5 11.5A11.513 11.513 0 0012 .503zm0 21a9.5 9.5 0 119.5-9.5 9.51 9.51 0 01-9.5 9.5z"></path></svg>
            <input class="input-comment" v-if="txtInInput" v-model="newComment.txt" type="text" placeholder="Add a comment...">
            <button @click="postComment(story)" class="btn-post bold" :class="{ typing: isActive }">Post</button></div>
        
        </div>
      
  </li>
  </section>
</template>

<script>
import { utilService } from '../services/util-service'
export default {
  name: 'story-preview',
  props: {
    story: Object,
  },
  data(){

    
    return{
      isActive: false,
      isRed:false,
      isBlack:false,
      newLike:
      {
        _id: "u100",
      fullname: "Johnny Deph",
      imgUrl: "img/profile-user.jpg",
      remove:null},

      newComment:
      {
      id: utilService.makeId(),
        by: {
          _id: "u100",
          fullname: "Johnny Deph",
          imgUrl: "img/profile-user.jpg"
        },
        txt: "",
        createdAt: new Date().toDateString(),
        likedBy: [ // Optional
          {
            _id: "u102",
            fullname: "Shir Levi",
            imgUrl: "img/profile-2.png"
          }
        ]}
    }
  },
  components: {
  },
  computed : {

 txtInInput(){
  if(this.newComment.txt!=''){
    this.isActive=true
  }
  else this.isActive=false
  return true
}
  },
  methods: {
    toComments(storyId){

      // console.log(this.story._id);
       this.$router.push(`/story/comments/`+storyId)
    },
    postComment(story){
    this.$emit('saveStory', story,JSON.parse(JSON.stringify(this.newComment)) )
    this.newComment.txt=''
    },

    makeLike(story){
      if(this.isRed===false){this.isRed=true
      this.$emit('saveStory', story,JSON.parse(JSON.stringify(this.newLike)) )
      this.newLike.remove=true}

      else {this.isRed=false
      this.$emit('saveStory', story,JSON.parse(JSON.stringify(this.newLike)) )
      this.newLike.remove=null}
    },

    savePost(storyId){
      this.isBlack=true
this.$emit('saveToUserId', storyId)
    },
    
    removeStory(storyId){
    this.$emit('removeStory', storyId)
   }
  },
}
</script>

