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
  nickname?: string
  /**
   * 登录token
   */
  token: string
}
declare type LoginParams = {
  code: string
}

/** 个人信息 用户详情信息 */
declare type ProfileDetail = {
  /** 用户ID */
  id: number
  /** 头像 */
  avatar: string
  /** 账户名 */
  account: string
  /** 昵称 */
  nickname?: string
  /** 性别 */
  gender?: Gender
  /** 生日 */
  birthday?: string
  /** 省市区 */
  fullLocation?: string
  /** 职业 */
  profession?: string
  /** 省份编码 */
  provinceCode?: string
  /** 城市编码 */
  cityCode?: string
  /** 区/县编码 */
  countyCode?: string
}
/** 性别 */
// declare type Gender = '女' | '男'
declare type Gender = 1 | 0

/** 个人信息 修改请求体参数 */
declare type ProfileParams = Pick<ProfileDetail, 'nickname' | 'gender' | 'birthday' | 'profession'> & {
  /** 省份编码 */
  provinceCode?: string
  /** 城市编码 */
  cityCode?: string
  /** 区/县编码 */
  countyCode?: string
}
