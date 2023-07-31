<template>
  <div class="info">
    <!-- 채용 정보 카드 -->
    <div class="row justify-content-center">
      <h3 class="infoTitle">채용 정보</h3>
    </div>
    <div class="cardList">
      <div class="col-md-3 mb-4" v-for="(job, index) in jobList" :key="index">
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
        <!--card div end-->
      </div>
      <!--반복 div end-->
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
      ],
    };
  },
};
</script>

<style>
* {
  overflow: hidden;
}

.info {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 30px;
}

.infoTitle {
  font-weight: bold;
}
.cardList {
  overflow-y: scroll;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.row {
  width: 75%;
}

.card {
  width: 250px;
  padding: 5px;
  margin: 10px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 5px black;
}
</style>
