<template>
  <div class="footer-wrapper">
    <div class="left">
      <el-button @click="gotoPolicy" size="small" link>{{privilege}}</el-button>
      <el-button @click="gotoIntro" size="small" link>{{get_account}}</el-button>
    </div>

    <div class="center text">{{icp_license}}</div>

    <div class="right">
      <el-button @click="gotoEmail" size="small" link>{{contact}}</el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { privilege, get_account, icp_license, contact, sales_email, email_subject } from '@/utils/strings'
import {PATH_POLICY, PATH_INTRO} from '@/utils/path'
import {useRouter} from "vue-router";
const router = useRouter()

const gotoEmail = () => {
  const to = sales_email; // 这里替换为你的收件人邮箱地址
  const subject = email_subject; // 邮件主题
  const body = ''; // 邮件正文
  const emailLink = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  // 使用window.location.href打开默认邮箱客户端
  window.location.href = emailLink;
}

const gotoPolicy = () => {
  router.push(PATH_POLICY);

}

const gotoIntro = () => {
  router.push(PATH_INTRO);
}

</script>

<style lang="scss" scoped>
.footer-wrapper{
  width: 100vw;
  height: 50PX;
  display: flex;
  flex-direction: row;
  border-top-style: solid;
  border-top-width: 1px;
  border-top-color: var(--E4E7ED);
  align-items: center;

  ::v-deep(.el-button.is-link){
    color: var(--110110);
  }

  .text{
    color: var(--110110);
    font-size: 12PX;
  }

  .left{
    margin-left: 30px;
    flex: 1
  }
  .center{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .right{
    display: flex;
    justify-content: flex-end;
    flex: 1;
    margin-right: 30px;
  }
}
</style>