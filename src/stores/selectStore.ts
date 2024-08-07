import { init } from 'next/dist/compiled/webpack/webpack'
import { create } from 'zustand'

type selectState = {
  iAMSelected: string
  groupSelected: string
  resourceSelected: string
  serviceSelected: string
}

type selectAction = {
  setIAMSelected: (selectIAM: string) => void
  setGroupSelected: (selectGroup: string) => void
  setResourceSelected: (selectResource: string) => void
  setServiceSelected: (selectService: string) => void
}

const initialSelect: selectState = {
  iAMSelected: '',
  groupSelected: '',
  resourceSelected: '',
  serviceSelected: '',
}

export const useSelectType = create<selectState & selectAction>((set) => ({
  ...initialSelect,
  setIAMSelected: (selectIAM) => set((state) => ({ iAMSelected: selectIAM })),
  setGroupSelected: (selectGroup) => set((state) => ({ groupSelected: selectGroup })),
  setResourceSelected: (selectResource) => set((state) => ({ resourceSelected: selectResource })),
  setServiceSelected: (selectService) => set((state) => ({ serviceSelected: selectService })),
}))

type filterStore = {
  iAMFilter: string[]
}

type filterAction = {
  setIAMFilter: (iAMList: string[]) => void
}

const initialFilter: filterStore = {
  iAMFilter: [],
}

export const useFilter = create<filterStore & filterAction>((set) => ({
  ...initialFilter,
  setIAMFilter: (iAMList) => set((state) => ({ iAMFilter: iAMList })),
}))
