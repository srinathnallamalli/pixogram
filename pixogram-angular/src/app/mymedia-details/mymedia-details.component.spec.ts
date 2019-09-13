import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MymediaDetailsComponent } from './mymedia-details.component';

describe('MymediaDetailsComponent', () => {
  let component: MymediaDetailsComponent;
  let fixture: ComponentFixture<MymediaDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MymediaDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MymediaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
