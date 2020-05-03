import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddNewOrderPage } from './add-new-order.page';

describe('AddNewOrderPage', () => {
  let component: AddNewOrderPage;
  let fixture: ComponentFixture<AddNewOrderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewOrderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddNewOrderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
