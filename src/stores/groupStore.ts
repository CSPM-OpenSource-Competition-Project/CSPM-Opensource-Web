import { create } from 'zustand'

type Group = {
  resourceGroupName: string
  vpc: boolean
  subnet: boolean
  routeTable: boolean
  internetGateway: boolean
  instance: boolean
  eni: boolean
  ebs: boolean
  s3: boolean
  securityGroup: boolean
  iam: boolean
  rds: boolean
}

type groupStore = {
  groupList: Group[]
  groupIndex: number
  groupName: string
  inputGroupName: string
  inputVpc: boolean
  inputSubnet: boolean
  inputRouteTable: boolean
  inputInternetGateway: boolean
  inputInstance: boolean
  inputEni: boolean
  inputEbs: boolean
  inputS3: boolean
  inputSecurityGroup: boolean
  inputIam: boolean
  inputRds: boolean
}

type setGroupAction = {
  setGroupList: (newGroup: Group[]) => void
  setGroupFeildReset: () => void
  setGroupIndex: (newGroupIndex: number) => void
  setGroupName: (newGroupName: string) => void
  setInputGroupName: (newGroupName: string) => void
  setInputVpc: (inputVpc: boolean) => void
  setInputSubnet: (inputSubnet: boolean) => void
  setInputRouteTable: (inputRouteTable: boolean) => void
  setInputInternetGateway: (inputInternetGateway: boolean) => void
  setInputInstance: (inputInstance: boolean) => void
  setInputEni: (inputEni: boolean) => void
  setInputEbs: (inputEbs: boolean) => void
  setInputS3: (inputS3: boolean) => void
  setInputSecurityGroup: (inputSecurityGroup: boolean) => void
  setInputIam: (inputIam: boolean) => void
  setInputRds: (inputRds: boolean) => void
}

const groupFeild: groupStore = {
  groupList: [],
  groupIndex: -1,
  groupName: '',
  inputGroupName: '',
  inputVpc: false,
  inputSubnet: false,
  inputRouteTable: false,
  inputInternetGateway: false,
  inputInstance: false,
  inputEni: false,
  inputEbs: false,
  inputS3: false,
  inputSecurityGroup: false,
  inputIam: false,
  inputRds: false,
}

export const useGroupFeild = create<groupStore & setGroupAction>((set) => ({
  ...groupFeild,
  setGroupList: (newGroupList) => set((state) => ({ groupList: newGroupList })),
  setGroupIndex: (newGroupIndex) => set((state) => ({ groupIndex: newGroupIndex })),
  setGroupName: (newGroupName) => set((state) => ({ groupName: newGroupName })),
  setInputGroupName: (newinputGroupName) => set((state) => ({ inputGroupName: newinputGroupName })),
  setInputVpc: (newInputVpc) => set((state) => ({ inputVpc: newInputVpc })),
  setInputSubnet: (newInputSubnet) => set((state) => ({ inputSubnet: newInputSubnet })),
  setInputRouteTable: (newInputRouteTable) =>
    set((state) => ({ inputRouteTable: newInputRouteTable })),
  setInputInternetGateway: (newInputInternetGateway) =>
    set((state) => ({ inputInternetGateway: newInputInternetGateway })),
  setInputInstance: (newInputInstance) => set((state) => ({ inputInstance: newInputInstance })),
  setInputEni: (newInputEni) => set((state) => ({ inputEni: newInputEni })),
  setInputEbs: (newInputEbs) => set((state) => ({ inputEbs: newInputEbs })),
  setInputS3: (newInputS3) => set((state) => ({ inputS3: newInputS3 })),
  setInputSecurityGroup: (newInputSecurityGroup) =>
    set((state) => ({ inputSecurityGroup: newInputSecurityGroup })),
  setInputIam: (newInputIam) => set((state) => ({ inputIam: newInputIam })),
  setInputRds: (newInputRds) => set((state) => ({ inputRds: newInputRds })),
  setGroupFeildReset: () => set(groupFeild),
}))
