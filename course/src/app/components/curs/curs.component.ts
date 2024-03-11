import { Component, EventEmitter, Input, Output } from "@angular/core";import { MyCurs } from '../../../models/MyCurs';
import { typeCurs } from '../../../models/typeCurs';
@Component({
  selector: 'app-curs',
  templateUrl: './curs.component.html',
  styleUrl: './curs.component.scss'
})

export class CursComponent {
  
  @Input()
  curs:MyCurs={name:'',hours:0,type:typeCurs.frontal,date:""};
  @Input()
  i:number=0;
  @Output()
    e:EventEmitter<string> = new EventEmitter<string>()
    @Output()
    delete:EventEmitter<string> = new EventEmitter<string>()
  button:string="להרשמה לקורס";
  alerrt(cours:MyCurs){
    if(cours.date>'05')
    {
      this.e.emit(this.curs.name )
      if(this.button=="להרשמה לקורס")
      {
        this.button="לביטול הקורס";
        alert('הרישום בוצע בהצלחה');
      }
     
    else
  {
    alert('הקורס בוטל בהצלחה');
    this.button="להרשמה לקורס";
    this.delete.emit(this.curs.name)
  }
    }
    else
    alert('הקורס נגמר')
  }
}
