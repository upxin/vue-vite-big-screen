<template>
  <div class="notfound-wrapper page-content-height">
    <img class="img" src="https://nrz-app.su.bcebos.com/oms/common/404.jpg" />
    <div class="tips">{{ notfound_tips }}</div>
    <div>
      <a-button @click="goHome" type="primary" style="margin-top: 20px" link>
        {{ notfound_click }}
      </a-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PATH_HOME } from '@/utils/path'
import { useRouter } from 'vue-router'
import { notfound_tips, notfound_click } from '@/utils/strings'

const router = useRouter()

const goHome = () => {
  router.push(PATH_HOME)
}
</script>

<style lang="scss" scoped>
.notfound-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .img {
    width: 260px;
    height: 160px;
  }

  .tips {
    margin-top: 20px;
    font-size: 16px;
    font-weight: 600;
    color: var(--110110);
  }

  .back {
  }
}
</style>
