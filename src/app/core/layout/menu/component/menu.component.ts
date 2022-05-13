import { Component } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  sections = [
    {
      id: 'quienes',
      title: 'Quiénes somos',
    },
    {
      id: 'hacemos',
      title: 'Qué hacemos',
    }
  ];

  isHandset$: Observable<boolean> = this.breakpointObserver
    // .observe(Breakpoints.Handset)
    .observe('(max-width: 768px)')
    .pipe(
      map((result) => {
        return result.matches;
      }),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) { }

}
