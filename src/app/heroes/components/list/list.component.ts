import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public herosName: string[] = ['Spiderman', 'Ironman', 'Hulk', ' Superman', 'Flash']
  public deletedHero?: string;

  removeLastHero(){
    this.deletedHero = this.herosName.pop()
  }

}
