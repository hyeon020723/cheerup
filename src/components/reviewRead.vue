<template>
  <div class="wholeBox">
    <div class="postTitle">
      <h3>취업 후기</h3>
    </div>

    <div class="reviewBox">
      <div class="titleBox">{{ post.title }}</div>
      <div class="tableBox">
        <table>
          <tr>
            <th>작성자</th>
            <td>{{ post.nickName }}</td>
          </tr>
          <tr>
            <th>게시일자</th>
            <td>{{ formatDate(post.uploadDate) }}</td>
          </tr>
        </table>
      </div>
      <!--tableBox div end-->
      <div class="contentBox">
        {{ post.content }}
      </div>
    </div>
    <!--reviewBox div end-->

    <div class="listButtonBox">
      <router-link to="/reviewlist" class="menu">
        <button>목록</button></router-link
      >
    </div>
  </div>

  <!--WholeBox div end-->
</template>
<script>
export default {
  name: "ReviewRead",
  props: ["pageNumber"],

  data() {
    return {
      post: {},
    };
  },

  created() {
    this.fetchReview();
  },

  methods: {
    async fetchReview() {
      try {
        const response = await fetch(`/api/reviewread/${this.pageNumber}`);
        if (response.ok) {
          const data = await response.json();
          this.post = data;
        } else {
          console.error("Error fetching review:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching review:", error);
      }
    },

    formatDate(dateString) {
      const date = new Date(dateString);
      return date.toLocaleString();
    },
  },
};
</script>

<style>
.postTitle > h3 {
  padding: 30px;
  padding-bottom: 0px;
}

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

.tableBox > th,
.tableBox > td {
  padding-right: 5px;
}
.listButtonBox > .menu > button {
  border: 0;
  background-color: gray;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
}
</style>
