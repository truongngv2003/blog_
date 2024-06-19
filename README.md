# Blog Nguyễn Văn Trường

## Giới thiệu

Đây là dự án blog cá nhân của Nguyễn Văn Trường, được xây dựng bằng Node.js và Express.js. Dự án này cho phép người dùng tạo, chỉnh sửa, và xóa bài viết; quản lý người dùng; và tương tác với các bài viết thông qua bình luận và lượt thích.

## Cấu trúc dự án

- `.gitignore`: Các tệp và thư mục được bỏ qua bởi Git.
- `package.json`: Thông tin về dự án và các phụ thuộc.
- `package-lock.json`: Khóa phiên bản của các phụ thuộc.
- `src/`: Thư mục chứa mã nguồn chính của dự án.
  - `app/controllers/`: Các bộ điều khiển xử lý logic ứng dụng.
  - `app/models/`: Các mô hình dữ liệu.
  - `config/`: Cấu hình ứng dụng.
  - `public/`: Tài nguyên tĩnh như CSS, hình ảnh.
  - `resources/views/`: Các tệp giao diện người dùng (sử dụng Handlebars).
  - `route/`: Định tuyến cho ứng dụng.
  - `util/`: Các tiện ích hỗ trợ.

## Cài đặt

### Yêu cầu hệ thống

- Node.js
- npm (Node Package Manager)

### Các bước cài đặt

1. Clone repository:

   ```sh
   git clone https://github.com/yourusername/Blog_NguyenVanTruong.git
2. Cài đặt các phụ thuộc

   ```sh
   npm install
3. Cấu hình cơ sở dữ liệu trong src/config/db/index.js.
4. Chạy ứng dụng:

   ```sh
   npm start

## Hướng dẫn sử dụng

- Truy cập trang chủ tại http://localhost:6303.
- Đăng ký tài khoản mới hoặc đăng nhập nếu đã có tài khoản.
- Tạo, chỉnh sửa, hoặc xóa bài viết.
- Bình luận và thích các bài viết của người khác.
- Quản lý người dùng và các bài viết thông qua trang quản lý.

## Đóng góp
Nếu bạn muốn đóng góp vào dự án, vui lòng tạo pull request hoặc mở issue mới trên GitHub.

## Liên hệ
Nguyễn Văn Trường
Email: truongnguyenmailbka@gmail.com