import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {IncrementorComponent} from './incrementor.component';
import {By} from '@angular/platform-browser';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        IncrementorComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(IncrementorComponent);
    const comp:IncrementorComponent = fixture.debugElement.componentInstance;
    expect(comp.value).toBe(0);
  });

  it(`should have as title 'angular82'`, () => {
    const fixture = TestBed.createComponent(IncrementorComponent);
    const comp:IncrementorComponent = fixture.debugElement.componentInstance;
    const incBtn = fixture.debugElement.query(By.css('#increment'));

    incBtn.triggerEventHandler('click', null);

    expect(comp.value).toBe(1);
  });

});
