import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular2-sample';

  user= {id:null,username:'',address:'',email:''};
  id : number = 4;
  users = [// In future posts, we will get it from server using service
    {id:1, username: 'Sam', address: 'NY', email: 'sam@abc.com'},
    {id:2, username: 'Tomy', address: 'ALBAMA', email: 'tomy@abc.com'},
    {id:3, username: 'kelly', address: 'NEBRASKA', email: 'kelly@abc.com'}
   ];

  edit(id: number): void{
    console.log('id to be edited', id);
    for(var i = 0; i < this.users.length; i++){
        if(this.users[i].id === id) {
          this.user = JSON.parse(JSON.stringify(this.users[i]));
           break;
        }
    }
}

 submit(): void {
      if(this.user.id === null){
        this.user.id = this.id++;
          console.log('Saving New User', this.user);    
          this.users.push(this.user);//Or send to server, we will do it in when handling services
      }else{
          for(var i = 0; i < this.users.length; i++){
              if(this.users[i].id === this.user.id) {
                this.users[i] = this.user;
                break;
              }
          }
         console.log('User updated with id ', this.user.id);
      }
      this.reset();
  };
   
 
   
  remove(id: number): void{
      console.log('id to be deleted', id);
      for(var i = 0; i < this.users.length; i++){
          if(this.users[i].id === id) {
            this.users.splice(i,1);
             if(this.user.id === id){//It is shown in form, reset it.
              this.reset();
             }
             break;
          }
      }
  }
   
  reset(): void{
    this.user={id:null,username: null, address:null, email:null};
     // $scope.myForm.$setPristine(); //reset Form
  }
}
