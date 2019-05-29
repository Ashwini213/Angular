import { Pipe, PipeTransform } from '@angular/core';
import { User } from './model/user';

@Pipe({
  name: 'user'
})
export class UserPipe implements PipeTransform {

  transform(users: User[], searchValue: any): any {
    console.log(users, searchValue);
    if (!searchValue || !users.length) {
      return null;
    } else {
      return users.filter(({ emailId }) => {
        return emailId.toLowerCase().includes(searchValue.toLowerCase());
      });
    }
  }

}
