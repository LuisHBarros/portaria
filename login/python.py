import sqlite3
import hashlib
from flask import Flask, request, render_template, redirect, url_for

# Cria o banco de dados SQLite e a tabela 'users'
conn = sqlite3.connect('users.db')
cursor = conn.cursor()

cursor.execute('''
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL,
        password TEXT NOT NULL
    )
''')

# Insere alguns dados de exemplo (senhas são apenas para fins de demonstração; não é seguro armazenar senhas em texto plano)
hashed_password = hashlib.sha256("senha123".encode()).hexdigest()
cursor.execute("INSERT INTO users (username, password) VALUES (?, ?)", ("usuario1", hashed_password))
hashed_password = hashlib.sha256("outrasenha456".encode()).hexdigest()
cursor.execute("INSERT INTO users (username, password) VALUES (?, ?)", ("usuario2", hashed_password))

conn.commit()
conn.close()

app = Flask(__name__)

def authenticate_user(username, password):
    conn = sqlite3.connect('users.db')
    cursor = conn.cursor()

    cursor.execute("SELECT password FROM users WHERE username = ?", (username,))
    result = cursor.fetchone()

    if result:
        hashed_password = hashlib.sha256(password.encode()).hexdigest()
        if hashed_password == result[0]:
            return True

    conn.close()
    return False

@app.route('/', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']

        if authenticate_user(username, password):
            # Autenticação bem-sucedida, redireciona para a próxima tela
            return redirect(url_for('next_screen'))
        else:
            # Autenticação falhou, exibe uma mensagem de erro
            return render_template('login.html', error="Credenciais inválidas")

    return render_template('login.html')

@app.route('/next_screen')
def next_screen():
    return "Bem-vindo à próxima tela!"

if __name__ == '__main__':
    app.run(debug=True)