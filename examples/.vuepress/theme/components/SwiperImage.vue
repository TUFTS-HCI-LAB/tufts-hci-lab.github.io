<template>
  <div>
  <swiper class="swiper" :options="swiperOption" >
    <Swiper-Slide v-for="(item,index) in images" :key="index">
      <swiper-slide :style="{ 'backgroundImage': `url(${item.img_url})` }">
        <div class="my-box"></div>
        <div class="my-box-text">
          <div class="title" data-swiper-parallax="-100">{{item.title}}</div>
          <!-- <div class="subtitle" data-swiper-parallax="-340">{{item.subtitle}}</div> -->
          <div class="text" data-swiper-parallax="-360"><p>{{item.content}}</p></div>
        </div>
      </swiper-slide>
    </Swiper-Slide>
    <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
    <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
    <!-- <div class="swiper-pagination" slot="pagination"></div> -->
  </swiper>

  </div>
</template>

<script>
//   import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
//   import 'swiper/css/swiper.css'

  export default {
    name: 'swiper-example-autoplay',
    // title: 'Autoplay',
    components: {
    //   Swiper,
    //   SwiperSlide
    },
    props: {
      images: {
        // type: String,
        default: null
      },
    },
    data() {
      return {
        swiperOption: {
          spaceBetween: 30,
          parallax: true,
          centeredSlides: true,
          effect: 'fade',
          mousewheel: true,
          loop: true,
          autoplay: {
            delay: 5000,
            disableOnInteraction: false
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        },
      }
    },
    computed: {

    },
    mounted() {
    },
    methods: {
      get_image_show(index) {
        return this.images[index]
      }
    }
  }
</script>

<style lang="stylus" scoped>

</style>