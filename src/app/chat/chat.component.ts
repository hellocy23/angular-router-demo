import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: 'chat.component.html',
  styleUrls: ['chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor() { }

  // 组件声明周期中的钩子，在组件实例化后调用一次
  ngOnInit() {

  }

}
