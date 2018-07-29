<template>
  <div id="app">
    <div class="app-phone">
      <div class="phone-header">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/vue_gram_logo_cp.png" />
        <a class="cancel-cta"
           v-if="step === 2 || step === 3" 
           @click="goToHome">
            Cancel
        </a>
        <a class="next-cta"
           v-if="step === 2"
           @click="next">
            Next
        </a>
        <a class="next-cta"
           v-if="step === 3"
           @click="sharePost">
            Share
        </a>
      </div>

      <phone-body></phone-body>

      <div class="phone-footer">
        <div class="home-cta" @click="goToHome">
          <i class="fas fa-home fa-lg"></i>
        </div>
        <div class="upload-cta">
          <input type="file"
            name="file"
            id="file"
            class="inputfile"
            @change="uploadImage"/>
          <label for="file">
            <i class="far fa-plus-square fa-lg"></i>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PhoneBody from './components/PhoneBody'

import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    'phone-body': PhoneBody
  },
  methods: {
    ...mapActions({
      goToHome: 'resetValues',
      setPostImage: 'setPostImage',
      setStep: 'setStep',
      setPost: 'setNewPost'
    }),
    uploadImage (evt) {
      const files = evt.target.files;
      if (!files.length) return;
      const reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onload = evt => {
        this.setPostImage(evt.target.result);
        this.setStep(2);
      };
      // This is to enable reuploading of same files in Chrome
      document.querySelector("#file").value = "";
    },
    next () {
      this.setStep(3);
    },
    sharePost () {
        const post = {
          username: "Hector_Vue",
          userImage:
            "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/vue_lg_bg.png",
          postImage: this.image,
          likes: 0,
          caption: this.caption,
          filter: this.filterType
        };
        this.setPost(post);
        this.goToHome();
    }
  },
  computed: {
    ...mapGetters({
      step: 'getStep',
      image: 'getPostImage',
      caption: 'getPostCaption',
      filterType: 'getPostFilter'
    })
  }
}
</script>


<style lang="scss" src="./styles/app.scss">
// imported styles
</style>
