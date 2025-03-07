from flask import Flask
from pymongo import MongoClient
# from bson import json_util, ObjectId
from dotenv import load_dotenv

import os
import json
import re

load_dotenv()

client = MongoClient(
    os.getenv('MONGO_URI')
)


db = client["Food"]
restaurant_collection = db["restaurants"]


def get_restaurants_method():
    try:
        restaurants = restaurant_collection.find()
        restaurnts_list = []
        for restaurant in restaurants:
            restaurant["_id"] = str(restaurant["_id"])
            restaurnts_list.append(restaurant)
        return restaurnts_list

    except Exception as e:
        print(f"error fetching restaurants: {e}")
        return None