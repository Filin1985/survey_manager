export type TProfile = {
  firstName: string
  email: string
  password?: string
  lastName: string
  organization: string
}

export type TLoginProfile = Pick<TProfile, "email" | "password">

export type TRegisterUserResponse = {
  id: number
  email: string
  firstName: string
  lastName: string
  username: string
  password: string
  organization: string
  access: string
  refresh: string
}

export type TGetUserInfo = {
  id: number
  firstName: string
  email: string
  lastName: string
  organization: string
}
