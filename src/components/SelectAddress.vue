<template>
  <div class="address">
    <select
      class="sel"
      placeholder="请选择省"
      v-model="pid"
      @change="onPidChanged"
    >
      <option v-for="obj in provinceList" :key="obj.id" :value="obj.id">
        {{ obj.text }}
      </option>
    </select>
    <select
      class="sel"
      placeholder="请选择市"
      v-model="cid"
      @change="onCidChanged"
    >
      <option v-for="obj in cityList" :key="obj.id" :value="obj.id">
        {{ obj.text }}
      </option>
    </select>
    <select class="sel" placeholder="请选择区" v-model="aid">
      <option v-for="obj in countylist" :key="obj.id" :value="obj.id">
        {{ obj.text }}
      </option>
    </select>
  </div>
</template>
<script>
import city from '@/utils/city';

export default {
  name: 'SelectAddress',
  // 通过 model 选项配置子组件接收的 prop 名以及派发的事件名
  model: {
    prop: 'address',
    event: 'change',
  },
  props: {
    address: {
      type: Object,
    },
  },
  data() {
    return {
      pid: '110000',
      cid: '110100',
      aid: '110101',
    };
  },
  methods: {
    onPidChanged() {
      this.cid = '';
      this.aid = '';
      if (this.cityList.length) {
        this.cid = this.cityList[0].id;
        if (this.countylist.length) {
          this.aid = this.countylist[0].id;
        }
      }
    },
    onCidChanged() {
      this.aid = '';
      if (this.countylist.length) {
        this.aid = this.countylist[0].id;
      }
    },
  },
  watch: {
    result: {
      handler(newValue) {
        this.$emit('change', newValue);
      },
      immediate: true,
    },
  },
  computed: {
    result() {
      return {
        pid: this.pid,
        cid: this.cid,
        aid: this.aid,
        city: city.cityList[this.cid],
        province: city.provinceList[this.pid],
        district: city.countylist[this.aid],
      };
    },
    provinceList() {
      return Object.keys(city.provinceList)
        .map((key) => ({ id: key, text: city.provinceList[key] }));
    },
    cityList() {
      return Object.keys(city.cityList)
        .map((key) => ({ id: key, text: city.cityList[key] }))
        .filter((o) => o.id.substr(0, 2) === this.pid.substr(0, 2));
    },
    countylist() {
      return Object.keys(city.countylist)
        .map((key) => ({ id: key, text: city.countylist[key] }))
        .filter((o) => o.id.substr(0, 4) === this.cid.substr(0, 4));
    },
  },
};
</script>
<style lang="scss" scoped>
.address{
  display: flex;
  align-items: center;
  .sel{
    width: 24vw;
    font-size: 3.73vw;
    border: 0;
    outline: none;
        text-indent: 1vw
  }
}
</style>
