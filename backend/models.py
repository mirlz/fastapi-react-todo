from sqlalchemy import Column, Integer, String, Boolean
from database import Base

# Define To Do class inheriting from Base
class ToDo(Base):
    __tablename__ = 'todos'
    id = Column(Integer, primary_key=True)
    task = Column(String(256))
    completed = Column(Boolean, default=False)