import {Injectable} from '@angular/core';

@Injectable()
export class TodoService {

  private _todoList = [
    { text: 'Meat Beef Escalope Fresh Perkg', category: 'beef'},
    { text: 'Meat Beef Ribeye Portion PER KG', category: 'beef'},
    { text: 'Chayote Per Kg', category: 'fruits_and_vegetables'},
    { text: 'Ferrarini Parmegiano Regiano Per KG', category: 'dairy'},
    { text: 'Argal Jambon Cocido Bonnatur Oro Per Kg', category: 'beef'},
    { text: 'Mini Burger Buns 9 Pieces', category: 'grains'},
    { text: 'Spinneys Labneh 400G', category: 'dairy' },
    { text: 'Ferrarini Mortadella Oregium Per KG', category: 'beef'},
    { text: 'Capsicum Red Local Per Kg', category: 'fruits_and_vegetables'},
    { text: 'Chicken Chicken Liver Loose Per Kg', category:'chicken'},
  ];

  getTodoList() {
    return this._todoList;
  }
}
