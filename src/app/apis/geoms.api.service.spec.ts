import { TestBed } from '@angular/core/testing';
import { GeomsApiService } from './geoms.api.service';


describe('Geoms.ApiService', () => {
  let service: GeomsApiService 

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeomsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
