<h1> Lab 8-1 </h1>
<img width="2282" height="2086" alt="image" src="https://github.com/user-attachments/assets/26d53856-4531-4236-92c8-db56771d6f46" />

สิ่งที่เพิ่มในฝั่งโค้ด
preload.js (ไฟล์ใหม่) ทำหน้าที่เป็นสะพานปลอดภัย (contextIsolation) ระหว่าง Renderer ↔ Main
api.now() → วันที่-เวลา (แสดงใน Today)
api.ping(name) → ส่ง IPC ไป ipcMain.handle('ping')
api.resize(w,h) → ขอปรับขนาดหน้าต่างผ่าน ipcMain.on('resize')
main.js (แก้เล็กน้อย)
ใส่ webPreferences.preload = path.join(__dirname,'preload.js')
ตั้ง title และ icon ของหน้าต่าง
เพิ่ม IPC ตัวอย่าง:
ipcMain.handle('ping', ...) → ตอบกลับข้อความจากปุ่ม “Ping Main”
ipcMain.on('resize', ...) → รองรับปุ่ม “Resize 960×640”
index.html (แต่ง UI + เติมฟีเจอร์)
CSP meta: อนุญาต inline script/style + สื่อเสียงภายใน (media-src 'self') เพื่อให้สคริปต์/เสียงทำงานได้ใน dev
ปุ่มใหม่ 2 ปุ่ม:
Ping Main → ทดลอง IPC ไปหา Main
Resize 960×640 → ทดลองสั่ง Main ปรับขนาดหน้าต่าง
Today: กล่องแสดงวันที่-เวลาปัจจุบัน โดยเรียก window.api.now() จาก preload
Mini Calculator (บวก): ช่องกรอกเลข 2 ช่อง + ปุ่ม “บวก (+)” แสดงผลรวมด้านขวา
เสียงคลิก: <audio id="clickSound" src="assets/click.mp3"> + ฟังก์ชัน playClick() ที่ถูกเรียกทุกครั้งกดปุ่ม
ย้ายบล็อกที่เพิ่ม เข้าไปใน .container เพื่อให้เลย์เอาต์/สไตล์เดิมไม่แตก
คงโค้ดเดิม (ปุ่ม Click Me / Show Time / Change Color, system info) ไว้เหมือนเดิม
<img width="796" height="1256" alt="image" src="https://github.com/user-attachments/assets/c5b30e5f-1fac-4a05-9d74-5d65004f2171" />
