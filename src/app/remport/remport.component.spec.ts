import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemportComponent } from './remport.component';

describe('RemportComponent', () => {
  let component: RemportComponent;
  let fixture: ComponentFixture<RemportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
