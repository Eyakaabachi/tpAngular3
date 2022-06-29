import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  rue='';
  codePostal='';
  ville='';


  constructor(private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(res=>{
      this.ville=res.get('ville')??'';
      this.rue=res.get('rue')??'';
      this.codePostal=res.get('codePostal')??'';
      console.log(this.ville+' , '+this.rue+' , '+this.codePostal);
    });
  }

}
