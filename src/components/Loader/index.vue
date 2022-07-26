<template>
  <div class="loader">
    <svg class="loader__circular" viewBox="25 25 50 50">
      <circle
        class="loader__path"
        cx="50"
        cy="50"
        fill="none"
        r="20"
        stroke-miterlimit="10"
        stroke-width="5"
      />
    </svg>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  name: 'Loader',
});
</script>

<style scoped lang="scss">
.loader {
  position: relative;
  width: 48px;
  margin: 0 auto 0 auto;

  &::before {
    display: block;
    padding-top: 100%;
    content: '';
  }

  &__circular {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin: auto;
    transform-origin: center center;
    animation: rotate 2s linear infinite;
  }

  &__path {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
    animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;
    stroke-linecap: round;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -35px;
    }
    100% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -124px;
    }
  }

  @keyframes color {
    100%,
    0% {
      stroke: #d62d20;
    }
    40% {
      stroke: #0057e7;
    }
    66% {
      stroke: #008744;
    }
    80%,
    90% {
      stroke: #ffa700;
    }
  }
}
</style>
