import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  public pet : any = {};
  public errors : any = {};

  constructor(private _http: HttpService, private _router: Router, private _route: ActivatedRoute) { }
     
  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params['_id']);
      const observable = this._http.getOnePet(params['_id']);
      observable.subscribe( data => this.pet = data );
    });
  }

  updatePet(_id) {
    let observable = this._http.editPet(_id, this.pet);
    observable.subscribe(data => {
      if(data.errors) {
        this.errors = data.errors;
      }
      else {
        console.log("Pet updated");
        this._router.navigate([`pet/${_id}`]);
      } 
    })
  }

}
