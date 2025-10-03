<h1> Lab 8-1 </h1>
<img width="2282" height="2086" alt="image" src="https://github.com/user-attachments/assets/26d53856-4531-4236-92c8-db56771d6f46" />

🔧 สิ่งที่เพิ่มเข้ามา
1. preload.js (ไฟล์ใหม่)

ทำหน้าที่เป็น สะพานปลอดภัย ระหว่าง Renderer ↔ Main

api.now() → คืนค่า วันที่-เวลา (ใช้แสดงใน Today)

api.ping(name) → ส่งข้อความไป ipcMain.handle('ping')

api.resize(w,h) → ขอให้ Main ปรับขนาดหน้าต่าง

2. main.js (แก้ไข)

ใส่ webPreferences.preload = path.join(__dirname,'preload.js')

ตั้ง title และ icon ของหน้าต่าง

เพิ่ม IPC:

ipcMain.handle('ping', ...) → รองรับปุ่ม Ping Main

ipcMain.on('resize', ...) → รองรับปุ่ม Resize 960×640

3. index.html (UI + ฟีเจอร์ใหม่)

เพิ่ม CSP meta → รองรับ inline script/style และ media ภายใน

ปุ่มใหม่:

📡 Ping Main → ทดลอง IPC

🪟 Resize 960×640 → ปรับขนาดหน้าต่าง

Today → แสดงวันที่-เวลาปัจจุบัน (window.api.now())

Mini Calculator (บวก) → กรอกเลข 2 ช่อง กด “บวก (+)” แสดงผลรวม

เสียงคลิก → <audio id="clickSound" src="assets/click.mp3"> + ฟังก์ชัน playClick()

ยังคงปุ่มเดิม: 🎉 Click Me / ⏰ Show Time / 🎨 Change Color

System Info + Process Info → แสดงข้อมูลเครื่องและโครงสร้าง Electron
<img width="796" height="1256" alt="image" src="https://github.com/user-attachments/assets/c5b30e5f-1fac-4a05-9d74-5d65004f2171" />
