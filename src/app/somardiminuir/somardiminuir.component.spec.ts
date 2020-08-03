import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SomardiminuirComponent } from './somardiminuir.component';

describe('SomardiminuirComponent', () => {
  let component: SomardiminuirComponent;
  let fixture: ComponentFixture<SomardiminuirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SomardiminuirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SomardiminuirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
