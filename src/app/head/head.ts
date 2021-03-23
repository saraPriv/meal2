import { Component } from '@angular/core';
import {countOccurrences} from '@angular-devkit/build-angular/src/webpack/plugins/analytics';
import {count} from 'rxjs/operators';

@Component({
  selector: 'app-head',
  templateUrl: './head.html',
  styleUrls: ['./head.css']
})

// tslint:disable-next-line:class-name component-class-suffix
export class headComponent {
}
