# Workspace System

# Description
A single-page application (SPA) developed in JavaScript for managing workspace reservations.

This system allows users to authenticate, view reservations, and create new requests. Administrators can view all reservations registered in the system.

# Technologies Used
* JavaScript
* HTML
* Tailwind CSS
* JSON Server

# Installation
1. Install dependencies

npm install
2. Run project

npm run dev

# Test Users
Administrator
email: admin@test.com
password: A123456

User
email: user@test.com
password: A123456

# Implemented Features
* Login via email and password
* Protection of private paths

# Reservation Management
* Viewing reservations
* Creating reservations
* Checking reservations
* Data consumption from JSON server

# Roles
Administrator
* Views all registered reservations

User
* Views only their own reservations
* Can create reservations

Navigation
* Navigation between login, home page, and reservation form

# Project Structure

```bash
src
.
├── api
│   └── http.js
├── assets
│   ├── hero.png
│   ├── javascript.svg
│   └── vite.svg
├── components
│   ├── ReservationCard.js
│   └── Sidebar.js
├── controllers
│   ├── home.controller.js
│   ├── login.controller.js
│   └── reservation.controller.js
├── main.js
├── router
│   └── router.js
├── services
│   └── reservation.service.js
├── style.css
├── utils.js
└── views
    ├── homeView.js
    ├── loginView.js
    ├── notFound.js
    └── reservationView.js

```

# Edpoints used
Users
* get/users

Reservations
* get/reservations
* post/reservations


# Future improvements
* Status management
* Visual improvements and user experience

# Author
Andres Garay.