<template>
  <div class="wholeBox">
    <div class="postTitle">
      <h3 class="reviewTitle">취업 후기</h3>
    </div>

    <div class="reviewBox">
      <div class="titleBox">제목이 입력될 부분입니다</div>
      <div class="tableBox">
        <table>
          <tr>
            <th>작성자</th>
            <td>닉네임</td>
          </tr>
          <tr>
            <th>게시일자</th>
            <td>2222년2월22일22시22분</td>
          </tr>
        </table>
      </div>
      <!--tableBox div end-->
      <div class="contentBox">
        내용이 들어갈 부분입니다 <Br /> 내용이 들어갈 부분입니다 <Br />
        내용이 들어갈 부분입니다
      </div>
    </div>
    <!--reviewBox div end-->

    <div class="listButtonBox">
      <router-link to="/review" class="menu">
        <button>목록</button></router-link
      >
    </div>
  </div>

  <!--WholeBox div end-->
</template>

<script>
export default {
  name: "reviewRead",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
.wholeBox {
  display: flex;
  flex-direction: column; /* reviewBox를 가운데 정렬 */
  margin: 0 auto;
  width: 100%;

  justify-content: center;
  align-items: center;
  padding: 30px;
}
.reviewBox {
  background-color: white;
  margin: 10px;
  padding: 10px;
  border: 3px solid #e2e2e2;
  border-radius: 8px;
  width: 70%;
  text-align: center;
  display: flex;
  flex-direction: column;
}

.titleBox {
  height: 50px;
  width: 100%;
  border-bottom: 3px solid #e2e2e2;
  text-align: left;
}

.contentBox {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
}

.tableBox {
  border-bottom: 3px solid #e2e2e2;
  text-align: left; /* 테이블 자체를 왼쪽으로 정렬 */
  justify-content: flex-end; /* 내용을 왼쪽으로 정렬 */
}

th,
td {
  padding-right: 5px;
}
</style>
