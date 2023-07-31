<template>
  <div class="main">
    <div class="mainInfo">
      <div>
        <h3 class="mainInfoTitle">채용 정보</h3>
      </div>
      <div class="cardList"><!--card 가져오기--></div>
    </div>
    <!--mainInfo div end-->
    <br /><!--empty-->
    <div class="mainReivew">
      <div>
        <h3 class="mainReviewTitle">취업 후기</h3>
      </div>
      <div class="mainReviewList"><!--mainReivew 가져오기--></div>
    </div>
    <!--mainReivew div end-->
  </div>
</template>

<script>
export default {
  name: "mainPage",
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
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0px;
  background-color: white;
  padding: 30px;
  text-align: center;
}
</style>
