import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JvlogListComponent } from './jvlog-list.component';

describe('JvlogListComponent', () => {
  let component: JvlogListComponent;
  let fixture: ComponentFixture<JvlogListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JvlogListComponent]
    });
    fixture = TestBed.createComponent(JvlogListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
