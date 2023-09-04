<template>
  <div class="info">
    <!-- 채용 정보 카드 -->
    <div class="infoTitle">
      <h3 class="infoText">채용 정보</h3>
      <p style="color: gray">
        추천 공고이니 자세한 내용은 공식사이트 참고부탁드립니다.
      </p>
    </div>
    <div class="cardList">
      <div class="col-md-3 col-6" v-for="(job, index) in jobList" :key="index">
        <div class="card" @click="goToWebsite(job.websiteURL)">
          <img class="cardImg" :src="job.imageURL" alt="기업 로고" />
          <div class="cardBody">
            <!-- 기업 이름 -->
            <h5>{{ job.companyName }}</h5>
            <!-- 상세 정보 -->
            <p>{{ job.details }}</p>
            <!-- 모집 날짜 -->
            <p class="cardDate">{{ job.recruitmentDate }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "infoPage",
  data() {
    return {
      jobList: [
        // 채용정보 데이터
        {
          imageURL: require("@/assets/infoImgETRI.png"),
          companyName: "한국전자통신연구원",
          details: "채용 상세 정보",
          recruitmentDate: "23.06.01 - 23.08.01",
          websiteURL: "https://www.etri.re.kr/intro.html",
        },
        {
          imageURL: require("@/assets/infoImgETRI.png"),
          companyName: "한국전자통신연구원",
          details: "채용 상세 정보",
          recruitmentDate: "23.06.01 - 23.08.01",
          websiteURL: "https://www.etri.re.kr/intro.html",
        },
        {
          imageURL: require("@/assets/infoImgETRI.png"),
          companyName: "한국전자통신연구원",
          details: "채용 상세 정보",
          recruitmentDate: "23.06.01 - 23.08.01",
          websiteURL: "https://www.etri.re.kr/intro.html",
        },
        {
          imageURL: require("@/assets/infoImgETRI.png"),
          companyName: "한국전자통신연구원",
          details: "채용 상세 정보",
          recruitmentDate: "23.06.01 - 23.08.01",
          websiteURL: "https://www.etri.re.kr/intro.html",
        },
        {
          imageURL: require("@/assets/infoImgETRI.png"),
          companyName: "한국전자통신연구원",
          details: "채용 상세 정보",
          recruitmentDate: "23.06.01 - 23.08.01",
          websiteURL: "https://www.etri.re.kr/intro.html",
        },
        {
          imageURL: require("@/assets/infoImgETRI.png"),
          companyName: "한국전자통신연구원",
          details: "채용 상세 정보",
          recruitmentDate: "23.06.01 - 23.08.01",
          websiteURL: "https://www.etri.re.kr/intro.html",
        },
        {
          imageURL: require("@/assets/infoImgETRI.png"),
          companyName: "한국전자통신연구원",
          details: "채용 상세 정보",
          recruitmentDate: "23.06.01 - 23.08.01",
          websiteURL: "https://www.etri.re.kr/intro.html",
        },
        {
          imageURL: require("@/assets/infoImgETRI.png"),
          companyName: "한국전자통신연구원",
          details: "채용 상세 정보",
          recruitmentDate: "23.06.01 - 23.08.01",
          websiteURL: "https://www.etri.re.kr/intro.html",
        },
      ],
    };
  },
  methods: {
    goToWebsite(websiteURL) {
      window.location.href = websiteURL;
    },
  },
};
</script>

<style>
.info {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 30px;
}

.infoTitle {
  margin-bottom: 30px;
}
.infoText {
  font-weight: bold;
  font-size: x-large;
}

.cardList {
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  margin-left: 1.5%;
  max-width: 1200px;
}
.cardList:hover {
  cursor: pointer;
}
.col-md-3,
.col-6 {
  flex-basis: calc(25%);
  margin-bottom: 2%;
}

.card {
  text-align: center;
  width: 88%;
  padding: 5px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.cardImg {
  height: 60px;
  width: 100%;
  object-fit: cover;
}
.cardBody > h5 {
  /*기업 정보 */
  height: 30px;
  line-height: 30px;
  font-size: 15px;
  white-space: nowrap;
}
.cardBody > p {
  /*채용 상세 정보 */
  font-size: auto;
  white-space: nowrap;
}
.cardDate {
  /*채용 날짜 */
  white-space: nowrap;
  font-size: small;
}
</style>
