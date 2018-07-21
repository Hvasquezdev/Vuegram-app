<template>
  <div class="phone-body">
    <!-- Step 1 Default View -->
    <div class="feed" v-if="step === 1">
      <vuegram-post v-for="post in posts"
        :post="post"
        :key="posts.indexOf(post)"/>
    </div>
    <!-- Step 2 View -->
    <div v-if="step === 2">
      <div class="selected-image"
        :style="{ backgroundImage: 'url(' + image + ')' }"></div>
      <div class="filter-container">
        <filter-type v-for="filter in filters" 
          :filter="filter"
          :image="image"
          :key="filters.indexOf(filter)"/>
      </div>
    </div>
  </div>
</template>

<script>
import VuegramPost from './VuegramPost'
import FilterType from './FilterType'

import { mapGetters } from 'vuex'

export default {
  name: 'PhoneBody',
  computed: {
    ...mapGetters({
      posts: 'getPost',
      filters: 'getFilters',
      step: 'getStep',
      image: 'getPostImage'
    })
  },
  components: {
    'vuegram-post': VuegramPost,
    'filter-type': FilterType
  }
}
</script>

<style lang="scss" src="../styles/phone-body.scss">
// imported styles
</style>
