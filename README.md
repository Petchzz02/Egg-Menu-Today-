# 🍳 เมนูไข่วันนี้ (Egg Menu Today)

โปรเจค Angular สำหรับแสดงเมนูอาหารจากไข่แบบ Modern UI/UX พร้อม Card Layout และ Bootstrap Modal

## 📋 รายละเอียดโปรเจค

แอปพลิเคชันเว็บแสดงเมนูอาหารจากไข่พร้อมสูตรอาหาร ออกแบบด้วย:
- **Angular 21** - Framework หลักแบบ Standalone Components
- **Bootstrap 5.3.8** - สำหรับ Modal และ UI Components
- **TypeScript 5.9.2** - Type-safe development
- **Vitest** - Unit testing framework
- **Responsive Design** - รองรับทุกขนาดหน้าจอ

## ✨ Features

- 🎨 **Modern UI/UX Design** - Card-based layout พร้อม gradient สีสันสวยงาม
- 🖼️ **รูปภาพคุณภาพสูง** - แสดงรูปเมนูอาหารขนาด 280px
- ⏱️ **Badge System** - แสดงเวลาทำอาหาร, ระดับความยาก, และจำนวนวัตถุดิบ
- 🎭 **Hover Effects** - Card animation ยกขึ้น + image overlay เมื่อเอาเมาส์ชี้
- 📱 **Fully Responsive** - Grid layout ปรับตามหน้าจอ (1-3 columns)
- 🎪 **Bootstrap Modal** - แสดงสูตรอาหารแบบละเอียดพร้อม ingredients และ steps
- 🎯 **Clean Code** - TypeScript strict typing + CSS Custom Properties
- ✨ **Smooth Animations** - Fade in, bounce, และ hover transitions

## 🛠️ Technology Stack

- **Angular** v21.0.0 (Standalone Components)
- **TypeScript** v5.9.2
- **Bootstrap** v5.3.8
- **RxJS** v7.8.0
- **Vitest** v4.0.8 (Testing)
- **Angular CLI** v21.0.2
- **NPM** v11.6.2

## 📦 Installation

1. Clone repository:
```bash
git clone <repository-url>
cd "Egg Menu Today"
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

เปิดเบราว์เซอร์ไปที่ `http://localhost:4200/` 

แอปจะ auto-reload อัตโนมัติเมื่อมีการแก้ไขไฟล์

## 🏗️ Build

Build โปรเจคสำหรับ production:

```bash
npm run build
```

ไฟล์ที่ build เสร็จจะอยู่ใน `dist/` directory

## 🧪 Testing

Run unit tests ด้วย Vitest:

```bash
npm test
```

## 📁 โครงสร้างโปรเจค

```
Egg Menu Today/
├── angular.json              # Angular CLI configuration
├── package.json              # Dependencies และ scripts
├── tsconfig.json             # TypeScript configuration
├── tsconfig.app.json         # App-specific TS config
├── tsconfig.spec.json        # Test-specific TS config
├── README.md                 # เอกสารโปรเจค
│
├── public/                   # Static assets
│
└── src/
    ├── index.html            # HTML entry point
    ├── main.ts               # Application bootstrap
    ├── styles.css            # Global styles
    │
    └── app/
        ├── app.ts            # Root component (AppComponent)
        ├── app.html          # App template (router-outlet + egg-menu)
        ├── app.css           # App styles
        ├── app.config.ts     # Application configuration
        ├── app.routes.ts     # Routing configuration
        ├── app.spec.ts       # App unit tests
        │
        └── egg-menu/         # Egg Menu Feature Component
            ├── egg-menu.ts   # Component logic (menus data + selectedMenu)
            ├── egg-menu.html # Template (card grid + Bootstrap modal)
            ├── egg-menu.css  # Styles (modern UI + animations)
            └── egg-menu.spec.ts # Component tests
```

## 🎨 Component Structure

### AppComponent (`app/`)
- **Root component** ของแอปพลิเคชัน
- ใช้ `router-outlet` สำหรับ routing
- Import และแสดง `EggMenuComponent`
- Standalone component พร้อม CommonModule

### EggMenuComponent (`app/egg-menu/`)
**Standalone component** สำหรับแสดงเมนูอาหารจากไข่

#### Properties:
- `menus[]` - Array ของเมนูอาหาร (2 เมนู)
  - nameTH, nameEN (ชื่อเมนู)
  - image (URL รูปภาพ)
  - level, difficulty (ระดับความยาก)
  - time (เวลาทำอาหาร)
  - ingredients[] (วัตถุดิบ)
  - steps[] (ขั้นตอนการทำ)
- `selectedMenu` - เมนูที่เลือกสำหรับแสดงใน modal

#### Methods:
- `openMenu(menu)` - เปิด modal แสดงรายละเอียดสูตร

#### Features:
1. **Card Grid Layout**
   - Responsive grid (1-3 columns ตามหน้าจอ)
   - รูปภาพสูง 280px พร้อม overlay "ดูสูตร 📖"
   - Badge system: เวลา (⏱️), ระดับ (⭐), จำนวนวัตถุดิบ (🥘)
   - Hover effects: ยกขึ้น, scale, border color

2. **Bootstrap Modal**
   - แสดงเมื่อคลิกที่ card
   - Header gradient พร้อม icon 👨‍🍳
   - Recipe meta (เวลา, ระดับ, วัตถุดิบ)
   - Ingredients list พร้อม bullets
   - Numbered steps พร้อม gradient badges

## 🍳 เมนูอาหารในระบบ

### 1. ไข่ยู้ยี้ (Stir-fried Eggs with Curry)
- **ระดับ**: ง่าย ⭐
- **เวลา**: 10 นาที
- **วัตถุดิบ**: 5 อย่าง (ไข่ไก่, นมข้นจืด, พริกชี้ฟ้า, หอมแดง, น้ำปลา)
- **ขั้นตอน**: 5 ขั้นตอน
- **รูปภาพ**: dmpcdn.com/food

### 2. ยำไข่ยางมะตูม (Spicy Soft-boiled Egg Salad)
- **ระดับ**: ปานกลาง ⭐⭐
- **เวลา**: 15 นาที
- **วัตถุดิบ**: 6 อย่าง (ไข่ต้มยางมะตูม, หอมแดงซอย, พริกขี้หนู, น้ำมะนาว, น้ำปลา, ผักชี)
- **ขั้นตอน**: 5 ขั้นตอน
- **รูปภาพ**: food.mthai.com

## 🎨 Styling & Animations

### CSS Features:
- **CSS Custom Properties** (CSS Variables)
- **Flexbox & Grid** layouts
- **Gradient backgrounds** (linear-gradient)
- **Box shadows** with color opacity
- **Transform animations** (translateY, scale, rotate)
- **Transition effects** (cubic-bezier timing)

### Key Animations:
```css
@keyframes fadeInDown    /* Header slide down */
@keyframes fadeInUp      /* Cards slide up */
@keyframes bounce        /* Header icon bounce */
```

### Hover Effects:
- Card: `translateY(-12px) scale(1.02)` + shadow
- Image: `scale(1.15) rotate(2deg)`
- Border colors: เปลี่ยนตาม difficulty (green/yellow)
- Overlay: fade in ด้วย "ดูสูตร" button

### Color Palette:
- **Primary Yellow**: `#fdcb6e` → `#ffeaa7`
- **Success Green**: `#00b894`
- **Info Blue**: `#74b9ff` → `#0984e3`
- **Text Dark**: `#2d3436`
- **Text Gray**: `#636e72`

## 🔧 การเพิ่มเมนูใหม่

แก้ไขไฟล์ [src/app/egg-menu/egg-menu.ts](src/app/egg-menu/egg-menu.ts):

```typescript
menus = [
  {
    nameTH: 'ชื่อเมนูภาษาไทย',
    nameEN: 'English Menu Name',
    image: 'https://example.com/image.jpg',
    level: 'ง่าย' | 'ปานกลาง' | 'ยาก',
    time: 'X นาที',
    difficulty: 'easy' | 'medium' | 'hard',
    ingredients: ['วัตถุดิบ 1', 'วัตถุดิบ 2', '...'],
    steps: ['ขั้นตอน 1', 'ขั้นตอน 2', '...']
  },
  // ... เพิ่มเมนูใหม่ที่นี่
];
```

### Difficulty Levels:
- `easy` → สีเขียว `#00b894` (⭐)
- `medium` → สีเหลือง `#fdcb6e` (⭐⭐)
- `hard` → สีส้ม `#e17055` (⭐⭐⭐)

## 🎯 Available NPM Scripts

```bash
npm start          # เริ่ม development server (ng serve)
npm run build      # Build production
npm test           # รัน unit tests (Vitest)
npm run watch      # Build และ watch for changes
```

## 📱 Responsive Design

### Breakpoints:
- **Desktop** (> 768px): 3 columns grid
- **Tablet** (≥ 768px): 2 columns grid  
- **Mobile** (< 768px): 1 column grid

### Grid Configuration:
```css
.menu-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  gap: 35px;
}
```

## 🔑 Key Technologies Explained

### Standalone Components
- ไม่ต้องใช้ NgModule
- Import dependencies ใน component โดยตรง
- ทำให้โค้ดเบาและโหลดเร็วขึ้น

### Bootstrap Modal Integration
- ใช้ `data-bs-toggle="modal"` และ `data-bs-target="#menuModal"`
- Modal แสดงเมื่อคลิก card
- `selectedMenu` update ผ่าน `(click)="openMenu(menu)"`
- ปิด modal ด้วย `data-bs-dismiss="modal"`

### TypeScript Features
- Strong typing สำหรับ menu object
- `any` type สำหรับ selectedMenu (ควรสร้าง interface)
- Array methods: `*ngFor` iteration

## 👨‍💻 Development Notes

### Current Implementation:
✅ 2 เมนูตัวอย่าง (ไข่ยู้ยี้, ยำไข่ยางมะตูม)  
✅ Responsive card grid layout  
✅ Bootstrap modal integration  
✅ Smooth animations & transitions  
✅ TypeScript strict mode  
✅ Standalone components architecture  

### Potential Improvements:
🔄 สร้าง `Menu` interface สำหรับ type safety  
🔄 แยก menu data ไปเป็น service หรือ JSON file  
🔄 เพิ่ม filter/search functionality  
🔄 เพิ่ม favorite/rating system  
🔄 Connect to backend API สำหรับ dynamic data  

## 📄 License

โปรเจคนี้สร้างขึ้นเพื่อการศึกษาและฝึกฝน Angular

## 🙏 Credits & Resources

- **Framework**: [Angular](https://angular.dev/) v21
- **UI Components**: [Bootstrap](https://getbootstrap.com/) v5.3.8
- **Icons**: Unicode Emojis (🍳⏱️⭐🥘)
- **Images**: External URLs (dmpcdn.com, mthai.com)
- **Testing**: [Vitest](https://vitest.dev/)

---

**Made with ❤️ and 🍳**  
เมนูไข่วันนี้ - อร่อยง่ายๆ ได้โปรตีน
