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
      image: 'https://images.unsplash.com/photo-1608039829572-78524f79cbdf?w=600&h=400&fit=crop',
      level: 'ง่าย',
      time: '10 นาที',
      difficulty: 'easy',
      ingredients: ['ไข่ไก่ 3 ฟอง', 'นมข้นจืด', 'พริกชี้ฟ้า', 'หอมแดง', 'น้ำปลา'],
      steps: ['ตอกไข่ใส่ชาม', 'ตีผสมให้เข้ากัน', 'ตั้งกระทะไฟกลาง', 'เทไข่ลงไปรอจนสุกพอดี', 'ราดซอสที่ชอบ']
    },
    {
      nameTH: 'ยำไข่ยางมะตูม',
      nameEN: 'Spicy Soft-boiled Egg Salad',
      image: 'https://images.unsplash.com/photo-1589880449541-664c17c00861?w=600&h=400&fit=crop',
      level: 'ปานกลาง',
      time: '15 นาที',
      difficulty: 'medium',
      ingredients: ['ไข่ต้มยางมะตูม 2 ฟอง', 'หอมแดงซอย', 'พริกขี้หนู', 'น้ำมะนาว', 'น้ำปลา', 'ผักชี'],
      steps: ['ต้มไข่จับเวลา 6-7 นาที', 'แช่น้ำเย็นทันที', 'ผ่าครึ่งไข่จัดใส่จาน', 'ผสมน้ำยำ (พริก มะนาว น้ำปลา)', 'ราดน้ำยำและโรยผักชี']
    },
    {
      nameTH: 'ไข่เจียวฟู',
      nameEN: 'Fluffy Thai Omelet',
      image: 'https://images.unsplash.com/photo-1604908815604-8c0fc8c6b838?w=600&h=400&fit=crop',
      level: 'ง่าย',
      time: '5 นาที',
      difficulty: 'easy',
      ingredients: ['ไข่ไก่ 2-3 ฟอง', 'ซีอิ๊วขาว', 'น้ำมันพืช', 'หอมซอย (ถ้าชอบ)'],
      steps: ['ตอกไข่ตีให้ฟูมาก', 'ตั้งน้ำมันให้ร้อนจัด', 'เทไข่ลงจากที่สูง', 'ทอดจนกรอบเหลือง', 'ตักขึ้นสะเด็ดน้ำมัน']
    },
    {
      nameTH: 'ไข่ดาว',
      nameEN: 'Fried Egg (Sunny Side Up)',
      image: 'https://images.unsplash.com/photo-1525351326368-efbb5cb6814d?w=600&h=400&fit=crop',
      level: 'ง่ายมาก',
      time: '3 นาที',
      difficulty: 'easy',
      ingredients: ['ไข่ไก่ 1-2 ฟอง', 'น้ำมันพืช', 'เกลือเล็กน้อย'],
      steps: ['ตั้งกระทะใส่น้ำมัน', 'รอน้ำมันร้อน', 'ตอกไข่ลงกระทะ', 'โรยเกลือนิดหน่อย', 'รอจนสุกตามชอบ']
    }
  ];

  openMenu(menu: any) {
    this.selectedMenu = menu;
  }
}