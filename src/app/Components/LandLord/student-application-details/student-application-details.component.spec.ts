import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentApplicationDetailsComponent } from './student-application-details.component';

describe('StudentApplicationDetailsComponent', () => {
  let component: StudentApplicationDetailsComponent;
  let fixture: ComponentFixture<StudentApplicationDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentApplicationDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentApplicationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
