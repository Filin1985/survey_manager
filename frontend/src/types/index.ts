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
  color: string
  slug: string
}

export interface IWellData {
  id: number
  author: number
  customer: number
  contractor: number
  field: string
  rig: string
  well_number: string
  status: string
}

export type TAddContractor = Omit<IContractorData, "id">

export interface ICustomInputProps<T> {
  type?: string
  style?: object
  label: string
  extraLabel?: string
  name?: string
  value?: string
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
  contractor: number
  field: string
  rig: string
  well_number: string
  status: string
}

export type TAddWell = Omit<IWellData, "id">

export type TAddNewWell = Omit<TAddWell, "author">
