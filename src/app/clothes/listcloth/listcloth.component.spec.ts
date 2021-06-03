import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListclothComponent } from './listcloth.component';

describe('ListclothComponent', () => {
  let component: ListclothComponent;
  let fixture: ComponentFixture<ListclothComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListclothComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListclothComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
