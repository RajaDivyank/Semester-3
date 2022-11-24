import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpriencesComponent } from './expriences.component';

describe('ExpriencesComponent', () => {
  let component: ExpriencesComponent;
  let fixture: ComponentFixture<ExpriencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpriencesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpriencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
