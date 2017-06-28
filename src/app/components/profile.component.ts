import { Component } from '@angular/core';
import {GithubService} from '../services/github.service';
import {FormsModule} from "@angular/forms";
import 'rxjs/add/operator/map';
@Component({
    moduleId: module.id,
    selector: 'profile',
    templateUrl: 'profile.component.html'
})
export class ProfileComponent {

 user[];
 repos[];
 username:string;
 // inject service as a dependency
 constructor(private _githubService:GithubService){
        this.user = false;
   }

   searchUser(){
     this._githubService.updateUser(this.username);
     this._githubService.getUser().subscribe(user => {
        console.log(user); 
        this.user = user;
     })
     this._githubService.getRepos().subscribe(repos => {
        this.repos = repos;
     })
   }
}