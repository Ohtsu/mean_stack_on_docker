import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GsectionCreateComponent } from './gsection-create.component';

describe('GsectionCreateComponent', () => {
  let component: GsectionCreateComponent;
  let fixture: ComponentFixture<GsectionCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GsectionCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GsectionCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
