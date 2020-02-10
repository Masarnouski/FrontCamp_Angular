import { Injectable } from '@angular/core';
import { isNgTemplate } from '@angular/compiler';

@Injectable({
    providedIn: 'root'
  })
  export class SessionService {
  
    constructor(private windiwSessingStorage: WindowSessionStorage) {
    }
    setItem(key,item){
        this.windiwSessingStorage.sessionStorage.setItem(key,item);
    }
    getItem(key){
      return this.windiwSessingStorage.sessionStorage.getItem(key);
    }
}