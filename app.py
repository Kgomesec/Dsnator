from flask import Flask, render_template, redirect, url_for, request, jsonify, session

app = Flask(__name__)
app.secret_key = b'_5#y2L"F4Q8z\n\xec]/'

@app.route('/',methods=['GET'])
def index():
    return render_template('inicio.html')

@app.route('/principal',methods=['GET'])
def game():
    return render_template('principal.html')


@app.route('/processar', methods=['GET','POST'])
def processar():
    perguntas = [
        {'numero':1,'pergunta':"Pergunta 1"},
        {'numero':2,'pergunta':"Pergunta 2"},
        {'numero':3,'pergunta':"Pergunta 3"},
        {'numero':4,'pergunta':"Pergunta 4"},
        {'numero':5,'pergunta':"Pergunta 5"},
    ]
    return render_template('principal.html', perguntas=perguntas)

@app.route('/get_perguntas', methods=['GET'])
def get_perguntas():
    perguntas = [
        {'numero':1,'pergunta':"Pergunta 1"},
        {'numero':2,'pergunta':"Pergunta 2"},
        {'numero':3,'pergunta':"Pergunta 3"},
        {'numero':4,'pergunta':"Pergunta 4"},
        {'numero':5,'pergunta':"Pergunta 5"},
    ]
    return jsonify({'perguntas': perguntas})


app.run(port=5000,host='localhost',debug=True)