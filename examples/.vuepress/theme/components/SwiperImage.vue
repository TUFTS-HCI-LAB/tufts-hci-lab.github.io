<template>
  <div>
  <swiper class="swiper" :options="swiperOption" >
    <Swiper-Slide v-for="(item,index) in images" :key="index">
      <swiper-slide :style="{ 'backgroundImage': `url(${item.img_url})` }">
        <div class="my-box"></div>
        <div class="my-box-text">
          <div class="title" data-swiper-parallax="-100">{{item.title}}</div>
          <div class="subtitle" data-swiper-parallax="-340">{{item.subtitle}}</div>
          <!-- <div class="text" data-swiper-parallax="-360"><p>{{item.content}}</p></div> -->
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
  padding-top 70px
  position relative
  // max-height 800px
  // width 100%
  height: 50% vh
  // background-color black
  // height 00px
  .swiper-slide 
    // height: 550px;
    // height: 98%
    // width: 80%;
    // display flex
    // justify-content: center
    // align-items: center
    // text-align center
    font-weight bold
    background-size cover
    background-position center
    // padding-top 0px
    // font-size: $font-size-huge * 2
    // background-color: ffffff
    .my-box
      height 90%
      // background-color: black;
    .my-box-text
      height 10%
      top: 0px
      bottom: 0px
      // bottom: 0px
      // background-color: black;
      background: hsla(0,0%,100%,.8)
      .title
        display block
        // margin-top: 10px
        padding-top: 10px
        // padding-left: 10%
        // height: 1em
        // text-align center
        // padding-left: 10%
        // margin-bottom: 100px;
        margin-left 10%
        // margin-top 10%
        font-size 200%;
        // font-weight: bold;
        // color: #750c0d
        color: #3eaf7c
        width: 15%

      .subtitle 
        // margin-bottom: px;
        margin-top: -1.2em;
        // margin-left: -10em;
        // margin-top 10px
        margin-left 30%
        text-align left
        font-size 150%;
        color: #464646

      .text 
        // max-width: 430px;
        // line-height: 1.32;
        // font-size: 100%
        // color: white
    

</style>