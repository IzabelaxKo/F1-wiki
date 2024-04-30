from config import app
from flask import jsonify, request
from config import db
from models import Drivers, Teams, Tracks
import datetime as dt
from bs4 import BeautifulSoup
import requests as r
from lxml import etree


@app.route('/')
def method_name():
    return (
        jsonify({"msg": "everything is ok!"}), 
        200
    )

# routes:

# GET:

# returning drivers
@app.route('/drivers', methods=['GET'])
def drivers():
    res = db.session.query(Drivers).all()
    json_res = list(map(lambda x: x.to_json(), res))
    
    return(
        jsonify(json_res), 
        200
    )


# returning teams
@app.route('/teams', methods=['GET'])
def teams():
    res = db.session.query(Teams).all()
    json_res = list(map(lambda x: x.to_json(), res))
    
    return(
        jsonify(json_res), 
        200
    )


# returning tracks
@app.route('/tracks', methods=['GET'])
def tracks():
    res = db.session.query(Tracks).all()
    json_res = list(map(lambda x: x.to_json(), res))
    
    return(
        jsonify(json_res), 
        200
    )


# checking whether it's any races and returning them
@app.route('/races')
def races():
    cur_year = dt.datetime.now().year
    html = r.get(f"https://www.espn.com/f1/schedule/_/year/{cur_year}").text
    races = []
    print(html)
    dom = etree.HTML(str(BeautifulSoup(html, "html.parser")))
    for i in dom.xpath('//*[@id="fittPageContainer"]/div[3]/div/div/div[1]/section/div/div[2]/div/div/div/div[2]/table/tbody/tr[1]'):
        races.append(i.text.strip())

    return(
        # jsonify(races),
        # 200
    )

# PUT
# editing data abt drivers

# POST
# adding drivers
# adding teams



if __name__ == "__main__":
    
    with app.app_context():
        db.create_all()
        
    app.run(debug=True)