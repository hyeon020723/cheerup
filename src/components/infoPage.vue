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
            <h5 class="card-title">{{ job.companyName }}</h5>
            <!-- 상세 정보 -->
            <p class="card-text">{{ job.details }}</p>
            <!-- 모집 날짜 -->
            <p class="card-text">{{ job.recruitmentDate }}</p>
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
          imageURL: require("@/assets/ASPROVA.png"),
          companyName: "아스프로바㈜",
          details: "산업공학 컨설턴트 모집",
          recruitmentDate: "~ 23.10.23. (월)",
          websiteURL:
            "https://www.jobkorea.co.kr/Recruit/GI_Read/42703915?Oem_Code=C1&logpath=1&stext=%EC%82%B0%EC%97%85%EA%B3%B5%ED%95%99&listno=1",
        },
        {
          imageURL: require("@/assets/G2G.jpg"),
          companyName: "G2G 파트너스",
          details: "통계적 공정관리 산공 전공자 모집",
          recruitmentDate: "~ 23.10.04. (수)",
          websiteURL:
            "https://www.saramin.co.kr/zf_user/jobs/relay/view?rec_idx=46502678&view_type=search",
        },
        {
          imageURL: require("@/assets/LOWCARBON.png"),
          companyName: "(주)로우카본",
          details: "영업/생산/일반관리 인재 모집",
          recruitmentDate: "~ 23.09.10. (일)",
          websiteURL:
            "https://www.saramin.co.kr/zf_user/jobs/relay/view?rec_idx=46342061&view_type=search",
        },
        {
          imageURL: require("@/assets/SARAMIN.png"),
          companyName: "(주)사람인에이치에스",
          details: "공정 설계 정직원 구인",
          recruitmentDate: "~ 채용시",
          websiteURL:
            "https://www.saramin.co.kr/zf_user/jobs/relay/view?rec_idx=46400216&view_type=search",
        },
        {
          imageURL: require("@/assets/ViOL.jpg"),
          companyName: "(주)비올",
          details: "각 부문 인재 채용 (생산)",
          recruitmentDate: "~ 23.09.10. (일)",
          websiteURL:
            "https://www.saramin.co.kr/zf_user/jobs/relay/view?rec_idx=46332043&view_type=search",
        },
        {
          imageURL: require("@/assets/mPLUS.jpg"),
          companyName: "(주)엠플러스",
          details: "기술본부 부문별 인재 영입",
          recruitmentDate: "~ 23.09.28. (목)",
          websiteURL:
            "https://www.saramin.co.kr/zf_user/jobs/relay/view?rec_idx=46427672&view_type=search",
        },
        {
          imageURL: require("@/assets/inPARTNERS.jpg"),
          companyName: "인파트너스",
          details: "품질보증(QA) 엔지니어 채용",
          recruitmentDate: "~ 23.09.27. (수)",
          websiteURL:
            "https://www.saramin.co.kr/zf_user/jobs/relay/view?rec_idx=46435455&view_type=search",
        },
        {
          imageURL: require("@/assets/HelloSearch.jpg"),
          companyName: "(주)헬로서치",
          details: "품질보증, 품질개선 및 재발 방지활동",
          recruitmentDate: "~ 23.09.22. (금)",
          websiteURL:
            "https://www.saramin.co.kr/zf_user/jobs/relay/view?rec_idx=46422893&view_type=search",
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
  text-align: center;
}

.infoText {
  font-weight: bold;
  font-size: x-large;
}

.cardList {
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
}

.col-md-3 {
  flex-basis: calc(25% - 2%); /* 우측 여백을 제외한 25%로 설정합니다 */
  margin: 0 1% 2% 1%;
}

.card {
  text-align: center;
  justify-items: center;
  width: auto;
  min-width: 150px;
  height: 93%;
  padding: 5px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
}

.cardImg {
  height: 40px;
  width: auto;
  margin: 1%;
}

.card-title {
  font-size: larger;
}
</style>
