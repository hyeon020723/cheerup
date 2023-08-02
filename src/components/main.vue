<template>
  <div class="main">
    <div class="mainImgSlide">
      <img :src="currentImgSrc" alt="mainImg" />
    </div>
    <div class="mainText">
      <p>
        부경대학교 시스템경영공학부<br />
        학생들의 취업에 도움이 되어주겠습니다.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "mainPage",
  data() {
    return {
      imageUrls: [
        require("../assets/mainBgImg.jpg"),
        require("../assets/mainBgImg2.jpg"),
        require("../assets/mainBgImg3.jpg"),
      ],
      currentImgIndex: 0,
    };
  },
  mounted() {
    this.startSlideshow();
  },
  methods: {
    startSlideshow() {
      setInterval(() => {
        this.nextSlide();
      }, 3000); // Change image every 3 seconds
    },
    nextSlide() {
      this.currentImgIndex = (this.currentImgIndex + 1) % this.imageUrls.length;
    },
  },
  computed: {
    currentImgSrc() {
      return this.imageUrls[this.currentImgIndex];
    },
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  font-family: "GmarketSansMedium";
}
h3 {
  font-size: 18px;
}

.main {
  height: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: white;
  text-align: center;
}
.mainText p {
  height: 25%;
  position: absolute;
  color: white;
  padding: 20px;
  text-align: left;
  font-size: 1.2em;
  transform: translate(0, -50%);
}

.mainImgSlide {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.mainImgSlide img {
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
