import sqlite3 from 'better-sqlite3';

export const openDb = async () => {
  const db = sqlite3('db_config.db');
  await db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE,
      password TEXT,
      isAdmin BOOLEAN DEFAULT FALSE,
      locked BOOLEAN DEFAULT FALSE,
      allowedTraffic INTEGER DEFAULT 0
    );
    CREATE TABLE IF NOT EXISTS vpn_configs (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT UNIQUE,
      config TEXT
    );
  `);
  return db;
};