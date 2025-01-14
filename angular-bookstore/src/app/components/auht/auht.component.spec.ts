import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuhtComponent } from './auht.component';

describe('AuhtComponent', () => {
  let component: AuhtComponent;
  let fixture: ComponentFixture<AuhtComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuhtComponent]
    });
    fixture = TestBed.createComponent(AuhtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
