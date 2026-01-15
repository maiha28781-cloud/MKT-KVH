const teamMembers = [
  {
    name: 'Thu Trang',
    role: 'Leader',
    focus: 'Chiến lược nội dung, phân bổ nguồn lực, kiểm duyệt chất lượng.'
  },
  {
    name: 'Ngọc Anh',
    role: 'Content',
    focus: 'Lên kế hoạch bài viết, viết kịch bản, tối ưu SEO.'
  },
  {
    name: 'Quang Minh',
    role: 'Quay dựng',
    focus: 'Quay video, dựng clip ngắn, tối ưu định dạng kênh.'
  },
  {
    name: 'Thảo Vy',
    role: 'Thiết kế',
    focus: 'Thiết kế ấn phẩm, banner, template thương hiệu.'
  }
];

const kanbanColumns = [
  {
    title: 'Backlog',
    tasks: [
      {
        title: 'Bộ chủ đề content tháng 2',
        assignee: 'Ngọc Anh',
        due: '05/02',
        tag: 'Kế hoạch'
      },
      {
        title: 'Storyboard video giới thiệu dịch vụ mới',
        assignee: 'Thu Trang',
        due: '06/02',
        tag: 'Video'
      }
    ]
  },
  {
    title: 'Đang thực hiện',
    tasks: [
      {
        title: 'Quay BTS chiến dịch Tết',
        assignee: 'Quang Minh',
        due: '02/02',
        tag: 'Quay dựng'
      },
      {
        title: 'Thiết kế banner ưu đãi',
        assignee: 'Thảo Vy',
        due: '03/02',
        tag: 'Design'
      }
    ]
  },
  {
    title: 'Chờ duyệt',
    tasks: [
      {
        title: 'Bài viết landing page',
        assignee: 'Ngọc Anh',
        due: '01/02',
        tag: 'Content'
      }
    ]
  },
  {
    title: 'Hoàn thành',
    tasks: [
      {
        title: 'Báo cáo hiệu suất tuần',
        assignee: 'Thu Trang',
        due: '31/01',
        tag: 'Báo cáo'
      }
    ]
  }
];

const quickStats = [
  { label: 'Tổng task tuần này', value: '18' },
  { label: 'Đang thực hiện', value: '7' },
  { label: 'Chờ duyệt', value: '3' },
  { label: 'Hoàn thành', value: '8' }
];

export default function Home() {
  return (
    <main className="page">
      <header className="hero">
        <div>
          <p className="eyebrow">MKT-KVH • Digital Marketing Team</p>
          <h1>Web quản lý công việc nội bộ</h1>
          <p className="subtitle">
            Tổng quan tiến độ, phân công nhiệm vụ và theo dõi deadline cho 4 thành
            viên team: Leader, Content, Quay dựng, Thiết kế.
          </p>
          <div className="hero-actions">
            <button className="primary">Tạo task mới</button>
            <button className="ghost">Xem lịch chiến dịch</button>
          </div>
        </div>
        <div className="hero-card">
          <h3>Tổng quan nhanh</h3>
          <div className="stats">
            {quickStats.map((stat) => (
              <div key={stat.label} className="stat">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
          <div className="alert">
            <strong>Nhắc việc:</strong> 2 task sắp tới hạn trong 48 giờ tới.
          </div>
        </div>
      </header>

      <section className="section">
        <div className="section-title">
          <h2>Kanban công việc</h2>
          <p>Quản lý trạng thái task theo luồng nội dung và chiến dịch.</p>
        </div>
        <div className="kanban">
          {kanbanColumns.map((column) => (
            <div key={column.title} className="kanban-column">
              <div className="kanban-header">
                <h3>{column.title}</h3>
                <span className="count">{column.tasks.length}</span>
              </div>
              <div className="kanban-body">
                {column.tasks.map((task) => (
                  <article key={task.title} className="task-card">
                    <div className="task-tag">{task.tag}</div>
                    <h4>{task.title}</h4>
                    <div className="task-meta">
                      <span>{task.assignee}</span>
                      <span>Hạn {task.due}</span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-title">
          <h2>Thành viên & phân công</h2>
          <p>Nhiệm vụ chính và vai trò của từng thành viên trong team.</p>
        </div>
        <div className="team-grid">
          {teamMembers.map((member) => (
            <div key={member.name} className="team-card">
              <div>
                <p className="role">{member.role}</p>
                <h3>{member.name}</h3>
                <p className="focus">{member.focus}</p>
              </div>
              <button className="link">Xem task</button>
            </div>
          ))}
        </div>
      </section>

      <section className="section tools">
        <div>
          <h2>Triển khai miễn phí trên Vercel</h2>
          <p>
            Ứng dụng được tối ưu để deploy trên Vercel với Next.js. Chỉ cần kết nối
            GitHub và chọn môi trường miễn phí.
          </p>
        </div>
        <div className="tool-steps">
          <div>
            <span>1</span>
            <p>Push code lên GitHub</p>
          </div>
          <div>
            <span>2</span>
            <p>Import vào Vercel</p>
          </div>
          <div>
            <span>3</span>
            <p>Deploy ngay</p>
          </div>
        </div>
      </section>
    </main>
  );
}
