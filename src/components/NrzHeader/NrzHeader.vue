<template>
  <section class="flex justify-between w-screen">
    <section flex-1>
      <el-menu
        mode="horizontal"
        :background-color="color_FFFFFF"
        :text-color="color_110110"
        :active-text-color="color_0CB8E2"
        @select="handleSelect"
      >
        <el-menu-item>
          <template #title>
            <div class="w-160px h-60px py-10px box-border flex flex-col justify-center">
              <img
                class="w-160Px h-40Px"
                src="https://nrz-app.su.bcebos.com/oms/common/logo_all.png"
              />
            </div>
          </template>
        </el-menu-item>
        <el-sub-menu v-for="(item, index) in list" :index="item.name" :key="item.name">
          <template #title>{{ item.name }} </template>
          <HeaderContent
            :title="item.name"
            :parentIndex="index"
            :list="item.list"
            :intro="item.intro"
          ></HeaderContent>
        </el-sub-menu>
        <el-menu-item index="4">Orders</el-menu-item>
      </el-menu>
    </section>
    <section class="flex items-center border-0 border-b border-[#dcdfe6] border-solid pr-20px">
      <el-badge :value="msgNum > 0 ? msgNum : ''" class="mr-40px">
        <el-button @click="toMsgPage" circle>
          <el-icon>
            <Bell size="20px" />
          </el-icon>
        </el-button>
      </el-badge>
      <el-dropdown trigger="click">
        <span class="flex items-center">
          {{ user.name }}
          <el-icon class="pl-6px">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>{{ account_msg }}</el-dropdown-item>
            <el-dropdown-item>{{ modify_secret }}</el-dropdown-item>
            <el-dropdown-item>{{ logout }}</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </section>
  </section>

  <el-dialog v-model="visible" :title="remind" width="30%" center>
    <span>{{ logout_remind }}</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="visible = false">{{ cancel }}</el-button>
        <el-button type="primary" @click="toLogin">{{ confirm }}</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { Bell, ArrowDown } from '@element-plus/icons-vue'
import HeaderContent from '../HeaderContent/HeaderContent.vue'

import { color_FFFFFF, color_110110, color_0CB8E2 } from '@/utils/colors'
import {
  account_msg,
  modify_secret,
  logout,
  remind,
  logout_remind,
  confirm,
  cancel
} from '@/utils/strings'
import { MENUES } from './mock'

const msgNum = ref(1) // 消息数
const user = ref({ name: 'Leslie' }) // 用户信息
const list = ref<any[]>([]) // 页面权限路径
import { PATH_MODIFY_SECRET, PATH_ACCOUNT, PATH_LOGIN } from '@/utils/path'
import { useRouter } from 'vue-router'
const router = useRouter()
const visible = ref(false)

onMounted(() => {
  list.value = MENUES
})
const toMsgPage = () => {
  console.log('去消息页面')
}

const handleSelect = (key: string, keyPath: string[]) => {
  if (key === '888-1') {
    router.push(PATH_ACCOUNT)
  } else if (key === '888-2') {
    router.push(PATH_MODIFY_SECRET)
  } else if (key === '888-3') {
    visible.value = true
  }
  console.log(key, keyPath)
}

const toLogin = () => {
  visible.value = false
  router.push(PATH_LOGIN)
}
</script>
