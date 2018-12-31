import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GsectionViewComponent } from './gsection-view.component';

describe('GsectionViewComponent', () => {
  let component: GsectionViewComponent;
  let fixture: ComponentFixture<GsectionViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GsectionViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GsectionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
