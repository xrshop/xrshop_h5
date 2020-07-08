<template>
  <Popup :id="id" ref="popup" @closed="onPopupClosed" v-slot="slotProps">
    <transition name="fade" @after-leave="afterLeave">
      <div v-if="slotProps.isShow" class="alert-wrapper">
        <VMask class="dark" @click.native="cancel" />
        <div class="alert">
          <div class="title">{{ title }}</div>
          <div class="text">{{ text }}</div>
          <div class="buttons">
            <div class="cancel" @click="cancel">{{ leftText }}</div>
            <div class="confirm" @click="confirm">{{ rightText }}</div>
          </div>
        </div>
      </div>
    </transition>
  </Popup>
</template>

<script>
export default {
  name: 'Confirm',
  props: {
    id: {},
    text: {},
    leftText: {
      default: '关闭',
    },
    rightText: {
      default: '确认',
    },
    title: {
      default: '提示',
    },
  },
  methods: {
    confirm() {
      this.$refs.popup.close();
      this.$emit('confirm');
    },
    cancel() {
      this.$refs.popup.close();
      this.$emit('cancel');
    },
    onPopupClosed() {
      this.$emit('closed');
    },
    afterLeave() {
      this.$emit('sub');
    },
  },
  mounted() {
    this.$refs.popup.open();
  },
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.alert-wrapper {
  position: fixed;
  z-index: 3;
}

.alert {
  position: fixed;
  width: 61.07vw;
  background-color: #fff;
  top: 36%;
  left: calc((100% - 61.07vw) / 2);
  border-radius: 2vw;
  animation: zoom 0.25s;
  line-height: 1;
}
@keyframes zoom {
  from {
    transform: scale(0.75);
  }
  to {
    transform: scale(1);
  }
}
.title {
  margin-top: 5.2vw;
  text-align: center;
  font-size: 4.8vw;
  font-weight: bold;
}
.text {
  margin-top: 6vw;
  text-align: center;
  font-size: 4vw;
  line-height: 1.5;
  white-space: pre-wrap;
  word-break: break-all;
}
.buttons {
  display: flex;
  margin-top: 6.8vw;
  border-top: solid #eee;
  border-width: thin;
}

.cancel,
.confirm {
  cursor: pointer;
  width: 50%;
  height: 14.67vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4.8vw;
}
.cancel {
  color: #bbb;
}
.confirm {
  border-left: solid #eee;
  border-width: thin;
  box-sizing: border-box;
  color: #f84e4e;
}
</style>
