from flask import Flask, jsonify
from flask_cors import CORS 
from pymongo import MongoClient
from db_operations import *
# from bson import json_util, ObjectId
import json

app = Flask(__name__)
CORS(app) 

@app.route('/')
def hello_world():
    return "<p>Hello World</p>"

@app.route('/api/get-restaurants', methods=['GET'])
def get_restaurants():
    try:
        restaurants = get_restaurants_method()
        return jsonify(restaurants)  
    except Exception as e:
        print(f"Error: {e}")
        return jsonify({"error": "Internal Server Error"}), 500

if __name__ == '__main__':  
   app.run()
