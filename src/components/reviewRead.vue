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

      <div class="goodButtonBox">
        <button :id="스타일" @click="changeId()"></button
        ><span class="goodCounting">좋아요 수 : {{ 좋아요개수 }}</span>
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
    return {
      스타일: "heartBefore",
      좋아요개수: 0,
    };
  },
  // heartPuls함수는 데이터에 보관된 좋아요 개수에 1을 더하고 1을 빼는 함수입니다
  methods: {
    heartPlus() {
      if (this.스타일 === "heartBefore") {
        this.좋아요개수 += 1;
      } else {
        this.좋아요개수 -= 1;
      }
    },
    // changeID함수는 html의 heart 버튼의 id를 바꾸는 함수입니다.
    // style을 before(회색)과 after(빨강색)으로 각각 만들어 두었고 id가 바뀌면 해당 스타일을 불러오도록 설계하였습니다.
    // 하트모양 만드는 style은 인터넷에서 따온거라 어케 만들었는지는 이해 필요할거 같아요...
    changeId() {
      this.heartPlus();
      if (this.스타일 === "heartBefore") {
        this.스타일 = "heartAfter";
      } else {
        this.스타일 = "heartBefore";
      }
    },
  },
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
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
}

.titleBox {
  height: 50px;
  width: 100%;
  border-bottom: 3px solid #e2e2e2;
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

.goodButtonBox {
  padding: 10px;
}

.listButtonBox button {
  cursor: pointer;
  padding: 10px 20px;
  background-color: gray;
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: bold;
}

#heartBefore {
  position: relative;
  height: 20px;
  width: 20px;
  background: #c9c9c9;
  display: flex;
  justify-content: center;
  text-align: center;
  border-radius: 0 0 0 10px;
  transform: rotate(-45deg);
  border: 0px;
}

#heartBefore::before {
  position: absolute;
  content: "";
  top: -50%;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: inherit;
  border-radius: 50%;
  cursor: pointer;
}

#heartBefore::after {
  position: absolute;
  content: "";
  top: 0;
  right: -50%;
  width: 100%;
  height: 100%;
  background-color: inherit;
  border-radius: 50%;
}

#heartAfter {
  position: relative;
  height: 20px;
  width: 20px;
  background: red;
  display: flex;
  justify-content: center;
  text-align: center;
  border-radius: 0 0 0 10px;
  transform: rotate(-45deg);
  border: 0px;
}

#heartAfter::before {
  position: absolute;
  content: "";
  top: -50%;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: inherit;
  border-radius: 50%;
  cursor: pointer;
}

#heartAfter::after {
  position: absolute;
  content: "";
  top: 0;
  right: -50%;
  width: 100%;
  height: 100%;
  background-color: inherit;
  border-radius: 50%;
}
</style>
