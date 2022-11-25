from flask import Flask #pour gerer le serveur 
from flask import request # pour envoyer et recevoir les données
from flask import jsonify #pour transformer les données en fichier de type json
import json #pour transformer les données en fichier de type json
import os #pour créer des lien valides et acceder au fichiers plus simplement (os.path.join)
from flask_cors import  CORS,cross_origin #pour manipuler les données dans différentes adresses IP
import cv2 #manipulation d'images
import tensorflow as tf #Utilisation de notre model de deep learning
import numpy as np #Indexer les mots
from utility import return_word  #retourner le mot selon son index





app = Flask(__name__) #lancer le backend
CORS(app)

input_path ='' #le dossier de nos images test


@app.route('/api', methods=['POST'])
def api(): #la focntion qui prend l'image OCR'
    global input_path
    if request.method == 'POST':
        print('post app')
        raw_data = request.data
        json_data = json.loads(raw_data.decode('utf-8'))
        input_path = json_data['OCR']
        return json_data

@app.route('/results', methods=['GET'])
@cross_origin()
def results(): #la focntion qui retourne l'OCR'
    global input_path
    img = cv2.imread("../ala003.tif" , cv2.IMREAD_UNCHANGED)
    if img is None:
        print("erreur de chargement")
        exit(0)
    model = tf.keras.models.load_model("tf_models/alex2_model_augdata.h5") # import our tf model

    # resize the image to (None, 200, 200, 1) shape
    img = cv2.resize(img,(200,200))
    img = img.reshape((200,200,1))
    cv2.imwrite('idk.png',img)
    #img_to_predict = np.divide(img,255)
    #img_to_predict = img_to_predict.reshape(-1,200,200,1)
    img_to_predict = np.array([img / 255])
    

    # predict the word 
    pred = model.predict(img_to_predict[:1])
    print(img_to_predict.shape)
    word_id = np.argmax(pred)
    word = return_word(word_id)
    w=''
    for char in range(len(word) - 1, -1, -1):
        w+=word[char]
    if request.method== 'GET':
        return {"results" : w}


if __name__=="__main__":
    
    app.run(debug=True)