import { Component, inject } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CountryService } from './service/country.service';
import { map, withLatestFrom } from 'rxjs';
import { CommonModule } from '@angular/common';
import { HighlightPipe } from "./highlight.pipe";

@Component({
  selector: 'app-root',
  imports: [CommonModule, ReactiveFormsModule, HighlightPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'bug';
  filter = new FormControl('');
  countries$ = inject(CountryService).getCountries();

  filteredCountries$ = this.filter.valueChanges.pipe(
    withLatestFrom(this.countries$),
    map(([filter, countries]) => {
      return countries.filter((country) =>
        country.toLowerCase().includes(filter?.toLowerCase() ?? '')
      );
    })
  );
}
