<script setup lang="ts">
import { getClassMods } from '@/services';

const props = defineProps({
  type: {
    default: 'image/png',
    validator: (prop) => typeof prop === 'string' || prop === null,
  },
  src: {
    default: '',
  },
  alt: {
    default: '',
  },
  decoding: {
    default: 'sync',
  },
  preload: {
    default: 'auto',
  },
  playsinline: {
    default: true,
  },
  muted: {
    default: true,
  },
  loop: {
    default: true,
  },
  autoplay: {
    default: false,
  },
  failedText: {
    default: 'QR`me',
  },
  hideOnError: {
    default: false,
  },
  observer: {
    default: true,
  },
  classMods: {
    type: [String, Array as () => string[]],
    default: '',
  },
  threshold: {
    default: 0.2,
  },
  index: {
    default: 0,
  },
});

const emit = defineEmits(['loaded', 'error']);

const $root = ref();
const $media = ref();
const route = useRoute();

const state = reactive({
  homeRouteName: route.name,
  is: {
    loaded: false,
    loadError: false,
    video: String(props?.type).includes('video'),
    videoError: false,
  },
});

const mediaLoaded = (media) => {
  state.is.loaded = true;
  emit('loaded', media, { isVideo: state.is.video, index: props.index });

  if (state.is.video) {
    initObserver();
  }
};

const onError = (media) => {
  state.is.loadError = true;
  emit('error', { media, $el: $media.value, $root: $root.value });
  if (props.hideOnError) {
    const { target } = media;
    target.style.display = 'none';
    target.style.width = '0px';
    target.style.height = '0px';
  }
};

const iCanUseVideo = (): boolean => {
  return !!(state.is.loaded && !state.is.videoError && $media.value);
};

const pauseVideo = () => {
  if (!iCanUseVideo()) return;

  try {
    $media.value.pause();
  } catch (e) {
    console.error('media video pause', e);
    state.is.videoError = true;
  }
};

const playVideo = () => {
  if (!iCanUseVideo() || route.name !== state.homeRouteName) return;

  try {
    $media.value.play();
  } catch (e) {
    console.error('media video play', e);
    state.is.videoError = true;
  }
};

const initObserver = () => {
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        try {
          if (!state.is.loaded) return;
          // console.log(entry.target, entry);
          if (entry?.intersectionRatio >= props.threshold && entry.isIntersecting) {
            // console.log('play');
            playVideo();
          } else {
            // console.log('pause');
            pauseVideo();
          }
        } catch (e) {
          console.error('media observer', e);
        }
      });
    },
    { threshold: props.threshold },
  );

  if (observer && $media.value) {
    observer.observe($media.value);
  }
};

// НЕ ТЕСТИРОВАЛОСЬ
// function isVisible(elem) {
//   if (!(elem instanceof Element)) throw Error('DomUtil: elem is not an element.');
//   const style = getComputedStyle(elem);
//   if (style.display === 'none') return false;
//   if (style.visibility !== 'visible') return false;
//   if (style.opacity < 0.1) return false;
//   if (
//     elem.offsetWidth +
//       elem.offsetHeight +
//       elem.getBoundingClientRect().height +
//       elem.getBoundingClientRect().width ===
//     0
//   ) {
//     return false;
//   }
//   const elemCenter = {
//     x: elem.getBoundingClientRect().left + elem.offsetWidth / 2,
//     y: elem.getBoundingClientRect().top + elem.offsetHeight / 2,
//   };
//   if (elemCenter.x < 0) return false;
//   if (elemCenter.x > (document.documentElement.clientWidth || window.innerWidth)) return false;
//   if (elemCenter.y < 0) return false;
//   if (elemCenter.y > (document.documentElement.clientHeight || window.innerHeight)) return false;
//   let pointContainer = document.elementFromPoint(elemCenter.x, elemCenter.y);
//   do {
//     if (pointContainer === elem) return true;
//   } while ((pointContainer = pointContainer.parentNode));
//   return false;
// }

const isElementVisible = (el): boolean => {
  if (!el) return false;

  let rect = el.getBoundingClientRect();

  return (
    rect.bottom > 0 &&
    rect.right > 0 &&
    rect.left <
      (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */ &&
    rect.top <
      (window.innerHeight || document.documentElement.clientHeight) /* or $(window).height() */
  );
};

watch(
  () => route.name,
  (newRouteName) => {
    if (!state.is.video) return;

    if (newRouteName !== state.homeRouteName) {
      pauseVideo();
    } else if (isElementVisible($media.value)) {
      playVideo();
    }
  },
  { flush: 'post' },
);

onMounted(() => {
  if (state.is.video && props.observer) {
    initObserver();
  }
});
</script>

<template lang="pug">
.media(ref='$root', :class='getClassMods("media", classMods)')
  component.media__content(
    ref='$media',
    v-if='!state.is.loadError',
    v-lazy='src',
    @load='mediaLoaded',
    @loadeddata='mediaLoaded',
    @error='onError',
    :is='state.is.video ? "video" : "img"',
    :class='[{ "media__content--load": !state.is.loaded }]',
    :preload='preload',
    :playsinline='playsinline',
    :muted='muted',
    :loop='loop',
    :autoplay='autoplay',
    :alt='state.is.loaded ? alt : ""',
    :decoding='decoding'
  )
  ImageAppLogo.media__content.media__content--error(v-else, :alt='alt', size='100%')
</template>

<style scoped lang="scss">
.media {
  $_block: &;

  @apply w-full h-full select-none pointer-events-none rounded-6px text-center text-purple font-700;

  &__content {
    @apply object-cover bg-black w-full h-full rounded-6px;

    &--load {
      //@include bg-loader-primary(100%, 100%);
      @apply bg-dark-200;
    }
  }

  &--rounded-none {
    @apply rounded-none;

    #{$_block} {
      &__content {
        @apply rounded-none;
      }
    }
  }
}
</style>
