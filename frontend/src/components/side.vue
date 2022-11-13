<template>
<section class="side flex-column ">
   <div @click="toUserPage" class="flex side-name-pic">
    <img class="profile-pic hover" :src="user.imgUrl"> 
    <div class="flex-column hover"><p class="bold">{{user.username}}</p>
    <p class="font-light-medium regular">{{user.fullname}}</p></div></div>
   <div class="bold unic-font"><span> Suggestions For You</span></div>
   <div class="suggestions flex" v-for="user in users" :key="user._id">
      <div class="suggestions-pic-name flex">
        <img class="profile-pic" :src="user.imgUrl">
        <p class="bold">{{user.fullname}}</p>
      </div>
      <p v-if="!user.isFollowed" @click="following(user._id)" class="follow-p bold-12 hover">Follow</p>
      <p v-else class="follow-q bold-12">Following</p>
    </div>
  </section>
</template>

<script>
import { storyService } from '../services/story-service'

export default {
name: 'side',
props:{
  user:Object,
  users:Array
  
},
  data() {
    return {
    //  user:null,
    //  followBtn:false
    }
  },
  created() {
    // this.user= storyService.getUser().then(user=>{return (user)})
  },
  methods: {

   following(userId){
    this.$emit('following', userId)
  },
    toUserPage(){
       this.$router.push(`/user-page`)
    }

  },
  computed :{
  
  }
}
</script>

