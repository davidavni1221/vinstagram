<template>
    <div v-if="storyToEdit" class="modal-mask flex">
      <div  @click="goBack" class="modal-close-button-container">
                <div class="modal-close-btn">
                    <svg aria-label="Close" color="#FFFFFF" fill="#FFFFFF" height="24" role="img" viewBox="0 0 24 24"
                        width="18">
                        <polyline fill="none" points="20.643 3.357 12 12 3.353 20.647" stroke="currentColor"
                            stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></polyline>
                        <line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="3" x1="20.649" x2="3.354" y1="20.649" y2="3.354"></line>
                    </svg>
                </div>
            </div>
        <div class="modal-wrapper">
            <div class="modal-container">
                 <div class="flex modal-header"><div class="white">ffddd</div>
                <div>Create new post</div> <form @submit.prevent="submit">
                  <div class="btn-save-container">
                    <button v-if="imgUrl" class="btn-save bold" type="submit">Share</button></div></form>
                </div>
                <div class="modal-body">
                <div v-if="imgUrl" class="modal-details-upload flex">
                <div class="img-upload"><img class="img-for-upload" :src= this.imgUrl /></div>     
                  <div class="info-create-story">
                    <div class="user-profile-pic-name flex">
                      <img class="img-add" :src="user.imgUrl" > <div class="profile-name">{{user.fullname}}</div> </div>
                    <textarea class="textarea-input" v-model="storyToEdit.txt" 
                    placeholder="Write a caption..." ></textarea>
                    <div class="smile-upload"> 
                       <svg aria-label="Emoji" class="_ab6-" color="#8e8e8e" fill="#8e8e8e" height="20" role="img" viewBox="0 0 24 24" width="20"><path d="M15.83 10.997a1.167 1.167 0 101.167 1.167 1.167 1.167 0 00-1.167-1.167zm-6.5 1.167a1.167 1.167 0 10-1.166 1.167 1.167 1.167 0 001.166-1.167zm5.163 3.24a3.406 3.406 0 01-4.982.007 1 1 0 10-1.557 1.256 5.397 5.397 0 008.09 0 1 1 0 00-1.55-1.263zM12 .503a11.5 11.5 0 1011.5 11.5A11.513 11.513 0 0012 .503zm0 21a9.5 9.5 0 119.5-9.5 9.51 9.51 0 01-9.5 9.5z"></path></svg>
                        </div>
                    <input class="input-add-loc" v-model="storyToEdit.loc.name" type="text" placeholder="add location">
                 </div>
                    </div>
                 <div v-else class="modal-details">
                        <add-image-icon></add-image-icon>
                        <p class="modal-description">Drag photos and videos here</p>
                       <label><p class="modal-select-button button">Select from computer </p>
                       <input type="file" @change="saveImg" hidden></label>
                    </div>
                 </div>
             </div>
            </div>
     </div>
</template>
<script>
import { uploadImg } from '../services/img-upload.service'
import { storyService } from '../services/story-service'
import addImageIcon from "../assets/icons/add-image-icon.cmp.vue"
import emojisPicker from '../components/emojis-picker.vue'
export default {
     data() {
    return {
        user:null,
      storyToEdit: null,
      imgUrl: null ,
    }
  },
    created() {
    this.storyToEdit = storyService.getEmptyStory()
    console.log(this.storyToEdit);
    this.user = storyService.getUser()
  },
    components: {
        addImageIcon,
        emojisPicker,
        uploadImg
    },
    methods: {
         saveImg(ev) {
            console.log(ev);
            var file
             file = ev.target.files[0]
            this.onUploadFile(file)
        },
        async onUploadFile(file) {
            const res = await uploadImg(file)
            console.log(res);
            console.log(res.url);

            this.imgUrl=res.url
            this.storyToEdit.imgUrl=this.imgUrl
        
    },
goBack(){
this.$router.push('/story')
},
submit() {
 console.log(this.storyToEdit); 
      this.$store.dispatch({ type: 'saveStory', story: this.storyToEdit }).then(() => {
        this.$router.push('/story')
      })
    },
    },
}
</script>
<style>
</style>
