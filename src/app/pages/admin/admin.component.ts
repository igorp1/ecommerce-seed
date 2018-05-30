import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IContextMenuAction } from '../../models/contextmenu.models';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  quickActions : IContextMenuAction[] = [ 
    { 
      'label':'Manage inventory',
      'action':()=>{ this.router.navigateByUrl('admin/inventory') },  
    }
  ];


  constructor(private router : Router) { }

  ngOnInit() {
  }

}
