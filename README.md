# 🏍️ Web-Ojol - Aplikasi Web Ojek Online

Aplikasi web ojek online lengkap dengan fitur pemesanan, tracking peta, dan **chat dengan auto-reply bot** saat driver sedang mengemudi.

## 🎯 Fitur Utama

### Phase 1 (Current Focus)
- ✅ **Customer Chat** - Customer bisa chat dengan driver
- ✅ **Driver Auto-Reply** - Bot otomatis balas saat driver lagi nyetir
- ✅ **Manual Reply** - Driver bisa balas manual saat sudah tidak nyetir

### Phase 2 (Future)
- 📍 Real-time GPS Tracking
- 🗺️ Map Integration
- ⭐ Rating & Review
- 💳 Payment System
- 📊 Admin Dashboard

## 📁 Struktur Project

```
Web-ojol/
├── frontend/                 # Frontend aplikasi
│   ├── index.html           # Landing page
│   ├── css/
│   │   └── style.css        # Styling utama
│   ├── js/
│   │   └── main.js          # JavaScript logic
│   └── pages/
│       ├── customer/
│       │   └── dashboard.html
│       └── driver/
│           └── dashboard.html
├── backend/                  # Backend API
│   ├── server.js            # Express server
│   ├── package.json         # Dependencies
│   └── .env.example         # Template konfigurasi
├── database/                 # Database schema
│   └── schema.md            # Schema design
├── docs/                     # Dokumentasi
│   └── DEVELOPMENT.md       # Development guide
├── README.md                # File ini
└── .gitignore              # Git ignore rules
```

## 🛠️ Tech Stack

### Frontend
- HTML5
- CSS3
- Vanilla JavaScript

### Backend
- Node.js
- Express.js
- Socket.io (Real-time chat)
- Mongoose (Database ORM)

### Database
- MongoDB (atau MySQL, pilih sesuai preference)

## 🚀 Quick Start

### 1. Clone Repository
```bash
git clone https://github.com/ronaldmatutan-wq/Web-ojol.git
cd Web-ojol
```

### 2. Setup Backend
```bash
cd backend
npm install
```

### 3. Konfigurasi .env
```bash
cp .env.example .env
# Edit .env sesuai konfigurasi Anda
```

### 4. Run Server
```bash
npm start
```

Server akan running di `http://localhost:3000`

## 📖 Dokumentasi

Lihat [DEVELOPMENT.md](docs/DEVELOPMENT.md) untuk panduan development lengkap.

## 👨‍💻 Author

- **Ronald Matutan** - [@ronaldmatutan-wq](https://github.com/ronaldmatutan-wq)

## 📝 License

Belum ditentukan

---

**Happy Coding!** 🎉
