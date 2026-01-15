import './globals.css';

export const metadata = {
  title: 'MKT-KVH | Quản lý công việc team Digital Marketing',
  description: 'Web quản lý công việc nội bộ cho team Digital Marketing 4 thành viên.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
