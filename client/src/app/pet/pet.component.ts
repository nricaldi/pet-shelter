import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';

 @Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {
  public pet: any = {};
  public isLiked = false;

  constructor(private _http: HttpService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params['_id']);
      let observable = this._http.getOnePet(params['_id']);
      observable.subscribe(data => this.pet = data);
    })
  }

  likePet(_id){
    this.pet.likes++;
    let observable = this._http.editPet(_id, this.pet);
    observable.subscribe(data => {
      console.log(data);
    })
    
    this.isLiked = true;
  }

  adoptPet(_id){
    let observable = this._http.delete(_id);
    observable.subscribe(data => {
      console.log(data);
      this._router.navigate(['/']);
    })
  }

}
