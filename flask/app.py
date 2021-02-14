from flask import Flask, request
from flask_cors import CORS

from urllib import request as requests
from urllib.parse import urlencode

import json
import ast

from dotenv import load_dotenv
load_dotenv()

import os

app=Flask(__name__)
CORS(app)

AUTH_CODE = os.environ.get("CHECKBOOK_AUTH_CODE")
API_URL   = 'https://sandbox.checkbook.io/v3/check/digital'

@app.route("/", methods=["POST"])
def index():
    print(request.data)
    data = ast.literal_eval(request.data.decode("UTF-8"))
    recipient   = data["recipient"]
    name        = data["name"]
    amount      = data["amount"]
    description = data["description"]

    print("hi")
    form_data = {
        "recipient"   : recipient,
        "name"        : name,
        "amount"      : int(amount),
        "description" : description
        }
    print("bye")
    print(form_data)
    data = json.dumps(data).encode("utf-8")
    res = ""
    
    try:
        req = requests.Request(API_URL, data)
        req.add_header("Authorization", AUTH_CODE)
        req.add_header("Accept", 'application/json')
        req.add_header("Content-Type", 'application/json')
        with requests.urlopen(req) as f:
            res = f.read()
        print(res.decode())
    except Exception as e:
        print(repr(e))

    return res

if __name__ == "__main__":
    from waitress import serve
    serve(app, host='0.0.0.0', port=5000)
    #app.run(host="localhost", port=5000)
    
