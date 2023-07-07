import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectVarientComponent } from './select-varient.component';

describe('SelectVarientComponent', () => {
  let component: SelectVarientComponent;
  let fixture: ComponentFixture<SelectVarientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectVarientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectVarientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
