import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportNavigationComponent } from './report-navigation.component';

describe('ReportNavigationComponent', () => {
  let component: ReportNavigationComponent;
  let fixture: ComponentFixture<ReportNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
