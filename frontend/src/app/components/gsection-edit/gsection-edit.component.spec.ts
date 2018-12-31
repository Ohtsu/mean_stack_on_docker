import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GsectionEditComponent } from './gsection-edit.component';

describe('GsectionEditComponent', () => {
  let component: GsectionEditComponent;
  let fixture: ComponentFixture<GsectionEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GsectionEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GsectionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
