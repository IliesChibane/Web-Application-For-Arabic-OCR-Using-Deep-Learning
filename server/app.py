from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin

import cv2
import numpy as np
import tensorflow as tf

from utility import return_word, segmentation

app = Flask(__name__)
CORS(app,resources={r"/*": {"origins": "*", "allow_headers":{"Access-Control-Allow-Origin"}}})
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/api/word', methods=['POST'])
@cross_origin(origin='*',headers=['content-type'])
def arabic_word_recognition():

    filestr = request.files['imagefile'].read() # getting the image from the POST request

    # convert it to a numpy array
    file_bytes = np.fromstring(filestr, np.uint8)
    img = cv2.imdecode(file_bytes, cv2.IMREAD_UNCHANGED)

    model = tf.keras.models.load_model("tf_models/dataaug_model.h5") # import our tf model

    # resize the image to (None, 200, 200, 1) shape
    img = img.resize(img, (200,200))
    img = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    img_to_predict = np.array([img / 255])

    # predict the word 
    pred = model.predict(img_to_predict[:1])
    word_id = np.argmax(pred)
    word = return_word(word_id)

    return jsonify(word)

@app.route('/api/charbychar', methods=['POST'])
@cross_origin(origin='*',headers=['content-type'])
def arabic_word_recognition_char_by_char():

    filestr = request.files['imagefile'].read() # getting the image from the POST request

    # convert it to a numpy array
    file_bytes = np.fromstring(filestr, np.uint8)
    img = cv2.imdecode(file_bytes, cv2.IMREAD_UNCHANGED)

    model = tf.keras.models.load_model("tf_models/char_recognition.h5") # import our tf model

    chars = segmentation(img)
    img_to_predict = []
    for im in chars:
        # resize the image to the right shape
        im = img.resize(img, (200,200))
        im = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
        img_to_predict.append(im)

    # predict the word 
    pred = model.predict(img_to_predict)
    word_id = np.argmax(pred)
    word = return_word(word_id)

    return jsonify(word)