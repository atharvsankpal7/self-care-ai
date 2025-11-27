import sqlite3

def add_columns():
    conn = sqlite3.connect('sql_app.db')
    cursor = conn.cursor()
    
    columns = [
        ('dob', 'TEXT'),
        ('gender', 'TEXT'),
        ('address', 'TEXT'),
        ('profile_image', 'TEXT')
    ]
    
    for col_name, col_type in columns:
        try:
            cursor.execute(f"ALTER TABLE users ADD COLUMN {col_name} {col_type}")
            print(f"Added column {col_name}")
        except sqlite3.OperationalError as e:
            print(f"Column {col_name} might already exist or error: {e}")
            
    conn.commit()
    conn.close()

if __name__ == "__main__":
    add_columns()
