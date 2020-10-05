import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IooperationComponent } from './iooperation.component';

describe('IooperationComponent', () => {
  let component: IooperationComponent;
  let fixture: ComponentFixture<IooperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IooperationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IooperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
