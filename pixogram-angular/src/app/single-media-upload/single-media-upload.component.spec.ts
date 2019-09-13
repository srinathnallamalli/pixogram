import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleMediaUploadComponent } from './single-media-upload.component';

describe('SingleMediaUploadComponent', () => {
  let component: SingleMediaUploadComponent;
  let fixture: ComponentFixture<SingleMediaUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleMediaUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleMediaUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
