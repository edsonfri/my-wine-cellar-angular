import { Component } from '@angular/core';
import { Wine } from '../model/wine';
import { MatTableModule } from '@angular/material/table'

@Component({
  selector: 'app-wines',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './wines.component.html',
  styleUrl: './wines.component.scss',

})
export class WinesComponent {

  wines: Wine[] = [
    {_id: '1', name: 'Rutini', type: 'Tinto', grape: 'Malbec', url: ''}
  ];

  displayedColumns = ['name','type','grape'];

}
