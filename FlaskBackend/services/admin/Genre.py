from models.Genre import Genre
from flask import jsonify
from flask import request
from app import app
from services.services import execute,closeConnection,commitConnection
from config import mydb
from app import app
import pymysql

        
# insert genre of movies to Genre table
@app.route('/genre', methods=['POST'])
def addGenre(genreid=None):
    try:
        json = request.json
        genre = json['genre']
        genres = Genre(genreid, genre)
        if genre and request.method == 'POST' :
            sqlQuery = "INSERT INTO genre(genre) VALUES( %s)"
            bindData = genres.genre
            execute(sqlQuery,bindData)
            # conn.commit()
            commitConnection()
            response = jsonify('genre  added successfully')
            response.status_code = 200
            return response
        else:
            return "something went wrong"
    except KeyError:
        return jsonify('One value is missing..  All fields are mandatory')
    
# delete a particular genre table
@app.route('/genre/<genreid>', methods=['DELETE'])
def deleteGenre(genreid, genre=None):
    try:
        genres = Genre(genreid, genre)
        sqlQuery = "SELECT genre FROM genre WHERE genreid =%s"
        bindData = genres.genreid
        data = execute(sqlQuery, bindData)
        print(data)
        if data == 0:
            commitConnection()
            response = jsonify('genre does not exist')
            return response
        elif data == 1:
            sqlQuery = "DELETE FROM genre WHERE genreid =%s"
            bindData = genres.genreid
            execute(sqlQuery,bindData)
            commitConnection()
            respone = jsonify('Genre deleted successfully!')
            respone.status_code = 200
            return respone
    except Exception as e:
        print(e)
        return jsonify('something went wrong')
    
#For getting all the genre
@app.route('/genre', methods=['GET'])
def viewGenre():
    try:
        
        conn = mydb.connect()
        cursor = conn.cursor(pymysql.cursors.DictCursor)
        cursor.execute("SELECT genreid , genre FROM genre")
        empRows = cursor.fetchall()
        conn.commit()
        response = jsonify(empRows)
        response.status_code = 200
        return response
    except Exception as e:
        print(e)
        return jsonify({'error': 'Error while retrieving movies from database'})
