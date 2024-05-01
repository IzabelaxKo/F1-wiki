from config import app
from flask import jsonify, request
from config import db
from models import Drivers, Teams, Tracks
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
    res = Drivers.query.all()
    json_res = [x.to_json() for x in res]
    
    return(
        jsonify({"drivers": json_res}), 
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


# return races from given year
@app.route('/races/<year>')
def races(year):
    # requests to prevent 403 error
    req_head= {
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36."
    }
    # getting the espn page with races info
    html = r.get(f"https://www.espn.com/f1/schedule/_/year/{year}", headers=req_head).text
    # getting lxml element to search thru It
    dom = etree.HTML(html)
    # container for all races
    races = []
    # going thru every tr element
    for i in dom.xpath('//*[@id="fittPageContainer"]/div[3]/div/div/div[1]/section/div/div[2]/div/div/div/div[2]/table/tbody/tr'):  
        # container for all the text    
        all_text = []
        # going thru every child of the tr element
        for element in i.iter():
            # if there's a text you append it to container
            if element.text:
                all_text.append(element.text.strip())
        
        # adding race info in JSON format
        races.append({
            "date": all_text[0],
            "name": all_text[1],
            "circuit": all_text[2],
            "winner": all_text[3] if len(all_text) == 4 else "not yet known"
        })

    return(        
        jsonify(races),
        200
    )

# PUT
# for transfers:
@app.route('/edit_drivers_team/<int:id>', methods=['GET', 'POST'])
def edit_driver(id):
    driver = db.session.query(Drivers).get(id)
    if driver:
        driver.team = Teams.query.filter(Teams.name == request.json.get('newTeam')).first().id
        db.session.commit()        
    else: 
        return(
            jsonify({"msg": "Driver doesn't exist"}), 
            400
        )
    
    return(
        jsonify({"msg": "Data edited"}),
        200
    )


# POST
# adding drivers
@app.route('/create_driver', methods=['POST'])
def create_driver():
    name = request.json.get('firstName')
    surname = request.json.get('lastName')
    birth_date = request.json.get('birth')
    team = request.json.get('teamName')
    team_id = Teams.query.filter(Teams.name == team).first().id
    img_link = request.json.get('img')
        
    if Drivers.query.filter(Drivers.name == name and Drivers.surname == surname and Drivers.birth_date == birth_date).first():
        return(
            jsonify({"msg": "Driver already exist in the database"}),
            400
        )
    elif not team_id:
        return(
            jsonify({"msg": "There's no such team in the database. Solution: You must add It"}),
            400
        )
    else:
        driver = Drivers(
            name=name,
            surname=surname,
            birth_date=birth_date,
            team=team_id,
            img_link=img_link if img_link else ""
        )
        try: 
            db.session.add(driver)
            db.session.commit()
        except Exception as e:
            return(
                jsonify({"msg": str(e)}),
                400
            )

        return(
            jsonify({"msg": "Driver added successfully"}),
            200
        )
    
    


# adding teams
@app.route('/create_team', methods=['POST'])
def create_team():
    name = request.json.get('name')
        
    if Teams.query.filter(Teams.name == name).first():
        return(
            jsonify({"msg": "Team already exist in the database"}),
            400
        )
    else:
        team = Teams(
            name=name
        )
        try: 
            db.session.add(team)
            db.session.commit()
        except Exception as e:
            return(
                jsonify({"msg": str(e)}),
                400
            )
            
        return(
            jsonify({"msg": "Team added successfully"}),
            200
        )



if __name__ == "__main__":
    with app.app_context():
        db.create_all()
        
    app.run(debug=True)