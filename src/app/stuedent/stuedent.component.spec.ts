import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StuedentComponent } from './stuedent.component';

describe('StuedentComponent', () => {
  let component: StuedentComponent;
  let fixture: ComponentFixture<StuedentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StuedentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StuedentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
