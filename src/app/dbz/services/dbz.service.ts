import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';


@Injectable({
  providedIn: 'root'
})
export class DbzService {

  constructor() { }

  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krilin',
      power: 1000,
    },
    {
      id: uuid(),
      name: 'Koku',
      power: 9500,
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 7000
    }
  ];


  addCharacter(character: Character): void{
    const newCharacter: Character = {id: uuid(), ...character}
    this.characters.push(newCharacter)
  }

  deleteCharacterById(id: string){
    //this.characters.splice(index, 1);
    this.characters = this.characters.filter( character => character.id !== id);
  }
}
