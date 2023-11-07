/**
 * LoginResultVO，响应数据
 */
declare type LoginResult = {
  /**
   * 账号
   */
  account: string
  /**
   * 头像
   */
  avatar: string
  /**
   * 用户id
   */
  id: number
  /**
   * 手机号
   */
  mobile: string
  /**
   * 用户名
   */
  nickname: string
  /**
   * 登录token
   */
  token: string
}
declare type LoginParams = {
  code: string
}
