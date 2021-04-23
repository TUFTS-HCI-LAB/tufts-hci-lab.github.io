<template>
  <div>
  <swiper class="swiper" :options="swiperOption" >
    <Swiper-Slide v-for="(item,index) in images" :key="index">
      <swiper-slide :style="{ 'backgroundImage': `url(${item.img_url})` }">
      <div class="title" data-swiper-parallax="-100">{{item.title}}</div>
      <div class="subtitle" data-swiper-parallax="-240">{{item.subtitle}}</div>
      <div class="text" data-swiper-parallax="-360">
        <p>{{item.content}}</p>
      </div>
      </swiper-slide>
    </Swiper-Slide>
    <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
    <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
    <div class="swiper-pagination" slot="pagination"></div>
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
          autoplay: {
            delay: 2500,
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
        image_show: []
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
.swiper 
  // max-height 800px
  width 90%
  height 400px
  .swiper-slide 
    // height: 80%;
    // width: 80%;
    display flex
    justify-content: center
    align-items: center
    text-align: center
    font-weight: bold
    background-size: cover
    background-position: center
    // font-size: $font-size-huge * 2
    // background-color: ffffff
    .title 
      margin-bottom: 100px;
      font-size: 300%;
      // font-weight: bold;
      color: white
      background-color: ffffff
      // background-color:

    .subtitle 
      // margin-bottom: px;
      font-size: 200%;
      color: white

    .text 
      max-width: 430px;
      // line-height: 1.32;
      font-size: 100%
      color: white
    

</style>