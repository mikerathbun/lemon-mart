import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ManagerHomeComponent } from './manager-home/manager-home.component'
import { ManagerRoutingModule } from './manager-routing.module'
import { ManagerComponent } from './manager.component'

@NgModule({
  imports: [CommonModule, ManagerRoutingModule],
  declarations: [ManagerHomeComponent, ManagerComponent],
})
export class ManagerModule {}
