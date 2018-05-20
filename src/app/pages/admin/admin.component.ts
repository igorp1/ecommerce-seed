import { Component, OnInit } from '@angular/core';
import { IContextMenuAction } from '../../services/context.service';
import { Router } from '@angular/router';

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
