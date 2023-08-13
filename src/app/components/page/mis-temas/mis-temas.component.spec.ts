import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisTemasComponent } from './mis-temas.component';

describe('MisTemasComponent', () => {
  let component: MisTemasComponent;
  let fixture: ComponentFixture<MisTemasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MisTemasComponent]
    });
    fixture = TestBed.createComponent(MisTemasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
