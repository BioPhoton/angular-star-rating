import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingsConfigFormComponent } from './bindings-config-form.component';

describe('BindingsConfigFormComponent', () => {
  let component: BindingsConfigFormComponent;
  let fixture: ComponentFixture<BindingsConfigFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BindingsConfigFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BindingsConfigFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
