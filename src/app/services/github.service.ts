import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
    private username:string;
    private client_id = 'cd523e0e52932f4fd97d';
    private client_secret = 'afb3a5f7d1a8a83aa70d02f36a18c41854bf31c0';
    constructor(private _http:Http){
        console.log('Github service ready');
        this.username = 'mwilki';
    }

    getUser(){
        return this._http.get('http://api.github.com/users/' + this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
            .map(res => res.json())
    }
    getRepos(){
        return this._http.get('http://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
            .map(res => res.json())
    }

    updateUser(username:string){
        this.username = username;
    }
}