import { Component } from '@angular/core';

@Component({
  selector: 'sub-text-demo',
  templateUrl: './sub-text-demo.html'
})
export class SubTextDemoComponent {
  public items:Array<any> =
    [
      {
        id:1,
        text: 'Manuel',
        subText: 'Cañero Sancho'
      },
      {
        id:2,
        text: 'Pepe',
        subText: 'pepitoTest@gmail.com'
      },
      {
        id:3,
        text: 'Bruno',
        disabled: true,
        subText: 'brunodiazIsBatman@gmail.com'
      },
      {
        id:4,
        text: 'Arturito',
        subText: 'arturitoIsR2D2@gmail.com'
      },
      {
        id:5,
        text:'Severus',
        subText: 'snapeIsPiton@gmail.com'
      },
      {
        id: 6,
        text: 'Wolverine'
      }
    ];

  private value:any = {};
  private _disabledV:string = '0';
  private disabled:boolean = false;

  public selected(value:any):void {
    console.log('Selected value is: ', value);
  }

  public removed(value:any):void {
    console.log('Removed value is: ', value);
  }

  public typed(value:any):void {
    console.log('New search input: ', value);
  }

  public refreshValue(value:any):void {
    this.value = value;
  }
}
