# 🎨 Artism - xâu-chữ

## 🧩 Giới thiệu dự án

**xâu-chữ** là dự án nghệ thuật phi lợi nhuận được thành lập vào năm 2024 bởi nhóm các bạn trẻ tại khu vực phía Bắc.  
Đặt tên **“xâu-chữ”** với dấu gạch nối xen giữa, chúng mình muốn nhấn mạnh mối liên kết gắn bó mật thiết giữa “chữ”, giữa nghệ thuật với đời sống tinh thần con người.

xâu-chữ tin rằng văn học, hội họa có thể trở thành một phương thức giao tiếp đặc biệt giữa người với người, có thể kết nối cộng đồng vượt lên trên những rào cản của ngôn ngữ.

**Artism** là hoạt động chính trong mùa hoạt động thứ hai của xâu-chữ.  
Lấy cảm hứng từ các biện pháp trị liệu nghệ thuật, chúng mình hy vọng có thể:

- Thay đổi thái độ của cộng đồng với người tự kỷ
- Thắp lên niềm tin và tình yêu với thế giới trong nhận thức của các “họa sĩ” đặc biệt này

> *Mỗi nét vẽ làm nên một câu chuyện.*  
> *Tình yêu thương của bạn không chỉ là một biểu hiện của lòng tốt mà còn trở thành nguồn động lực để kiến tạo một xã hội bền vững, nơi không một tiếng nói đơn lẻ nào bị bỏ lại phía sau.*

---

## 🖼️ Hướng dẫn sử dụng ứng dụng

### 1. Tham gia vẽ tranh

1. Chọn nửa bức tranh với chủ đề bạn ưa thích từ thư viện mẫu.  
2. Sáng tạo nửa bức tranh còn lại bằng tình yêu thương và trí tưởng tượng của bạn.  
3. Đăng tải phần còn lại của bức tranh cùng tên người vẽ. Tác phẩm **có 1-0-2** của bạn đã hoàn tất!

### 2. Gửi lời chúc

Sau khi hoàn thiện tác phẩm, đừng quên gửi tới các “họa sĩ nhí” của xâu-chữ một lời cảm ơn hoặc động viên tại trang **"Lời chúc"**.

### 3. Link web

Bấm vào link sau đây để truy cập web: https://tieudaochannhan.github.io/Artism/

---

## 🛠️ Hướng dẫn sử dụng repository

### 1. Yêu cầu hệ thống

- Flutter SDK (khuyến nghị bản mới nhất)  
- Dart SDK (thường đã tích hợp trong Flutter)  
- Trình duyệt web hiện đại (Chrome, Edge, Firefox...)

### 2. Cài đặt và chạy ứng dụng

```sh
git clone https://github.com/<your-username>/Artism.git
cd Artism
flutter pub get
flutter run -d chrome
````

> Nếu bạn chưa cài Flutter, hãy xem hướng dẫn tại [https://flutter.dev](https://flutter.dev)

### 3. Build bản release cho web

```sh
flutter build web --release --base-href /Artism/
```

Kết quả sẽ nằm trong thư mục `build/web`.

### 4. Triển khai lên GitHub Pages

* Đẩy nội dung thư mục `build/web` lên nhánh hoặc repo GitHub Pages của bạn.
* Đảm bảo đã chỉnh đúng `<base href="/Artism/">` trong `index.html` (hoặc dùng cờ `--base-href` khi build).
* Vào **Settings > Pages** trên GitHub để chọn branch và thư mục chứa web.


### 5. Cấu trúc chính của repo

```
├── lib/                  # Code chính của Flutter app
├── assets/               # Ảnh, logo, font, background,...
├── web/                  # Cấu hình favicon, manifest, icons cho web
├── pubspec.yaml          # Khai báo dependencies, fonts, assets
├── README.md             # File hướng dẫn này
└── ...
```


---

## 🤝 Đóng góp \& liên hệ

Nếu bạn muốn đóng góp, phát triển hoặc có ý tưởng cho dự án, hãy tạo **issue** hoặc **pull request** trên GitHub.

**Mọi ý kiến đóng góp, phản hồi đều được trân trọng!**
