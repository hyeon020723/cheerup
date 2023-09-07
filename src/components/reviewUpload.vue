<template>
  <div class="wholeBox">
    <div class="writingHeader"><h3>글쓰기</h3></div>
    <div class="middleBox">
      <div class="writeContents">
        <input
          placeholder="제목을 입력해 주세요."
          class="textareaInput"
          v-model="review.title"
        />
        <textarea
          placeholder="내용을 입력해 주세요."
          class="mainContent"
          v-model="review.content"
        ></textarea>
      </div>
    </div>

    <div class="tollBox">
      <button @click="uploadDecision()" class="registerToll">등록</button>
      <a @click="cancelDecision()">
        <button class="cancelToll">취소</button>
      </a>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "reviewUpload",
  data() {
    return {
      review: {
        title: "",
        content: "",
      },
    };
  },

  methods: {
    uploadDecision() {
      if (!this.review.title || !this.review.content) {
        alert("제목과 내용을 입력해주세요.");
        return;
      }

      if (confirm("작성한 글을 게시하시겠습니까?")) {
        const review = {
          title: this.review.title,
          content: this.review.content,
        };
        axios
          .post("/api/reviewupload", { review: review })
          .then((res) => {
            console.log(res.data);
            alert("글을 게시하였습니다");
            this.$router.push("/reviewlist");
          })
          .catch((error) => {
            console.error("Error uploading review:", error);
          });
      } else {
        // 유지
      }
    },

    cancelDecision() {
      if (
        confirm(
          " '네'를 누르시면 작성한 내용이 사라집니다. 그래도 취소하시겠습니까?"
        )
      ) {
        this.$router.push("/reviewlist");
      } else {
        // 유지 상태
      }
    },
  },
};
</script>

<style>
.wholeBox {
  padding: 0;
  margin: 0;
}
.writingHeader {
  display: flex;
  width: 80%;
  align-items: center; /* 수직 가운데 정렬*/
  text-align: center; /*수평 가운데 정렬 */
  height: 50px;
  padding: 30px;
  padding-bottom: 0px;
}

.middleBox {
  width: 80%;
  text-align: center;
  align-items: center;
  background-color: white;
  padding: 10px;
  border: 3px solid #e2e2e2;
  border-radius: 8px;
  margin: 1.3%;
  overflow: hidden;
}

.textareaInput {
  margin: 5px;
  width: 90%;
  height: 35px;
  padding: 0 10px;
}

.mainContent {
  margin: 5px;
  padding: 10px;
  width: 90%;
  max-width: 90%;
  height: 200px;
  max-height: 350px;
  overflow: scroll;
  white-space: nowrap; /* 자동 줄바꿈 금지 한줄로 작성토록*/
}

.attachBox {
  height: 100%;
  width: 100%;
  color: gray;
  margin: 5px;
}

/*등록 취소 버튼 */
.registerToll,
.cancelToll {
  width: 80px;
  height: 40px;
  background-color: white;
  margin: 0 3px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.registerToll:hover,
.cancelToll:hover {
  background-color: gray;
  color: white;
}
</style>
