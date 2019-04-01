import * as mongoose from 'mongoose';
import { IMenu } from './interface/i-menu';
import { menuSchema } from './schema/menu-schema';

export let Schema = mongoose.Schema;
export let ObjectId = mongoose.Schema.Types.ObjectId;
export let Mixed = mongoose.Schema.Types.Mixed;
const schema = menuSchema;

export let HeroSchema = mongoose.model<IMenu>('menu', schema, 'menus', true);

export class MenuModel {
  private _menu: IMenu;

  constructor(menu: IMenu) {
    this._menu = menu;
  }

  static createMenu(name: string, power: string) : Promise.IThenable<IMenu> {
  }

  static findMenu(name: string) : Promise.IThenable<IMenu> {

  }

  Object.seal(HeroModel);

}