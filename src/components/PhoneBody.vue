<template>
  <div class="phone-body">
    <div class="feed">
      <vuegram-post v-for="post in posts"
        :post="post"
        :key="posts.indexOf(post)">
      </vuegram-post>
    </div>
  </div>
</template>

<script>
import VuegramPost from './VuegramPost'

import { mapGetters } from 'vuex'

export default {
  name: 'PhoneBody',
  computed: {
    ...mapGetters({
      posts: 'getPost',
      filters: 'getFilters'
    })
  },
  components: {
    'vuegram-post': VuegramPost
  }
}
</script>

<style lang="scss" src="../styles/phone-body.scss">
// imported styles
</style>
