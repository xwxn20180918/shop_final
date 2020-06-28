//包含多个接口的请求函数
//函数的返回值是promise对象
import ajax from './ajax'

const BASE = '/api'

//## 1、根据经纬度获取位置详情
export const reqAddress = (longitude,latitude) => ajax({
  url:BASE+`/position/${latitude},${longitude}`
})

//## 2、获取食品分类列表
export const reqCategorys = () => ajax(BASE+'/index_category',{
  headers: {
  needToken: true}
})

//## 3、根据经纬度获取商铺列表  query 参数 要用params 其他默认
export  const reqShops = ({latitude,longitude}) => ajax({
  url:BASE+'/shops',
  params:{
    latitude,
    longitude
  },
  headers: {
    needToken: true
  }
})
//测试接口
// reqAddress('116.36867','40.10038').then((result) => {
//   console.log('result',result);
// })
//## 4、发送短信验证码
export const reqSendCode = (phone) => ajax(BASE+'/sendcode',{
  params:{
    phone
  }
})

//## 5、用户名密码登陆
export const reqPwdLogin = ({name,pwd,captcha}) => ajax.post(BASE+'/login_pwd',{name,pwd,captcha})

//## 6、手机号验证码登陆
export const reqSmsLogin = (phone,code) => ajax.post(BASE+'/login_sms',{phone,code})

//根据会话获取用户信息

export const reqUserInfo = () => ajax(BASE + '/userinfo')

//用户登出
export const reqLogOut = () => ajax(BASE + '/logout')

//自动登录请求
export const reqAutoLogin = () => ajax({
  url: BASE + '/auto_login',
  headers: {
    needToken: true
  }
})

export const reqGoods = () => ajax('/goods')

export const reqRatings = () => ajax('/ratings')

export const reqInfo = () => ajax('/info')

