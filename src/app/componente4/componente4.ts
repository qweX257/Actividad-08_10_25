import { Component } from '@angular/core'; 
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms'; 


@Component({ 
  selector: 'app-componente3', 
  standalone: true, 
  imports: [CommonModule, FormsModule], 
  templateUrl: './componente4.html', 
  styleUrls: ['./componente4.css'] 
}) 

export class componente4 { 

  email = ''; 
  password = ''; 
  submitted = false; 
  
  onSubmit(): void { 
    this.submitted = true; 
    console.log('Correo:', this.email); 
    console.log('Contraseña:', this.password); 
  } 

}
