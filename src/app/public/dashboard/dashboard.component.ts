import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  nom:any;
  prenom:any;
  constructor(private route:ActivatedRoute) { 
    console.log('hello from dashboard');
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe(res=>{
      this.nom = res.get('nom');
      this.prenom = res.get('prenom');
      console.log(this.nom+' '+this.prenom);
    });
  }

}
