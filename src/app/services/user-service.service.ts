import { Injectable } from '@angular/core';
import { ContactService } from './contact.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private contactService:ContactService) { }

  users=[
    {
      "_id": "5a56640269f443a5d64b32ca",
      name: "puki meiri",
      coins: 100,
      moves:[],
      password:'1234'
    },
    {
      "_id": "5a5664025f6ae9aa24a99fde",
      name: "polo mark",
      coins:100,
      moves:[],
      password:'4321'
    },
    {
      "_id": "5a5664025f6a",
      name: "shachar",
      coins:100,
      moves:[],
      password:'2212'
    }
  ]


  getUser(id=null){
    const user= this.users.find(user=>user._id===id)
    return user
  }

  onLogin(credential){
    const user = this.users.find(user=>user.name===credential.name&&user.password===credential.password)
    console.log(user);
    this.saveToStorage('user',user)
    return user
    // const newUser = this.getEmptyUser()
    // newUser.name=credential
    // this.users.push(newUser)
    
  }

   getEmptyUser(){
    return {
      "_id": Math.random(),
      name: '',
      coins:100,
      moves:[],
      password:''
    }
  }

  transferCoins(currContact,coins){
    const loggedUser = this.loadFromStorage('user')
    loggedUser.coins-=coins
    loggedUser.moves.unshift(`transfer ${coins} coins to ${currContact.name}`)
    this.saveToStorage('user',loggedUser)
    const currUserIdx = this.users.findIndex(user=>user._id===loggedUser._id)
    const copy = [...this.users]
    copy[currUserIdx].coins-=coins
    this.users=copy
    const contacts = this.contactService.loadContacts()  
    const copyContacts=[...contacts]
    const currContactIdx = contacts.findIndex(contact=>contact._id===currContact._id)
    copyContacts[currContactIdx].coins+=coins
    copyContacts[currContactIdx].moves.unshift(`${loggedUser.name} transfer you ${coins} coins`)
    this.contactService.saveContact(copyContacts[currContactIdx])
  }






  loadFromStorage(key) {
   var json = localStorage.getItem(key)
   var value = JSON.parse(json)
   return value;
  }
  
  saveToStorage(key, value) {
   var json = JSON.stringify(value);
   localStorage.setItem(key, json)
  }
}


