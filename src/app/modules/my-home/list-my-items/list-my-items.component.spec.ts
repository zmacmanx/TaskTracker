import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMyItemsComponent } from './list-my-items.component';

describe('ListMyItemsComponent', () => {
  let component: ListMyItemsComponent;
  let fixture: ComponentFixture<ListMyItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMyItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMyItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
