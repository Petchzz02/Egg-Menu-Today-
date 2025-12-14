import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';


// 1. นำเข้า Component เมนูไข่
import { EggMenuComponent } from './egg-menu/egg-menu'; 

@Component({
  selector: 'app-root',
  standalone: true,
  // 2. เพิ่ม EggMenuComponent เข้าไปใน imports
  imports: [CommonModule, RouterOutlet, EggMenuComponent], 
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  title = 'my-app';
}