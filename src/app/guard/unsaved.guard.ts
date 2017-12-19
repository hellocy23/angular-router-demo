import { CanDeactivate } from "@angular/router";
import { ProductComponent } from '../product/product.component';

// 定义路由守卫方法，返回一个布尔值
export class UnsavedGuard implements CanDeactivate<ProductComponent> {  // <>表示泛型，指定当前要保护的组件类型
    canDeactivate(component: ProductComponent) {  // 参数为当前要保护的组件，可以传递组件的信息，比如属性，调用组件的方法
        return window.confirm("你还没有保存，确定要离开吗？");
    }
}