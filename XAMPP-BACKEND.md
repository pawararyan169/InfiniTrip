# INFINITRIP backend (XAMPP)

PHP + MySQL API under `api/`, wired from the static pages via `infinitrip-api.js`.

## 1. Prerequisites

- [XAMPP](https://www.apachefriends.org/) with **Apache** and **MySQL** (or MariaDB) running.
- Copy the project folder into the web root, for example: `C:\xampp\htdocs\Kartick`  
  Site URL: `http://localhost/Kartick/`

## 2. Database

1. Open **phpMyAdmin** (`http://localhost/phpmyadmin`).
2. Import **`sql/infinitrip.sql`** (creates database `infinitrip` and tables).

## 3. MySQL credentials

Edit **`api/config.php`** if your MySQL user or password is not the default:

- User: `root`
- Password: `` (empty)

## 4. Seed admin + demo drivers

After the database exists, open once in the browser:

`http://localhost/Kartick/api/install.php`

This creates:

- **Admin:** `admin` / `admin123`
- **Drivers:** `driver1@infinitrip.in` / `driver123`, `driver2@infinitrip.in` / `driver123`

Remove or protect `api/install.php` in production.

## 5. Verify the API

Open:

`http://localhost/Kartick/api/index.php?route=health`

You should see JSON: `{"ok":true,"service":"infinitrip-api"}`.

## 6. OTP in development

`api/config.php` sets `'debug_otp' => true`, so the current OTP code is included in JSON responses (signup, booking, ensure, resend). Turn this off in production.

## 7. Session cookies

The API uses PHP sessions with cookie path `/` so the same session works for pages under `/Kartick/` and `/Kartick/api/`.

## 8. Fallback behaviour

If `infinitrip-api.js` is missing or the server is down, several flows still fall back to the previous **localStorage** behaviour (sign-in, cart payment, driver join, booking).

---

**Main routes (GET query `route=`):** `health`, `auth/unified-login` (POST), `auth/register` (POST), `auth/logout` (POST), `otp/context`, `otp/ensure` (POST), `otp/resend` (POST), `otp/verify` (POST), `bookings/create` (POST), `admin/*`, `drivers/apply` (POST), `driver/rides`, `driver/notifications`, `driver/ride-status` (POST), `payments/create` (POST).
