import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imperative-style',
  imports: [],
  templateUrl: './imperative-style.component.html',
  styleUrl: './imperative-style.component.scss'
})
export class ImperativeStyleComponent  implements OnInit{

  items: number[] = []

  getItems() {
    return [1,2,3,4,5]
  }


  ngOnInit(): void {
    this.items = this.getItems()
  }
}
