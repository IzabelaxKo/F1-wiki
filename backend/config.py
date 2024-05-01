from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import DeclarativeBase
from flask_cors import CORS

app = Flask(__name__)
# sending cross-origin requests
CORS(app)


app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///formula1.db"
app.config['SQLALCHEMY_TRACK_MODIFICATION'] = False

app.json.sort_keys = False

db = SQLAlchemy(app)
