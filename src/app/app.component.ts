import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FirstApp';
  data = 500;
myFunction(){
  alert("My First Alert");
}
student = ["Vivek", "Sahil", "Sajid"];
 
arena = {
  arena1:"Arena South Extension",
  arena2:"Arena Preet Vihar",
  arena3:"Arena Kohat Enclave",
  arena4:"Arena Chandigarh"
}
myEvent(){
console.log("Event Checked");
}
}
