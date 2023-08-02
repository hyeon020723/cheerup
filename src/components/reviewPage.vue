<template>
  <div class="review">
    <div class="reviewBar">
      <!-- 전체 게시물 개수 표시 -->
      <div class="postCount">
        <h3 class="reviewTitle">취업 후기</h3>
        <span class="countValue">{{ posts.length }}개의 글</span>
      </div>

      <!-- 게시물 테이블 -->
      <div class="reviewList">
        <table v-if="!selectedPost" class="postTable">
          <thead>
            <tr class="postTableTitle">
              <th>제목</th>
              <th>작성자</th>
              <th>작성일</th>
              <th>조회</th>
            </tr>
            <tr>
              <td colspan="4"><hr class="postHr" /></td>
            </tr>
          </thead>
          <tbody>
            <!-- 게시글을 최근 작성 순서대로 표시 -->
            <tr
              v-for="(post, index) in paginatedPosts"
              :key="index"
              class="post"
            >
              <td>{{ post.title }}</td>
              <td>{{ post.author }}</td>
              <td class="centered">{{ post.date }}</td>
              <td class="centered">{{ post.views }}</td>
            </tr>
          </tbody>
        </table>

        <!-- 게시물이 없는 경우 메시지 표시 -->
        <div v-if="sortedPosts.length === 0">
          <p>게시된 글이 없습니다.</p>
        </div>

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

      <div class="reviewUploadButton">
        <router-link to="/reviewUpload" class="reviewUpload">
          <button>작성하기</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "reviewPage",
  data() {
    return {
      posts: [
        {
          title: "취업 후기 게시물 1",
          author: "작성자1",
          date: "2023-07-30",
          views: 0,
        },
        {
          title: "취업 후기 게시물 2",
          author: "작성자2",
          date: "2023-07-31",
          views: 0,
        },
        {
          title: "취업 후기 게시물 1",
          author: "작성자1",
          date: "2023-07-30",
          views: 0,
        },
        {
          title: "취업 후기 게시물 2",
          author: "작성자2",
          date: "2023-07-31",
          views: 0,
        },
        {
          title: "취업 후기 게시물 1",
          author: "작성자1",
          date: "2023-07-30",
          views: 0,
        },
        {
          title: "취업 후기 게시물 2",
          author: "작성자2",
          date: "2023-07-31",
          views: 0,
        },
        {
          title: "취업 후기 게시물 1",
          author: "작성자1",
          date: "2023-07-30",
          views: 0,
        },
        {
          title: "취업 후기 게시물 2",
          author: "작성자2",
          date: "2023-07-31",
          views: 0,
        },
        {
          title: "취업 후기 게시물 1",
          author: "작성자1",
          date: "2023-07-30",
          views: 0,
        },
        {
          title: "취업 후기 게시물 2",
          author: "작성자2",
          date: "2023-07-31",
          views: 0,
        },
        {
          title: "취업 후기 게시물 1",
          author: "작성자1",
          date: "2023-07-30",
          views: 0,
        },
        {
          title: "취업 후기 게시물",
          author: "이의찬",
          date: "2023-07-31",
          views: 0,
        },
        {
          title: "취업 후기 게시물 1",
          author: "작성자1",
          date: "2023-07-30",
          views: 0,
        },
        {
          title: "취업 후기 게시물",
          author: "김시은",
          date: "2023-07-31",
          views: 0,
        },
        {
          title: "취업 후기 게시물 1",
          author: "작성자1",
          date: "2023-07-30",
          views: 0,
        },
        {
          title: "취업 후기 게시물",
          author: "정수환",
          date: "2023-07-31",
          views: 0,
        },
        {
          title: "취업 후기 게시물 1",
          author: "작성자2",
          date: "2023-07-30",
          views: 0,
        },
        {
          title: "취업 후기 게시물",
          author: "임가현",
          date: "2023-07-31",
          views: 0,
        },
      ],
      currentPage: 1,
      postsPerPage: 15,
    };
  },
  computed: {
    sortedPosts() {
      return this.posts.slice().sort((a, b) => {
        // 작성일 기준 내림차순
        return new Date(b.date) - new Date(a.date);
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
    changePage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
      }
    },
  },
};
</script>

<style>
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
  width: 85%;
}

.reviewList {
  background-color: white;
  overflow-y: scroll;
  padding: 10px;
  border: 3px solid #e2e2e2;
  border-radius: 8px;
  width: 100%;
  margin: 1.3%;
  max-height: 450px;
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

.centered {
  text-align: center;
}

.post {
  width: 45%;
  margin: 10px;
  padding: 10px;
}

td {
  padding: 5px;
}

th {
  font-size: large;
}
.pageNumber li {
  list-style: none;
  float: left;
  margin: 10px;
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