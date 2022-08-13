import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

const urlapi='http://su-angular.ddns.net/api/su-angular';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private _http: HttpClient) { }

  getGrades(): Observable<Opt[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    const params = new HttpParams()
      .set('topic', 'grade')
      .set('func', 'get_all');

    const options = { headers, "observe?": "body", params };

    return this._http.get<Opt[]>(urlapi, options);

    // return of([
    //   {Value: 1, Name: 'Class1'},
    //   {Value: 2, Name: 'Class2'},
    //   {Value: 3, Name: 'Class3'},
    // ]);
  }
  getRoomByGrades(grade_ref: number): Observable<Opt[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    const params = new HttpParams()
      .set('topic', 'room')
      .set('func', 'get_by_grade')
      .set('grade_ref', grade_ref);
    const options = { headers, "observe?": "body", params };

    return this._http.get<Opt[]>(urlapi, options);
  }

  getStudentByRoom(room_ref: number): Observable<Student[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    const params = new HttpParams()
      .set('topic', 'student')
      .set('func', 'get_by_room')
      .set('room_ref', String(room_ref));
    const options = { headers, "observe?": "body", params };

    return this._http.get<Student[]>(urlapi, options);
  }
}


export interface Opt {
  Value: number,
  Name: string,
}
export interface Student {
  Ref: number,
  GradeRef: number,
  GradeName: string,
  RoomRef: number,
  RoomName: string,
  No: number,
 Code: string,
 FirstName: string,
 LastName: string,
 Title: number,
 IdCard: string,
}
