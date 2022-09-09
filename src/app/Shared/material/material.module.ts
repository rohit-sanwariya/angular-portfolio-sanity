import { NgModule } from '@angular/core';

import {MatSidenavModule} from '@angular/material/sidenav'
import {MatIconModule} from '@angular/material/icon'
import {} from '@angular/material/sidenav'
import {} from '@angular/material/sidenav'


const matModules = [
  MatSidenavModule,
  MatIconModule
]

@NgModule({
  declarations: [],
  imports: [
     ...matModules
  ],
  exports:[
    ...matModules
  ]
})
export class MaterialModule { }
