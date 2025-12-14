import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // <--- 1. เพิ่มบรรทัดนี้

@Component({
  selector: 'app-egg-menu',
  standalone: true, // <--- 2. ตรวจสอบว่ามีบรรทัดนี้
  imports: [CommonModule], // <--- 3. สำคัญมาก! ต้องเพิ่มบรรทัดนี้เพื่อให้ใช้ *ngFor ได้
  templateUrl: './egg-menu.html',
  styleUrls: ['./egg-menu.css']
})
export class EggMenuComponent {

  selectedMenu: any = null;

  menus = [
    {
      nameTH: 'ไข่ยู้ยี้',
      nameEN: 'Stir-fried Eggs with Curry',
      image: 'https://cms.dmpcdn.com/food/2020/07/01/dcb25d60-bbab-11ea-9456-fbd696396816_original.jpg',
      level: 'ง่าย',
      time: '10 นาที',
      difficulty: 'easy',
      ingredients: ['ไข่ไก่ 3 ฟอง', 'นมข้นจืด', 'พริกชี้ฟ้า', 'หอมแดง', 'น้ำปลา'],
      steps: ['ตอกไข่ใส่ชาม', 'ตีผสมให้เข้ากัน', 'ตั้งกระทะไฟกลาง', 'เทไข่ลงไปรอจนสุกพอดี', 'ราดซอสที่ชอบ']
    },
    {
      nameTH: 'ยำไข่ยางมะตูม',
      nameEN: 'Spicy Soft-boiled Egg Salad',
      image: 'https://food.mthai.com/app/uploads/2018/06/Soft-Boiled-eggs-spicy-salad-5.jpg',
      level: 'ปานกลาง',
      time: '15 นาที',
      difficulty: 'medium',
      ingredients: ['ไข่ต้มยางมะตูม 2 ฟอง', 'หอมแดงซอย', 'พริกขี้หนู', 'น้ำมะนาว', 'น้ำปลา', 'ผักชี'],
      steps: ['ต้มไข่จับเวลา 6-7 นาที', 'แช่น้ำเย็นทันที', 'ผ่าครึ่งไข่จัดใส่จาน', 'ผสมน้ำยำ (พริก มะนาว น้ำปลา)', 'ราดน้ำยำและโรยผักชี']
    }
  ];

  openMenu(menu: any) {
    this.selectedMenu = menu;
  }
}