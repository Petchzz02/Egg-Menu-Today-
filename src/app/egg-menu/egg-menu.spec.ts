import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EggMenu } from './egg-menu';

describe('EggMenu', () => {
  let component: EggMenu;
  let fixture: ComponentFixture<EggMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EggMenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EggMenu);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
