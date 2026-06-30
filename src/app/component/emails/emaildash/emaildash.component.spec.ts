import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmaildashComponent } from './emaildash.component';

describe('EmaildashComponent', () => {
  let component: EmaildashComponent;
  let fixture: ComponentFixture<EmaildashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmaildashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmaildashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
