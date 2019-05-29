import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteSearchBodyComponent } from './note-search-body.component';

describe('NoteSearchBodyComponent', () => {
  let component: NoteSearchBodyComponent;
  let fixture: ComponentFixture<NoteSearchBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteSearchBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteSearchBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
