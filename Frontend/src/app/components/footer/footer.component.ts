import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  dropList(){
    const list= document.querySelectorAll(".list")
    console.log(list)
    list.forEach(list => {
    const select = list.querySelector(".arrow")
    console.log(select)
    select?.addEventListener("click",()=>{
      list.classList.toggle("active")
    })
  });
  }
}
