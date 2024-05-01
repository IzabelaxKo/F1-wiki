from config import db
from sqlalchemy.orm import Mapped, mapped_column
from sqlalchemy import Integer, String, ForeignKey

# database models, interacting with sqlalchemy


class Drivers(db.Model):
    __tablename__ = 'drivers'
    
    id: Mapped[int] = mapped_column(Integer, nullable=False, primary_key=True, autoincrement=True)
    name: Mapped[str] = mapped_column(String, nullable=False)
    surname: Mapped[str] = mapped_column(String, nullable=False)
    birth_date: Mapped[str] = mapped_column(String)
    team: Mapped[int] = mapped_column(Integer, ForeignKey("teams.id", ondelete="cascade"))
    img_link: Mapped[str] = mapped_column(String)
    
    def __repr__(self) -> str:
        return f"{self.id}: {self.name} {self.surname}"
    
    def to_json(self):
        return {
            "id": self.id,
            "name": self.name,
            "surname": self.surname,
            "birth_date": self.birth_date,
            "team": Teams.query.get(self.team).name,
            "img_link": self.img_link,
        }
    

class Teams(db.Model):
    __tablename__ = 'teams'
    
    id: Mapped[int] = mapped_column(Integer, nullable=False, primary_key=True,  autoincrement=True)
    name: Mapped[str] = mapped_column(String, nullable=False)
    
    def __repr__(self) -> str:
        return f"{self.id}. {self.name}"
    
    def to_json(self):
        return {
            "id": self.id,
            "name": self.name,
        }

    
class Championships(db.Model):
    __tablename__ = 'championships'
    
    id: Mapped[int] = mapped_column(Integer, primary_key=True, nullable=False, autoincrement=True)
    year: Mapped[str] = mapped_column(String, nullable=False)
    winner: Mapped[int] = ForeignKey('driers')
    team: Mapped[int] = ForeignKey('teams')
    
    def __repr__(self) -> str:
        return f"{self.id}. {self.year}"
    
    def to_json(self):
        return {
            "id": self.id,
            "year": self.year,
            "winner": self.winner,
            "team": self.team,
        }    
    
    
class Tracks(db.Model):
    __tablename__ = 'tracks'
    
    id: Mapped[int] = mapped_column(Integer, primary_key=True, nullable=False, autoincrement=True)
    name: Mapped[str] = mapped_column(String, nullable=False)
    most_wins: Mapped[int] = ForeignKey('drivers')
    best_team: Mapped[int] = ForeignKey('teams')
    
    def __repr__(self) -> str:
        return f"{self.id}. {self.name}"
    
    def to_json(self):
        return {
            "id": self.id,
            "name": self.name,
            "most_wins": self.most_wins,
            "best_team": self.best_team,
        }
    