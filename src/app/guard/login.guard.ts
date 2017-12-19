import { CanActivate } from "@angular/router";

// 定义路由守卫方法，返回一个布尔值
export class LoginGuard implements CanActivate {
    canActivate() {
        let loggedIn: boolean = Math.random() < 0.5;  // 用随机数模拟登陆信息
        if(!loggedIn) {
            console.log("用户未登录");
        }
        return loggedIn;
    }
}