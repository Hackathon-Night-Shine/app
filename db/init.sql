CREATE SCHEMA IF NOT EXISTS "prod";
CREATE SCHEMA IF NOT EXISTS "pre-prod";

-- 1 יצירת טבלת סוגי משתמשים
CREATE TABLE user_typesypes (
    id SERIAL PRIMARY KEY,
    type_name VARCHAR(20) UNIQUE NOT NULL
);

INSERT INTO user_types (type_name) VALUES
('client'),
('admin');

-- 2 יצירת טבלת משתמשים
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    phone_number VARCHAR(20),
    address TEXT,
    user_type INT NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    did_fill_details BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (user_type) REFERENCES user_types(id) ON DELETE CASCADE,
);

-- 3 יצירת טבלת מתנדבים (כולל מיומנויות ועיר מועדפת)
CREATE TABLE retreats (
    id SERIAL PRIMARY KEY,
    address TEXT NOT NULL,
    description TEXT,
    phone_number VARCHAR(20) NOT NULL,
);

-- 4 יצירת טבלת סטטוסי בקשות
CREATE TABLE request_status (
    id SERIAL PRIMARY KEY,
    status_name VARCHAR(50) UNIQUE NOT NULL
);

INSERT INTO request_status (status_name) VALUES
('ממתין לאישור המשפחה'),
('בטיפול'),
('אושר'),
('נדחה');

-- 5 יצירת טבלת בקשות
CREATE TABLE requests (
    id SERIAL PRIMARY KEY,
    FOREIGN KEY (client) REFERENCES users(id) ON DELETE CASCADE,
    description TEXT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    FOREIGN KEY (status) REFERENCES request_status(id) ON DELETE CASCADE
);

-- 6 טבלת תיאור ריטריט
CREATE TABLE retreat_to_description (
    FOREIGN KEY (retreat) REFERENCES retreats(id) ON DELETE CASCADE,
    description TEXT
);

-- 7 טבלת תיאור תיק מטופל
CREATE TABLE patient_file (
    FOREIGN KEY (patient) REFERENCES users(id) ON DELETE CASCADE,
    description TEXT
);
