import sqlite3

conn = sqlite3.connect('foundation.db')

cursor = conn.cursor()

cursor.execute('''
CREATE TABLE IF NOT EXISTS foundation (
    id INTEGER PRIMARY KEY,
    r REAL,
    g REAL,
    b REAL,
    name TEXT
)
''')

cursor.execute('INSERT INTO foundation (r, g, b, name) VALUES (?, ?, ?, ?)', ())

conn.commit()
conn.close()
