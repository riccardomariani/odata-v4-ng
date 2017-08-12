import { HttpModule } from '@angular/http';
import { TestBed, inject } from '@angular/core/testing';
import { ODataService } from './odata.service';

describe('OdataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ODataService],
      imports: [HttpModule]
    });
  });

  it('should be created', inject([ODataService], (service: ODataService) => {
    expect(service).toBeTruthy();
  }));
});
