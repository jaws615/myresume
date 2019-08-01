import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-show-me',
  templateUrl: './show-me.component.html',
  styleUrls: ['./show-me.component.less']
})
export class ShowMeComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'About', cols: 1, rows: 1, content: '' },
          { title: 'Card 2', cols: 1, rows: 1, content: '' },
          { title: 'Card 3', cols: 1, rows: 1, content: '' },
          { title: 'Card 4', cols: 1, rows: 1, content: '' }
        ];
      }

      return [
        { id: 1, title: 'About', cols: 2, rows: 1, content: 'Dedicated Software Development Director with over 18 years of progressive information technology experience, 10 of them in managerial positions. Background includes leading large/small teams of technical professionals, creating and improving project management strategies, cultivating customer relationships and improving team and project performance. Strong communicator, able to find the proper communication approach to executive or subordinate. ' },
        { id: 2, title: '', cols: 1, rows: 2, content: ['Large/small IT team management',
          'Software product development and promotion',
          'Project Management'
          ]},
        { id: 3, title: '', cols: 1, rows: 2, content: ['Strategy development',
          'Business requirement creation',
          'Staff training and instructing',
          'Excellent communication skills' 
          ] }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
