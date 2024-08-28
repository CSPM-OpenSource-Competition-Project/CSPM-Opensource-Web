import { create } from 'zustand'

type paginationStore = {
  currentPage: number
  dataLength: number
  itemsPerPage: number
}

type paginationAction = {
  setCurrentPage: (currentPage: number) => void
  setItemsPerPage: (itmesPerNumber: number) => void
  setDataLength: (dataLength: number) => void
}

const initialPagination: paginationStore = {
  currentPage: 1,
  dataLength: 0,
  itemsPerPage: 16, //한 페이지에 보여줄 갯수
}

export const usePagination = create<paginationStore & paginationAction>((set) => ({
  ...initialPagination,
  setCurrentPage: (currentPage) => set((state) => ({ currentPage: currentPage })),
  setDataLength: (dataLength) => set((state) => ({ dataLength: dataLength })),
  setItemsPerPage: (itmesPerNumber) => set((state) => ({ itemsPerPage: itmesPerNumber })),
}))
