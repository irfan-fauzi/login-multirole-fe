/* eslint-disable @typescript-eslint/no-explicit-any */
interface AuthAttributes {
  id: number,
  email?: string | null,
  name?: string | null,
  roleId?: number | null,
  token?: string | null,
  menuAccess?: Array<any>,
}

export default AuthAttributes