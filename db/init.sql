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
    'pending', 'approved', 'denied'
)

CREATE TYPE review_future_participation_status AS ENUM (
    'ofCourse', 'hardToDeside', 'fulfilled'
)

-- Users table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(50) UNIQUE,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    phone_number VARCHAR(20),
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
    PRIMARY KEY (user_id, retreat_id),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (retreat_id) REFERENCES retreats(id) ON DELETE CASCADE
);

-- Reviews table
CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    post_ts TIMESTAMP,
    mood_before_workshop TINYINT CHECK (mood_before_workshop BETWEEN 1 AND 5),
    mood_after_workshop TINYINT CHECK (mood_after_workshop BETWEEN 1 AND 5),
    community_rating TINYINT CHECK (community_rating BETWEEN 1 AND 5),
    two_key_events TEXT,
    most_significant_workshop TEXT,
    least_significant_workshop TEXT,
    improvment_suggestions TEXT,
    hakumi_workshop_rating TINYINT CHECK (hakumi_workshop_rating BETWEEN 1 AND 5),
    hakumi_workshop_guide_rating TINYINT CHECK (hakumi_workshop_guide_rating BETWEEN 1 AND 5),
    hakumi_workshop_key_points TEXT,
    emdr_workshop_rating TINYINT CHECK (emdr_workshop_rating BETWEEN 1 AND 5),
    emdr_workshop_guide_rating TINYINT CHECK (emdr_workshop_guide_rating BETWEEN 1 AND 5),
    emdr_workshop_key_points TEXT,
    future_participation review_future_participation_status,
    suggestion TEXT,
    notes TEXT,
    FOREIGN KEY (reviewer_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (retreat_id) REFERENCES retreats(id) ON DELETE CASCADE,
);
