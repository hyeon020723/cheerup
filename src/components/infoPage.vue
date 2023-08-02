<template>
  <div class="info">
    <!-- 채용 정보 카드 -->
    <div class="infoTitle">
      <h3 class="infoText">채용 정보</h3>
      <p>추천 공고이니 자세한 내용은 공식사이트 참고부탁드립니다.</p>
    </div>
    <div class="cardList">
      <div class="col-md-3 col-6" v-for="(job, index) in jobList" :key="index">
        <div class="card">
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
          imageURL: "https://via.placeholder.com/150x50",
          companyName: "회사1",
          details: "회사1 채용 상세 정보",
          recruitmentDate: "23.06.01 - 23.08.01",
        },
        {
          imageURL: "https://via.placeholder.com/150x50",
          companyName: "회사2",
          details: "회사2 채용 상세 정보",
          recruitmentDate: "23.06.01 - 23.08.01",
        },
        {
          imageURL: "https://via.placeholder.com/150x50",
          companyName: "회사3",
          details: "회사3 채용 상세 정보",
          recruitmentDate: "23.06.01 - 23.08.01",
        },
        {
          imageURL: "https://via.placeholder.com/150x50",
          companyName: "회사4",
          details: "회사4 채용 상세 정보",
          recruitmentDate: "23.06.01 - 23.08.01",
        },
        {
          imageURL: "https://via.placeholder.com/150x50",
          companyName: "회사1",
          details: "회사1 채용 상세 정보",
          recruitmentDate: "23.06.01 - 23.08.01",
        },
        {
          imageURL: "https://via.placeholder.com/150x50",
          companyName: "회사2",
          details: "회사2 채용 상세 정보",
          recruitmentDate: "23.06.01 - 23.08.01",
        },
        {
          imageURL: "https://via.placeholder.com/150x50",
          companyName: "회사3",
          details: "회사3 채용 상세 정보",
          recruitmentDate: "23.06.01 - 23.08.01",
        },
        {
          imageURL: "https://via.placeholder.com/150x50",
          companyName: "회사4",
          details: "회사4 채용 상세 정보",
          recruitmentDate: "23.06.01 - 23.08.01",
        },
      ],
    };
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
  display: flex;
  flex-wrap: wrap;
  margin-left: 1.5%;
  max-width: 1200px;
}

.col-md-3,
.col-6 {
  flex-basis: calc(25%);
  margin-bottom: 2%;
}

.card {
  width: 88%;
  padding: 5px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
}
</style>
