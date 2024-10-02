import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyParentComponent } from './lazy-parent.component';

describe('LazyParentComponent', () => {
  let component: LazyParentComponent;
  let fixture: ComponentFixture<LazyParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LazyParentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LazyParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
