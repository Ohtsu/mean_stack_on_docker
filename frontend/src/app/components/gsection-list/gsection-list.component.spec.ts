import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GsectionListComponent } from './gsection-list.component';

describe('GsectionListComponent', () => {
  let component: GsectionListComponent;
  let fixture: ComponentFixture<GsectionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GsectionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GsectionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
