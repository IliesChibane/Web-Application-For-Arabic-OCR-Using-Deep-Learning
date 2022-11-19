from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin

import cv2
import numpy as np
import tensorflow as tf

from utility import return_word

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

    # resize the image to (None, 200, 200, 3) shape
    img = img.resize(img, (200,200))
    img_to_predict = np.array([img / 255])

    # predict the word 
    pred = model.predict(img_to_predict[:1])
    word_id = np.argmax(pred)
    word = return_word(word_id)

    return jsonify(word)