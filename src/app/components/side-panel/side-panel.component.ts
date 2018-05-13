import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.scss']
})
export class SidePanelComponent implements OnInit {

  constructor() { }

  open : boolean = false;

  ngOnInit() {
    setTimeout(()=>{
      this.open = true
    }, 1000)

  }

}
