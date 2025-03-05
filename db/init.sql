CREATE SCHEMA IF NOT EXISTS "prod";
CREATE SCHEMA IF NOT EXISTS "pre-prod";

-- Custom types
CREATE TYPE user_role AS ENUM (
    'client', 'admin'
)

CREATE TYPE gender AS ENUM (
    'male', 'female', 'other'
)

CREATE TYPE october_7th_experience AS ENUM (
    'festival', 'gazaEnvelopeSettlements', 'defenceForces', 'medicalStaff', 'other'
)

CREATE TYPE status AS ENUM (
    'pendingForFamilyApproval', 'approved', 'denied', 'inProggress'
)

-- Users table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    phone_number VARCHAR(20),
    email VARCHAR(50),
    address TEXT,
    role user_role NOT NULL DEFAULT 'client',
    created_ts TIMESTAMP DEFAULT NOW(),
    birth_date TIMESTAMP,
    gender gender,
    october_7th_experience october_7th_experience,
    img BYTEA,
);

-- Retreats table
CREATE TABLE retreats (
    id SERIAL PRIMARY KEY,
    name VARCHAR(20), -- TODO: Ask front what should be the max length
    description TEXT,
    address TEXT,
    phone_number VARCHAR(20),
    img BYTEA,
    capacity SMALLINT
);

-- Requests table
CREATE TABLE requests (
    id SERIAL PRIMARY KEY,
    FOREIGN KEY (client_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (retreat_id) REFERENCES retreats(id) ON DELETE CASCADE,
    created_ts TIMESTAMP DEFAULT NOW(),
    status status
);

CREATE TABLE user_retreat (
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (retreat_id) REFERENCES retreats(id) ON DELETE CASCADE
);

-- 8 טבלת חשבוניות
-- CREATE TABLE reciepts (
--     FOREIGN KEY (donator) REFERENCES users(id) ON DELETE CASCADE,
--     amount FLOAT NOT NULL
-- );

-- Reviews table
CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    post_ts TIMESTAMP,
    review TEXT
    FOREIGN KEY (reviewer_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (retreat_id) REFERENCES retreats(id) ON DELETE CASCADE,
);
