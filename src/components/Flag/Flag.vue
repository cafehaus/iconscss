<template>
  <div class="view">
    <div class="corner" @click="onTap">
      <span>{{ text }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Flag',
  props: {
    text: { // 文字
      type: String,
      default: '更多'
    },
    mainColor: { // 主色
      type: String,
      default: '#EB1834'
    },
    subColor: { // 辅助色
      type: String,
      default: '#ad0206'
    },
    height: { // 高度
      type: String,
      default: '32px'
    },
  },
  methods: {
    onTap() {
      this.$emit('on-tap')
    }
  },
}
</script>
 
<style lang="stylus" scoped>
.view
  text-align right
  .corner
    background v-bind(mainColor)
    height v-bind(height)
    padding 0 20px 0 4px
    display inline-block
    position relative
    &::before
      content ''
      border-bottom v-bind(height) solid transparent
      border-right 8px solid v-bind(subColor)
      position absolute
      bottom 0
      left -6px
    &::after
      content ''
      border-top v-bind(height) solid transparent
      border-right 8px solid v-bind(mainColor)
      position absolute
      bottom 0
      left -6px
    span
      font-size 14px
      font-weight bold
      color #FFF
      line-height v-bind(height)
      position relative
      &::before
        content ''
        border-top 3px solid transparent
        border-bottom 3px solid transparent
        border-left 4px solid #FFF
        position absolute
        top 50%
        right -12px
        transform translateY(-50%)
      &::after
        content ''
        border-top 3px solid transparent
        border-bottom 3px solid transparent
        border-left 4px solid #FFF
        position absolute
        top 50%
        right -7px
        transform translateY(-50%)
</style>
