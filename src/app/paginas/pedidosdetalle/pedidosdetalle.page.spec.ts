import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PedidosdetallePage } from './pedidosdetalle.page';

describe('PedidosdetallePage', () => {
  let component: PedidosdetallePage;
  let fixture: ComponentFixture<PedidosdetallePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidosdetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
