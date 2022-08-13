import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StuedentComponent  } from './stuedent/stuedent.component';
import { RoomComponent } from './room/room.component'

const routes: Routes = [
  { path: 'student', component: StuedentComponent },
  { path: 'room', component: RoomComponent },
  { path: '', redirectTo: 'student', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
