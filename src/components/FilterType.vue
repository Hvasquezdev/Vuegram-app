<template>
  <div class="filter-type">
    <p>{{filter.name}}</p>
    <div class="img"
      :class="filter.name"
      :style="{ backgroundImage: 'url(' + image + ')' }"
      @click="setFilter(filter.name)">
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'FilterType',
  props: {
    filter: Object
  },
  methods: {
    ...mapActions({
      setFilter: 'setPostFilter'
    })
  },
  computed: {
    ...mapGetters({
      image: 'getPostImage'
    })
  }
}
</script>

<style lang="scss" src="../styles/filter-type.scss">
// imported styles
</style>
