<template>
  <div>
    <h2>unix時間変換ツール</h2>
    <div>
      <el-radio-group v-model="timeType" fill="#F56C6C" v-on:change="changeTimeType()">
        <el-radio-button label="1">日本時間(JST)</el-radio-button>
        <el-radio-button label="2">UNIX時間(秒)</el-radio-button>
        <el-radio-button label="3">UNIX時間(ミリ秒)</el-radio-button>
      </el-radio-group>
    </div>
    <p>{{ timeDescription }}</p>
    <div style="margin-top: 15px;">
      <el-row>
        <el-col :span="4"><div class="grid-content">
          <el-button type="danger" v-on:click="setCurrentTime()">現在日時をセット</el-button>
        </div>
        </el-col>
        <el-col :span="20">
          <div class="grid-content bg-purple-light">
            <el-input placeholder="" v-model="time" class="input-with-select"></el-input>
          </div>
        </el-col>
      </el-row>

      <el-button type="primary" style="width: 100%; margin-top: 15px;">変換</el-button>
    </div>

    <div style="margin-top: 8px;">
      <el-table :data="tableData" border stripe style="width: 100%">
        <el-table-column prop="date" label="Date" width="180"></el-table-column>
        <el-table-column prop="name" label="Name" width="180"></el-table-column>
        <el-table-column prop="address" label="Address">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  //  import ElInput from "../../node_modules/element-ui/packages/input/src/input.vue";
  import moment from 'moment';

  export default {
//    components: {ElInput},
    name: 'TimeSheet',
    data() {
      return {
        timeType: "1",
        timeDescription: "",
        time: "",
        select: '1',
        msg: 'Welcome to Your Vue.js App',
        tableData: [{
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }]
      }
    },
    created: function () {
      console.log('timeType: ' + this.timeType);
      this.changeTimeType();
      this.setJst(new Date());
    },
    methods: {
      changeTimeType: function () {
        switch (this.timeType) {
          case "1":
            this.timeDescription = "例）2018/04/16 13:13:50";
            break;
          case "2":
            this.timeDescription = "fuga";
            break;
          case "3":
            this.timeDescription = "gg";
            break;
        }
      },
      setCurrentTime: function() {
        switch (this.timeType) {
          case "1":
            this.setJst(new Date());
            break;
          case "2":
            this.setUnixTimeMillSecond(new Date());
            break;
          case "3":
            this.setUnixTime(new Date());
            break;
        }
      },
      setJst: function(date) {
        this.time = moment(date).format('YYYY/MM/DD HH:mm:ss');
        console.debug(`setJst: ${this.time}`);
      },
      setUnixTimeMillSecond: function (date) {
        this.time = moment(date).unix() / 1000;
        console.debug(`setUnixTimeMillSecond: ${this.time}`);
      },
      setUnixTime: function (date) {
        this.time = moment(date).unix();
        console.debug(`setUnixTime: ${this.time}`);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-select .el-input {
    width: 110px;
  }

  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
</style>
