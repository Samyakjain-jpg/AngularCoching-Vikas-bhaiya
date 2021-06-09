import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleclasscomponentComponent } from './styleclasscomponent.component';

describe('StyleclasscomponentComponent', () => {
  let component: StyleclasscomponentComponent;
  let fixture: ComponentFixture<StyleclasscomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StyleclasscomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleclasscomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
