<template>
  <!-- myPageMain부분 코드 -->
  <article class="myPageMain">
    <div class="myPageCard">
      <div class="myPageCardContents">
        <h2 class="myPageTitle">내 정보</h2>
        <hr />
        <table class="myPageTable">
          <tr>
            <th>닉네임</th>
            <td>홍길동</td>
          </tr>
          <tr>
            <th>이메일</th>
            <td>abc123@naver.com</td>
          </tr>
        </table>
      </div>
      <hr />
      <p><b>내가 쓴 글</b></p>
    </div>
  </article>
</template>

<script>
export default {
  name: "myPage",
};
</script>

<style>
html {
  background-color: #e2e2e2;
  text-align: center;
}
/* 카드형식으로 만들기 */
.myPageCard {
  background-color: white;
  max-width: 400px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid white;
  border-radius: 8px;
  /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); */
}
.myPageTable {
  padding: 10px;
  width: 100%;
  text-align: left;
}
hr {
  margin: 15px;
}
</style>
