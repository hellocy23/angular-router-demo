import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private productId: number;

  constructor(private routerInfo: ActivatedRoute) { }

  // 组件声明周期中的钩子，在组件实例化后调用一次
  ngOnInit() {
    //参数快照
    // this.productId = this.routerInfo.snapshot.params["id"];
    //参数订阅
    this.routerInfo.params.subscribe((params: Params) => this.productId = params["id"]);
  }

}
