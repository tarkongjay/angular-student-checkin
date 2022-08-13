import { Component, OnInit } from '@angular/core';
import { StudentService, Opt, Student } from '../student.service';
@Component({
  selector: 'app-stuedent',
  templateUrl: './stuedent.component.html',
  styleUrls: ['./stuedent.component.css']
})
export class StuedentComponent implements OnInit {

  public studentCode: string = '001';
  public studentName: string = 'patipat';
  public grades: number[] = [1,2,3,4,5]
  public grade: number=1;

  public opts: Opt[] = [];
  public rooms: Opt[] = [];
  public students: Student[] = [];
  public room_ref: number= 0;
  constructor(private _studentServ: StudentService) { }

  ngOnInit(): void {
    this._studentServ.getGrades().subscribe(s => this.opts = s)
  }
gradeChange(){
this._studentServ.getRoomByGrades(this.grade).subscribe(s => this.rooms = s);

}
roomChange(){
  this._studentServ.getStudentByRoom(this.room_ref).subscribe(s => this.students = s);

  }
  helllo():any {
    alert('hello');
  }

}
