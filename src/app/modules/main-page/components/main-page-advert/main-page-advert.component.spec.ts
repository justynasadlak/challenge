import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageAdvertComponent } from './main-page-advert.component';

describe('MainPageAdvertComponent', () => {
  let component: MainPageAdvertComponent;
  let fixture: ComponentFixture<MainPageAdvertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPageAdvertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageAdvertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
