-- Migration: add best_time and entry_fee columns to travel_places
-- Run once against your PostgreSQL database.

BEGIN;

ALTER TABLE travel_places
  ADD COLUMN IF NOT EXISTS best_time  TEXT    NOT NULL DEFAULT '',
  ADD COLUMN IF NOT EXISTS entry_fee  NUMERIC NOT NULL DEFAULT 0 CHECK (entry_fee >= 0);

-- Optional: back-fill existing rows with sensible defaults
-- UPDATE travel_places SET best_time = 'All year round', entry_fee = 0 WHERE best_time = '';

COMMIT;
