import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainsidebarcontainerComponent } from './mainsidebarcontainer.component';

describe('MainsidebarcontainerComponent', () => {
  let component: MainsidebarcontainerComponent;
  let fixture: ComponentFixture<MainsidebarcontainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainsidebarcontainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainsidebarcontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
