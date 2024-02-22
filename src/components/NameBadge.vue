<template>
  <div class="name-badge" :style="{ backgroundColor: randomBackground }">
    {{ monogram }}
  </div>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      palette: ['#31F1AC', '#1C40A3', '#DE40A3']
    }
  },
  computed: {
    monogram() {
      const monogram = this.name.split(' ')
      if (!this.name.length) {
        return
      }

      if (monogram.length < 1) {
        return ''
      }

      if (monogram.length === 1) {
        return monogram[0].split('')[0]
      }

      return monogram[0].split('')[0] + monogram[1].split('')[0]
    },
    randomBackground() {
      return this.palette[Math.floor(Math.random() * this.palette.length)]
    }
  }
}
</script>
<style lang="scss">
.name-badge {
  background-color: #31f1ac;
  width: 3.625rem;
  height: 3.625rem;
  font-weight: 400 !important;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.563rem;
  text-transform: uppercase;
  color: #fff;
}
</style>
