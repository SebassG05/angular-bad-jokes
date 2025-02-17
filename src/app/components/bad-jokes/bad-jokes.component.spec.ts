import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadJokesComponent } from './bad-jokes.component';

describe('BadJokesComponent', () => {
  let component: BadJokesComponent;
  let fixture: ComponentFixture<BadJokesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BadJokesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BadJokesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
