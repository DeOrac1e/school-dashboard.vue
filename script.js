const { createApp } = Vue;

createApp({
  data() {
    return {
      theme: localStorage.getItem('theme') || 'dark',
      activePage: 'dashboard',
      showNotif: true,
      formattedDate: new Date().toLocaleDateString('en-GB', {
        weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
      }),
      menuItems: [
        { id: 'dashboard', label: 'Dashboard' },
        { id: 'students', label: 'Students' },
        { id: 'teachers', label: 'Teachers' },
        { id: 'attendance', label: 'Attendance' }
      ],
      stats: [
        { label: 'Total Students', value: '342', desc: '↑ 8 since last term', trend: 'up' },
        { label: 'Present Today', value: '318', desc: '93% attendance', trend: 'neutral' },
        { label: 'Teaching Staff', value: '24', desc: 'All present today', trend: 'up' },
        { label: 'Fees Collected', value: '87%', desc: '↓ 3% from last month', trend: 'down' }
      ],
      attendanceData: [
        { label: 'Year 1', pct: 97 }, { label: 'Year 2', pct: 91 },
        { label: 'Year 3', pct: 95 }, { label: 'Year 4', pct: 88 }
      ],
      students: [
        { initials: 'SA', name: 'Samson Anthony', cls: 'Year 3B', status: 'present', bg: '#E1F5EE', fg: '#0F6E56' },
        { initials: 'EA', name: 'Emmanuel Agba', cls: 'Year 4A', status: 'absent', bg: '#EEEDFE', fg: '#534AB7' }
      ],
      days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
      slotLabels: { math: 'Maths', english: 'English', science: 'Science', art: 'Art', pe: 'P.E.', break: 'Break' },
      schedule: [
        ['math', 'english', 'break', 'science'],
        ['english', 'math', 'break', 'art'],
        ['pe', 'english', 'break', 'math'],
        ['science', 'math', 'break', 'english'],
        ['art', 'pe', 'break', 'english']
      ],
      announcements: [
        { tag: 'urgent', label: 'Urgent', title: 'Year 4 trip forms due', sub: 'Deadline: Wed 9 April' },
        { tag: 'event', label: 'Event', title: 'Inter-house sports day', sub: 'Friday 11 April' }
      ]
    }
  },
  methods: {
    toggleTheme() {
      this.theme = this.theme === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', this.theme);
      document.documentElement.setAttribute('data-theme', this.theme);
    },
    postAnnouncement() {
      const title = prompt('Announcement title:');
      if (!title) return;
      this.announcements.unshift({
        tag: 'info',
        label: 'Info',
        title: title,
        sub: 'Just now'
      });
    }
  },
  mounted() {
    document.documentElement.setAttribute('data-theme', this.theme);
  }
}).mount('#app');