import { Component, OnInit } from '@angular/core';
import { NavLinkSchema } from '../Interfaces/NavLinkSchema';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  linkList:Array<NavLinkSchema>=[
    {title:'Home',path:'home'},
    {title:'Work',path:'work'},
    {title:'Skills',path:'skills'},
    {title:'About',path:'about'},
    {title:'Contact',path:'contact'},
 ]
  constructor() { }

  ngOnInit(): void {
  }

}
