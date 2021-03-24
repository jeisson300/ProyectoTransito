import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateViaComponent } from './create-via.component';

describe('CreateViaComponent', () => {
  let component: CreateViaComponent;
  let fixture: ComponentFixture<CreateViaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateViaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateViaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
