<template>
  <div class="wholeBox">
    <div class="writingHeader">
      <div class="write"><b>글쓰기버튼</b></div>
      <div class="tollBox">
        <button @click="uploadDecision()" class="registerToll">등록</button>
        <a @click="cancelDecision()">
          <button class="cancelToll">취소</button>
        </a>
      </div>
    </div>
    <!--writingHeader div end-->

    <div class="middleBox">
      <div class="titleContent">
        <input placeholder="제목을 입력해 주세요." class="textareaInput" />
      </div>
      <div class="writingContent">
        <textarea
          placeholder="내용을 입력해 주세요."
          class="mainContent"
        ></textarea>
      </div>
    </div>
    <!--middleBox div end-->

    <div class="attachBox">
      <input type="file" class="fileInput" />
    </div>
  </div>
  <!--wholeBox div end-->
</template>

<script>
export default {
  name: "reviewUpload",
  methods: {
    uploadDecision() {
      if (confirm("작성한 글을 게시하시겠습니까?")) {
        //네를 누르면 게시
        alert("글을 게시하였습니다");
        //취소를 누르면 유지
      } else {
        alert("취소하였습니다.");
      }
    },

    cancelDecision() {
      if (
        confirm(
          " '네'를 누르시면 작성한 내용이 사라집니다. 그래도 취소하시겠습니까?"
        )
      ) {
        window.location.href = this.$router.push("reviewPage"); //erroe
        //
        //
        //
      } else {
        // "아니오"를 눌렀을 때 유지 상태
      }
    },
  },
};
</script>

<style>
.wholeBox {
  height: 100%;
  width: 100%;
  display: flex;
}

.writingHeader {
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center; /* 수직 가운데 정렬*/
  text-align: center; /*수평 가운데 정렬 */
  height: 50px;
  padding: 5px; /*간격을 주기 위함*/
}

.registerToll,
.cancelToll {
  width: 80px;
  height: 40px;
  background-color: white;
  margin: 0 10px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.registerToll:hover,
.cancelToll:hover {
  background-color: gray;
  color: white;
}

.middleBox {
  height: 100%;
  width: 100%;
  text-align: center;
  align-items: center;
}

.textareaInput {
  width: 100%;
  height: 35px;
  padding: 0 10px;
}

.mainContent {
  margin: 10px 0;
  padding: 10px;
  width: 100%;
  height: 200px;
  max-height: 350px;
  overflow: scroll;
  white-space: nowrap; /* 자동 줄바꿈 금지 한줄로 작성토록*/
}

.attachBox {
  height: 100%;
  width: 100%;
  color: gray;
}
</style>
