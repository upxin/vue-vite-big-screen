import { defineStore } from 'pinia'

interface State {
  hiddenHeader: boolean
  hiddenFooter: boolean
}

type StateKeys = keyof State

export const useAppStore = defineStore('appStore', () => {
  const state = reactive<State>({
    hiddenHeader: false,
    hiddenFooter: false
  })
  function setState<K extends StateKeys>(key: K, ret: State[K]) {
    state[key] = ret
  }

  return { state, setState }
})
