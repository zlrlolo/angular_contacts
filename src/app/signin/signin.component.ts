import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'



@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  signinForm = {
    email: '',
    password: ''
  }

  err_msg = ''

  // 在组件类中声明了一个私有成员 http 它的类型是 HttpClient
  // 那么 Angular 会自动去实例化 HttpClient 得到一个实例
  // 然后我们就可以在组件中使用 http 这个成员来调用一些请求方法了
  // 例如 http.get http.post...
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit() {
  }

  signin() {
    // 1. 表单验证
    // 2. 获取表单数据
    // 3. 发起 http 请求和服务端交互
    // 4. 根据响应结果做交互处理
    const formData = this.signinForm
    this.http.post('http://localhost:3000/session', this.signinForm)
      .toPromise()
      .then((data: any) => {
        window.localStorage.setItem('auth_token', data.token)
        // window.localStorage.setItem('user_info', JSON.stringify(data.user))
        this.router.navigate(['/'])
      })
      .catch(err => {
        if (err.status === 401) {
          this.err_msg = '登录失败，邮箱或者密码错误'
        }
      })
  }

}
