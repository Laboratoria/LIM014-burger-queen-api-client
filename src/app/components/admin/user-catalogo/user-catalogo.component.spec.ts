import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCatalogoComponent } from './user-catalogo.component';

describe('UserCatalogoComponent', () => {
  let component: UserCatalogoComponent;
  let fixture: ComponentFixture<UserCatalogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCatalogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCatalogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
