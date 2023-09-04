<template>
  <div class="review">
    <div class="reviewBar">
      <div class="postCount">
        <h3 class="reviewTitle">취업 후기</h3>
        <span class="countValue">{{ posts.length }}개의 글</span>
      </div>
      <div class="reviewUploadButton">
      </div>
      <!-- 게시물 테이블 -->
      <div class="reviewList">
        <table v-if="!selectedPost" class="postTable">
            <tr class="postTableTitle">
              <th>순번</th>
              <th>제목</th>
              <th>작성자</th>
              <th>작성일</th>
            </tr>
            <tr>
              <!--선-->
              <td colspan="4">
                <hr class="postHr" />
              </td>
            </tr>
          
          <tbody>
            <tr
              v-for="(post, index) in paginatedPosts"
              :key="index"
              class="post"
            >
              <td class="centered">{{ post.pageNumber }}</td>
              <td>
                <router-link
                  :to="'/reviewRead/' + post.pageNumber"
                  class="review-link"
                  >{{ post.title }}</router-link
                >
              </td>
              <td>{{ post.nickName }}</td>
              <td class="centered">{{ formatDate(post.uploadDate) }}</td>

              <!-- 사용자가 원하는 데이터 표시 -->
            </tr>
          </tbody>
        </table>

        <!-- 게시물이 없는 경우 메시지 표시 -->
        <div v-if="sortedPosts.length === 0">
          <p>게시된 글이 없습니다.</p>
        </div>

        <div class="reviewUnder">
          <!-- Bootstrap 페이지네이션 -->
          <div class="pageNumber" aria-label="Page navigation example">
            <ul class="pagination d-flex flex-row justify-content-center">
              <li class="page-item">
                <a
                  class="page-link"
                  href="#"
                  @click="changePage(currentPage - 1)"
                  aria-label="Previous"
                >
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li
                v-for="page in totalPages"
                :key="page"
                class="page-item"
                :class="{ active: currentPage === page }"
              >
                <a class="page-link" href="#" @click="changePage(page)">{{
                  page
                }}</a>
              </li>
              <li class="page-item">
                <a
                  class="page-link"
                  href="#"
                  @click="changePage(currentPage + 1)"
                  aria-label="Next"
                >
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "reviewPage",

  mounted() {
    this.fetchPosts();
  },

  data() {
    return {
      posts: [],
      currentPage: 1,
      postsPerPage: 15,
    };
  },

  computed: {
    // 페이지 관리
    sortedPosts() {
      return this.posts.slice().sort((a, b) => {
        return new Date(b.uploadDate) - new Date(a.uploadDate);
      });
    },
    totalPages() {
      return Math.ceil(this.sortedPosts.length / this.postsPerPage);
    },
    paginatedPosts() {
      const startIndex = (this.currentPage - 1) * this.postsPerPage;
      const endIndex = startIndex + this.postsPerPage;
      return this.sortedPosts.slice(startIndex, endIndex);
    },
  },

  methods: {
    formatDate(dateString) {
      const date = new Date(dateString);
      return date.toLocaleDateString();
    },

    async fetchPosts() {
      try {
        const response = await fetch("/api/reviewlist");
        const data = await response.json();
        this.posts = data.map((item) => {
          return {
            title: item.title,
            nickName: item.nickName,
            uploadDate: item.uploadDate,
            pageNumber: item.pageNumber,
            views: item.views, // 원하는 데이터가 없어서 추가하지 않음
          };
        });
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    },

    //page
    changePage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
      }
    },
    goToReviewRead() {
      const reviewReadPath = `reviewRead`;
      this.$router.push(reviewReadPath);
    },
  },
};
</script>

<style>
tbody > tr > td > a {
  text-decoration: none;
  color: black;
}
.reviewUnder {
  display: flex;
  justify-content: center;
  align-items: center;
}

.review {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.reviewBar {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 30px;
  width: 80%;
}

.reviewList {
  background-color: white;
  overflow-y: scroll;
  padding: 10px;
  border: 3px solid #e2e2e2;
  border-radius: 8px;
  width: 100%;
  margin: 1.3%;
  overflow: hidden;
  text-align: center;
}

.reviewUploadButton {
  margin-left: auto;
}

.reviewTitle {
  font-size: x-large;
}

.postCount {
  display: inline-flex;
}

.postTable {
  margin-top: 0;
  width: 100%;
}

.countValue {
  margin-left: 10px;
  margin-top: 10px;
  text-align: center;
  font-size: medium;
  color: gray;
}

.post {
  width: 45%;
  margin: 10px;
  padding: 10px;
}

td {
  padding: 5px;
  padding-bottom: 8px;
}

th {
  padding-top: 5px;
  font-size: large;
}
.pageNumber {
  background-color: #e2e2e2;
  border-radius: 8px;
  width: 170px;
  white-space: nowrap;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
}
.pageNumber * {
  color: #808080;
  text-decoration: none;
}
.pageNumber li {
  list-style: none;
  float: left;
  margin: 10px;
}

.postHr {
  margin: 0;
  padding: 0;
}

.reviewUploadButton button {
  cursor: pointer;
  padding: 10px 20px;
  background-color: gray;
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: bold;
}
</style>
