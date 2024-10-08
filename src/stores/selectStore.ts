import { create } from 'zustand'

type selectState = {
  iAMSelected: string
  groupSelected: string
  resourceSelected: string
  serviceSelected: string
  regionSelected: string
}

type selectAction = {
  setIAMSelected: (selectIAM: string) => void
  setGroupSelected: (selectGroup: string) => void
  setResourceSelected: (selectResource: string) => void
  setServiceSelected: (selectService: string) => void
  setRegionSelected: (selectResion: string) => void
}

const initialSelect: selectState = {
  iAMSelected: '',
  groupSelected: '',
  resourceSelected: '',
  serviceSelected: '',
  regionSelected: 'ap-northease-2',
}

export const useSelectType = create<selectState & selectAction>((set) => ({
  ...initialSelect,
  setIAMSelected: (selectIAM) => set((state) => ({ iAMSelected: selectIAM })),
  setGroupSelected: (selectGroup) => set((state) => ({ groupSelected: selectGroup })),
  setResourceSelected: (selectResource) => set((state) => ({ resourceSelected: selectResource })),
  setServiceSelected: (selectService) => set((state) => ({ serviceSelected: selectService })),
  setRegionSelected: (selectResion) => set((state) => ({ regionSelected: selectResion })),
}))

type filterStore = {
  iAMFilter: string[]
  scanGroupFilter: string[]
}

type filterAction = {
  setIAMFilter: (iAMList: string[]) => void
  setScanGroupFilter: (scanGroupList: string[]) => void
}

const initialFilter: filterStore = {
  iAMFilter: [],
  scanGroupFilter: [],
}

export const useFilter = create<filterStore & filterAction>((set) => ({
  ...initialFilter,
  setIAMFilter: (iAMList) => set((state) => ({ iAMFilter: iAMList })),
  setScanGroupFilter: (scanGroupList) => set((state) => ({ scanGroupFilter: scanGroupList })),
}))
