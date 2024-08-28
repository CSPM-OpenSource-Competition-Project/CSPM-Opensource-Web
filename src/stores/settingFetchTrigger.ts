import { create } from 'zustand'

type settingTriggerStore = {
  fetchTrigger: boolean
}

type settingTriggerAction = {
  setFetchTrigger: () => void
}

const settingTrigger: settingTriggerStore = {
  fetchTrigger: true,
}

export const useSettingTrigger = create<settingTriggerAction & settingTriggerStore>((set) => ({
  ...settingTrigger,
  setFetchTrigger: () => set((state) => ({ fetchTrigger: !state.fetchTrigger })),
}))
