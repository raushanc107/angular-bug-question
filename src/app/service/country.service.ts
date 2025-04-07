import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  getCountries(): Observable<string[]> {
    const countries: string[] = [
      'India',
      'United States',
      'Germany',
      'Australia',
      'Canada',
      'Brazil',
      'France',
      'Japan',
      'South Korea',
      'United Kingdom',
      'Italy',
      'Spain',
      'Mexico',
      'Russia',
      'China',
      'Argentina',
      'Netherlands',
      'Switzerland',
      'Sweden',
      'Norway',
      'Denmark',
      'Finland',
      'Belgium',
      'Austria',
      'New Zealand',
      'South Africa',
      'Singapore',
      'Malaysia',
      'Thailand',
      'Indonesia',
      'Philippines',
      'Vietnam',
      'Turkey',
      'Saudi Arabia',
      'United Arab Emirates',
      'Egypt',
      'Nigeria',
      'Kenya',
      'Israel',
      'Portugal',
      'Ireland',
      'Greece',
      'Poland',
      'Ukraine',
      'Czech Republic',
      'Hungary',
      'Romania',
      'Chile',
      'Colombia',
      'Peru',
    ];

    return of(countries);
  }
}
