<template>
  <Layout header_title="Reports">
    <div class="filters">
      <div class="filters-group">
        <label for="timeframe">
          Timeframe:
        </label>

        <!-- Build a Custom Select Dropdown -->
        <select
          v-model="filters.timeframe"
          @change="applyFilter"
          class="timeframe"
        >
          <option value="">
            All-time
          </option>
          
          <option value="last-7-days">
            Last 7 Days
          </option>

          <option value="this-month">
            This Month
          </option>

          <option value="this-year">
            This Year
          </option>

          <option value="custom">
            Custom
          </option>
        </select>
      </div>

      <div class="filters-group">
        <label for="people">
          People:
        </label>

        <select
          v-model="filters.people"
          @change="applyFilter"
          class="people"
        >
          <option value="">
            All
          </option>
          
          <option value="completed">
            Completed
          </option>
        </select>
      </div>

      <div class="filters-group">
        <label for="topic">
          Topic:
        </label>

        <select
          v-model="filters.topic"
          @change="applyFilter"
          class="topic"
        >
          <option value="">
            All
          </option>
          
          <option value="food-safety">
            Food Safety
          </option>

          <option value="covid-protocols">
            Covid Protocols
          </option>

          <option value="social-media-policies">
            Social Media Policies
          </option>

          <option value="cyber-security-basic">
            Cyber Security Basic
          </option>

          <option value="company-networking">
            Company Networking
          </option>
        </select>
      </div>
    </div>
    
    <div class="stats-charts">
      <div class="stats">
        <div class="stats-content">
          <div class="stat">
            <p>
              Active Users
            </p>

            <h2>
              27<span>/80</span>
            </h2>
          </div>

          <div class="stat">
            <p>
              Questions Answered
            </p>

            <h2>
              3,298
            </h2>
          </div>

          <div class="stat">
            <p>
              Av. Session Length
            </p>

            <h2>
              2m 34s
            </h2>
          </div>

          <div class="stat">
            <p>
              Starting Knowledge
            </p>

            <h2>
              64%
            </h2>
          </div>

          <div class="stat">
            <p>
              Current Knowledge
            </p>

            <h2>
              86%
            </h2>
          </div>

          <div class="stat">
            <p>
              Knowledge Gain
            </p>

            <h2>
              +34%
            </h2>
          </div>
        </div>
      </div>
      
      <div class="charts">
        <div class="chart">
          <h2>
            Activity
          </h2>
          <img alt="Activity Chart" height="200"
              src="https://storage.googleapis.com/a1aa/image/OhhAgelevzpdnUR9eKfjVjQQLEt9favxL61i8xe1fEkd2aBzJA.jpg"
              width="400" />
        </div>
      </div>
    </div>

    <div class="topics">
      <div class="topic">
        <h2>
          Weakest Topics
        </h2>
        <ul>
          <li>
            <img alt="Food Safety" height="40"
              src="https://storage.googleapis.com/a1aa/image/ZvVJSI7FWi5UPB94b32vtwSPq2HosLf8VvChKghiapD5aBzJA.jpg"
              width="40" />
            <span>
              Food Safety
            </span>
            <span class="points">
              74% Correct
            </span>
          </li>
          <li>
            <img alt="Compliance Basics Procedures" height="40"
              src="https://storage.googleapis.com/a1aa/image/umZN3TXCUR6fBC19RwsK9KeEY0M7TXvfdzbciFYQFYvXrFMnA.jpg"
              width="40" />
            <span>
              Compliance Basics Procedures
            </span>
            <span class="points">
              52% Correct
            </span>
          </li>
          <li>
            <img alt="Company Networking" height="40"
              src="https://storage.googleapis.com/a1aa/image/DlRWdexLwCQnBSclQcVjTFms7ghp9fjIspeAV800ryndrFMnA.jpg"
              width="40" />
            <span>
              Company Networking
            </span>
            <span class="points">
              36% Correct
            </span>
          </li>
        </ul>
      </div>
      <div class="topic">
        <h2>
          Strongest Topics
        </h2>
        <ul>
          <li>
            <img alt="Covid Protocols" height="40"
              src="https://storage.googleapis.com/a1aa/image/VpiE0fzq9Uxek0vQ4fLvc6hFuBzuuNzxintZoexK7fzfdtg5E.jpg"
              width="40" />
            <span>
              Covid Protocols
            </span>
            <span class="points">
              95% Correct
            </span>
          </li>
          <li>
            <img alt="Cyber Security Basics" height="40"
              src="https://storage.googleapis.com/a1aa/image/BoOnSGUAfp2kUqwS4RVNk4RhnOtqaWct2hSNzasACxO4aBzJA.jpg"
              width="40" />
            <span>
              Cyber Security Basics
            </span>
            <span class="points">
              92% Correct
            </span>
          </li>
          <li>
            <img alt="Social Media Policies" height="40"
              src="https://storage.googleapis.com/a1aa/image/53Mst6BWZj6rIJuP6MaFRaGEHuXxihEQ825fHei5rZSv1CmTA.jpg"
              width="40" />
            <span>
              Social Media Policies
            </span>
            <span class="points">
              89% Correct
            </span>
          </li>
        </ul>
      </div>
    </div>

    <div class="leaderboard">
      <div class="board">
        <h2>
          User Leaderboard
        </h2>
        <ul>
          <li>
            <span>
              Jesse Thomas
            </span>
            <span class="points">
              637 Points - 89% Correct
            </span>
            <span>
              1
            </span>
          </li>
          <li>
            <span>
              Thisal Mathiyazhagan
            </span>
            <span class="points">
              637 Points - 89% Correct
            </span>
            <span>
              2
            </span>
          </li>
          <li>
            <span>
              Helen Chuang
            </span>
            <span class="points">
              637 Points - 88% Correct
            </span>
            <span>
              3
            </span>
          </li>
          <li>
            <span>
              Lura Silverman
            </span>
            <span class="points">
              637 Points - 88% Correct
            </span>
            <span>
              4
            </span>
          </li>
        </ul>
      </div>
      <div class="board">
        <h2>
          Groups Leaderboard
        </h2>
        <ul>
          <li>
            <span>
              Houston Facility
            </span>
            <span class="points">
              52 Points / User - 97% Correct
            </span>
            <span>
              1
            </span>
          </li>
          <li>
            <span>
              Test Group
            </span>
            <span class="points">
              52 Points / User - 95% Correct
            </span>
            <span>
              2
            </span>
          </li>
          <li>
            <span>
              Sales Leadership
            </span>
            <span class="points">
              52 Points / User - 87% Correct
            </span>
            <span>
              3
            </span>
          </li>
          <li>
            <span>
              Northeast Region
            </span>
            <span class="points">
              52 Points / User - 86% Correct
            </span>
            <span>
              4
            </span>
          </li>
        </ul>
      </div>
    </div>
  </Layout>
</template>


<script>
  import Layout from "../Layout.vue";


  export default {
    data() {
      return {
        filters: {
          timeframe: "",
          people: "",
          topic: "",
        },
      };
    },
    methods: {
      applyFilter() {
        this.$emit("filter-changed", this.filters);
      },
      resetFilters() {
        this.filters = {
          timeframe: "",
          people: "",
          topic: "",
        };
        this.applyFilter();
      },
    },
    name: "Reports",
    components: {
      Layout,
    },
  };
</script>


<style scoped>
  .content .filters {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
  }

  .content .filters .filters-group {
    width: 100%;
  }

  .content .filters .filters-group label {
    color: rgba(0, 0, 0, 0.7);
    top: 158px;
    position: absolute;
    margin-left: 20px;
    letter-spacing: -0.30000001192092896px;
  }

  .content .filters .filters-group .timeframe {
    padding-left: 100px;
  }

  .content .filters .filters-group .people {
    padding-left: 75px;
  }

  .content .filters .filters-group .topic {
    padding-left: 65px;
  }

  .content .filters .filters-group select {
    padding-top: 10px;
    padding-bottom: 10px;
    border: 1px solid rgba(239, 240, 246, 1);
    border-radius: 20px;
    background-color: rgba(255, 255, 255, 1);
    width: 100%;
    height: 49px;
    color: rgba(26, 26, 33, 1);
    font-weight: 600;
    letter-spacing: -0.30000001192092896px;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    background-image: url("../../static/assets/imgs/reports/arrow_drop_down.svg");
    background-repeat: no-repeat;
    background-position: right 20px center;
    cursor: pointer;
  }

  .content .filters .filters-group select option {
    background-color: rgba(255, 255, 255, 1);
    color: rgba(0, 0, 0, 1);
    font-weight: 400;
  }





  .content .stats-charts {
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
  }

  .content .stats-charts .stats,
  .content .stats-charts .charts {
    flex: 1;
  }

  .content .stats-charts .stats .stats-content {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
  }

  .content .stats-charts .stats .stat {
    flex: 0 0 auto;
    width: 24%;
    height: 130px;
    background-color: rgba(255, 255, 255, 1);
    padding: 20px;
    border-radius: 20px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(239, 240, 246, 1);
  }

  .content .stats-charts .stats .stat p {
    margin: 0 0 35px 0;
    color: rgba(0, 0, 0, 0.7);
  }

  .content .stats-charts .stats .stat h2 {
    font-size: 24px;
    font-weight: 700;
    line-height: 29.05px;
    color: rgba(0, 0, 0, 1);
  }

  .content .stats-charts .stats .stat h2 span {
    font-size: 17px;
    font-weight: 600;
    line-height: 22px;
    color: #808080;
  }

  


  .content .stats-charts .charts {
    display: flex;
    gap: 20px;
  }

  .content .stats-charts .charts .chart {
    flex: 1;
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }






  .content .topics {
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
  }

  .content .topics .topic {
    flex: 1;
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }

  .content .leaderboard {
    display: flex;
    gap: 20px;
  }

  .content .leaderboard .board {
    flex: 1;
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }

  .content .leaderboard .board ul {
    list-style: none;
    padding: 0;
  }

  .content .leaderboard .board ul li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }

  .content .leaderboard .board ul li span {
    font-size: 16px;
  }

  .content .leaderboard .board ul li .points {
    font-weight: 600;
  }
</style>
