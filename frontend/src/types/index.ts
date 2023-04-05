interface IWellsOnStatus {
  subsidiary: string
  bush: string
  well: string
}

export interface ICardProps<T> {
  data: T
  page: number
  setPage: (index: number) => void
  length: number
}

export interface IContractorsResponse {
  id: number
  name: string
  email: string
  phone: string
}

export interface IContractorData {
  id: number
  name: string
  email: string
  phone: string
}

export interface ICustomerData {
  id: number
  name: string
  color?: string
  slug?: string
}

export interface IWellData {
  id: number
  author?: number
  customer: number
  contractor: string
  field: string
  rig: string
  well_number: string
  status: string
  contractor_id?: number
  start_date?: string
  plan_depth?: number
}

export type TAddContractor = {
  name: string
}
export interface ICustomInputProps<T> {
  type?: string
  style?: object
  label: string
  extraLabel?: string
  name?: string
  value?: string | number
  placeholder?: string
  data?: string[]
  blue?: boolean
  onChange: (e: React.ChangeEvent<T>) => void
  setShowLogin?: (show: boolean) => void
  setShowResetPass?: (show: boolean) => void
}

export interface IWellsResponse {
  id: number
  author: number
  customer: number
  contractor: string
  field: string
  rig: string
  well_number: string
  contractor_id: number
  customer_id: number
  status: string
  north: string
  plan_depth: number
  start_date: string
  sag: number
  start_depth: number
  telesystem: string
  telesystem_number: string
  current_correction: string
  current_depth: number
  correction_value: number
  amplitude: number
  latitude: string
  longtitude: string
  NY: string
  EX: string
  geomagnetic_model: string
  geomagnetic_date: string
  north_direction: string
  btotal: number
  gtotal: number
  dip: number
  magn: number
  meridian: number
  critical_azimuth: boolean
}

export type TAddWell = Omit<IWellData, "id">

export type TAddNewWell = Omit<TAddWell, "author">

export type TUserRegister = {
  firstName?: string
  lastName?: string
  email?: string
  password?: string
  organization?: string
}

export type TWell = {
  well_name?: string
  active_from?: number | null
  status?: "PLAN" | "NOTA" | "ACTV" | "FINI"
  in_statistics?: boolean
  well_type?: "VNS0" | "NNS0" | "ZBS0" | "BGS0"
  RKB?: number | null
  coordinate_system?: string
  latitud?: number | null
  longtitude?: number | null
  NY?: number | null
  EX?: number | null
  north_direction?: "GRID" | "TRUE" | "MAGN"
  geomagnetic_model?: string
  geomagnetic_date?: Date | null
  btotal?: number | null
  dip?: number | null
  dec?: number | null
  grid_convergence?: number | null
  total_correction?: number | null
  gtotal?: number | null
  T1_start?: Date | null
  T1_end?: Date | null
  T3_start?: Date | null
  T3_end?: Date | null
  critical_azimuth?: boolean
  comment?: string
  pad_name?: string
}

export interface TCustomer {
  name?: string
  color?: string
  slug?: string
}

export type TLoginProfile = Pick<TUserRegister, "email" | "password">
