import { Component, Input } from '@angular/core';
import { MyCurs } from '../../../models/MyCurs';
import { typeCurs } from '../../../models/typeCurs';

@Component({
  selector: 'app-login-curs',
  templateUrl: './login-curs.component.html',
  styleUrl: './login-curs.component.scss'
})
export class LoginCursComponent {
  curses: MyCurs[] = [
    {name:"תכנות",hours:7,type:typeCurs.maabade,date:"06/08/2004"}, 
    {name:"עיצוב מדיה",hours:40,type:typeCurs.frontal,date:"04/02/2004"}, 
    {name:"אדריכלות",hours:102,type:typeCurs.maabade,date:"02/010/2004"}, 
    {name:"הוראה",hours:6000,type:typeCurs.frontal,date:"15/08/2004"},
    {name:"התעמלות",hours:4,type:typeCurs.frontal,date:"20/02/2022"},
    {name:"חינוך מיוחד",hours:500,type:typeCurs.frontal,date:"11/03/2023"}, 
  ]
  listCurs:string[] =['your courses'];
  c:number=0;
  addCours($event:string){
    this.listCurs[this.c++]=$event
  }
  deleteCours($event:string){
    for (let index = 0; index < this.listCurs.length; index++) {
      if(this.listCurs[index]==$event)
      {
        this.listCurs[index]='';
      }
    }
  }
  deleteAll(){
    for (let index = 0; index < this.listCurs.length; index++) {
        this.listCurs[index]='';
    }
  }
}
