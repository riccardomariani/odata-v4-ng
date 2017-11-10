import { ODataModule } from '../odata.module';
import { TestBed, inject } from '@angular/core/testing';
import { ODataService } from './odata.service';

describe('OdataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ODataModule]
    });
  });

  it('should be created', inject([ODataService], (service: ODataService) => {
    expect(service).toBeTruthy();
  }));
});
