<template>
  <!-- myPageMain부분 코드 -->
  <div class="myPageMain">
    <div class="myPageCard">
      <div class="logo">
        <img src="../assets/logo.png" />
        <h2 class="myPageTitle" style="color: #000080">내 정보</h2>
      </div>
      <hr />
      <div class="myPageCardContents">
        <table class="myPageTable">
          <tr>
            <th>닉네임</th>
            <td>임시유저</td>
          </tr>
          <tr>
            <th>아이디</th>
            <td>user</td>
          </tr>
        </table>
      </div>
      <hr />
      <h3>내가 쓴 글</h3>
      <table class="myPageMyReivewTable">
        <tr>
          <th>첫 번째 게시물 제목</th>
          <td>2023. 8. 17.</td>
        </tr>
        <tr>
          <th>두 번째 게시물 제목</th>
          <td>2023. 8. 18.</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "myPage",
};
</script>

<style>
.myPageMain {
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
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  /* display: flex;
  flex-direction: column;
  text-align: center;
  justify-items: center;
  align-items: center; */
}

/*내정보 아래 닉네임 아이디 취업상태 */
.myPageTable {
  padding: 10px;
  width: 100%;
  text-align: left;
}
.myPageTable > hr {
  margin: 15px;
}

/*내가쓴글 */
.myPageMyReivewTable {
  padding: 10px;
  width: 100%;
  text-align: left;
  font-weight: normal;
}
</style>
