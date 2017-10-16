import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-sellerInfo',
  templateUrl: './seller-info.component.html',
  styleUrls: ['./seller-info.component.css']
})
export class SellerInfoComponent implements OnInit {

  private sellerId: number;

  constructor(private routeInfo: ActivatedRoute) { }

  // 组件声明周期中的钩子，在组件实例化后调用一次
  ngOnInit() {
    this.sellerId = this.routeInfo.snapshot.params["id"];
  }

}
