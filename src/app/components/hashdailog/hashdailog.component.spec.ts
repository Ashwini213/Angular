import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HashdailogComponent } from './hashdailog.component';

describe('HashdailogComponent', () => {
  let component: HashdailogComponent;
  let fixture: ComponentFixture<HashdailogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HashdailogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HashdailogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
