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

import { mapGetters } from 'vuex'
import store from './store.js'

export default {
  name: 'App',
  components: {
    'phone-body': PhoneBody
  },
  methods: {
    uploadImage: evt => {
      const files = evt.target.files;
      if (!files.length) return;
      const reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onload = evt => {
        store.dispatch('setPostImage', evt.target.result);
        store.dispatch('setStep', 2);
      };
      // This is to enable reuploading of same files in Chrome
      document.querySelector("#file").value = "";
    },
    goToHome: () => {
      store.dispatch('setPostImage', '');
      store.dispatch('setPostFilter', '');
      store.dispatch('setPostCaption', '');
      store.dispatch('setStep', 1);
    }
  },
  computed: {
    ...mapGetters({
      step: 'getStep'
    })
  }
}
</script>


<style lang="scss" src="./styles/app.scss">
// imported styles
</style>
