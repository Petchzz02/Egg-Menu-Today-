# 🍳 เมนูไข่วันนี้ (Egg Menu Today)

โปรเจค Angular สำหรับแสดงเมนูอาหารจากไข่แบบ Modern UI/UX พร้อม Card Layout และ Modal แบบสวยงาม

## 📋 รายละเอียดโปรเจค

แอปพลิเคชันเว็บแสดงเมนูอาหารจากไข่ที่ออกแบบด้วย:
- **Angular 21** - Framework หลัก
- **Bootstrap 5** - สำหรับ UI Components และ Modal
- **Standalone Components** - โครงสร้างแบบ Modern Angular
- **Responsive Design** - รองรับทุกขนาดหน้าจอ

## ✨ Features

- 🎨 **Modern UI/UX Design** - Card-based layout พร้อม gradient สีสันสวยงาม
- 🖼️ **รูปภาพคุณภาพสูง** - ใช้รูปจาก Unsplash API
- ⏱️ **Badge System** - แสดงเวลา ระดับความยาก และจำนวนวัตถุดิบ
- 🎭 **Hover Effects** - Animation เมื่อเอาเมาส์ชี้
- 📱 **Responsive** - ใช้งานได้ทั้ง Desktop, Tablet, Mobile
- 🎪 **Modal Recipe Detail** - แสดงสูตรอาหารแบบละเอียด
- 🎯 **Clean Code** - ใช้ TypeScript และ CSS Variables

## 🛠️ Technology Stack

- **Angular** v21.0.0
- **TypeScript** v5.7.2
- **Bootstrap** v5.3.3
- **RxJS** v7.8.0
- **Vite** - Build tool

## 📦 Installation

1. Clone โปรเจค:
```bash
git clone <repository-url>
cd 14-12-68
```

2. ติดตั้ง dependencies:
```bash
npm install
```

## 🚀 Development Server

เริ่มต้น development server:

```bash
npm start
```

หรือ

```bash
ng serve
```

เปิดเบราว์เซอร์ไปที่ `http://localhost:4200/` แอปจะ auto-reload เมื่อมีการแก้ไขไฟล์

## 🏗️ Build

Build โปรเจคสำหรับ production:

```bash
npm run build
```

ไฟล์ที่ build เสร็จจะอยู่ใน `dist/` directory

## 📁 โครงสร้างโปรเจค

```
src/
├── app/
│   ├── app.ts              # Main App Component
│   ├── app.html            # App Template
│   ├── app.css             # App Styles
│   ├── app.config.ts       # App Configuration
│   ├── app.routes.ts       # Routing Configuration
│   └── egg-menu/           # Egg Menu Component
│       ├── egg-menu.ts     # Component Logic
│       ├── egg-menu.html   # Template (Card Grid + Modal)
│       └── egg-menu.css    # Styles (Modern UI)
├── index.html              # HTML Entry Point
├── main.ts                 # Application Bootstrap
└── styles.css              # Global Styles

public/                     # Static Assets
```

## 🎨 Features ของ Egg Menu Component

### Card Layout
- Grid responsive (1-3 columns)
- รูปภาพขนาด 280px สวยงาม
- Badge แสดง: เวลา, ระดับความยาก, จำนวนวัตถุดิบ
- Hover effect: ลอยขึ้น + แสดง overlay "ดูสูตร"

### Modal Recipe Detail
- Header gradient พร้อมไอคอน
- Meta information (เวลา, ระดับ, จำนวนวัตถุดิบ)
- วัตถุดิบ (Ingredients List) พร้อม hover effect
- ขั้นตอน (Steps) แบบเลขลำดับพร้อม gradient badge
- ปุ่มปิดแบบ gradient

### Animations
- Fade in effects
- Bounce animation สำหรับ header icon
- Hover transitions
- Smooth scrolling

## 🔧 การเพิ่มเมนูใหม่

แก้ไขไฟล์ `src/app/egg-menu/egg-menu.ts`:

```typescript
menus = [
  {
    nameTH: 'ชื่อเมนูภาษาไทย',
    nameEN: 'English Menu Name',
    image: 'URL รูปภาพ',
    level: 'ง่าย' | 'ปานกลาง' | 'ยาก',
    time: 'X นาที',
    difficulty: 'easy' | 'medium' | 'hard',
    ingredients: ['วัตถุดิบ 1', 'วัตถุดิบ 2'],
    steps: ['ขั้นตอน 1', 'ขั้นตอน 2']
  }
];
```

## 🎯 Scripts ที่มีให้ใช้งาน

```bash
npm start          # เริ่ม dev server
npm run build      # Build production
npm test           # รัน unit tests
npm run watch      # Build และ watch for changes
```

## 📱 Responsive Breakpoints

- **Desktop**: > 768px (3 columns)
- **Tablet**: 768px (2 columns)
- **Mobile**: < 768px (1 column)

## 🎨 Color Palette

- **Primary**: #fdcb6e (Yellow)
- **Secondary**: #e17055 (Orange)
- **Success**: #00b894 (Green)
- **Info**: #74b9ff (Blue)
- **Background**: #ffeaa7 → #ffffff (Gradient)

## 👨‍💻 Development

เมนูตัวอย่างในโปรเจค:
1. **ไข่ยู้ยี้** (Stir-fried Eggs with Curry) - ง่าย, 10 นาที
2. **ยำไข่ยางมะตูม** (Spicy Soft-boiled Egg Salad) - ปานกลาง, 15 นาที

## 📄 License

โปรเจคนี้สร้างขึ้นเพื่อการศึกษา

## 🙏 Credits

- **รูปภาพ**: [Unsplash](https://unsplash.com)
- **Icons**: Unicode Emojis
- **UI Framework**: Bootstrap 5
- **Framework**: Angular 21

---

Made with ❤️ and 🍳 by Angular Team

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
