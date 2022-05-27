import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaperfilComponent } from './paginaperfil.component';

describe('PaginaperfilComponent', () => {
  let component: PaginaperfilComponent;
  let fixture: ComponentFixture<PaginaperfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaperfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaperfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
