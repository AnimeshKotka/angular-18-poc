import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EagerChild2Component } from './eager-child2.component';

describe('EagerChild2Component', () => {
  let component: EagerChild2Component;
  let fixture: ComponentFixture<EagerChild2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EagerChild2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EagerChild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
