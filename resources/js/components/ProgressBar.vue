<template>
    <div class="progressbar">
        <div class="filled-bar" :style="{ transform: `translate3d(-${(1 - value) * 100}%, 0, 0)` }"></div>
    </div>
</template>
<style scoped>
.progressbar {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 300;
  height: 10px;
  width: 100%;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 5px;
}

.filled-bar {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  height: 100%;
  width: 100%;
  background: #000;
}
</style>
<script>
export default {
    props: {
        value: {
            type: Number,
            default: 0
        }
    }
}
</script>