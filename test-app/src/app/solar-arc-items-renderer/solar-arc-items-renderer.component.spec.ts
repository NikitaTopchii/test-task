import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolarArcItemsRendererComponent } from './solar-arc-items-renderer.component';

describe('SolarArcItemsRendererComponent', () => {
  let component: SolarArcItemsRendererComponent;
  let fixture: ComponentFixture<SolarArcItemsRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolarArcItemsRendererComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolarArcItemsRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
