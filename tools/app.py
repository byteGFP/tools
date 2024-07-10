from flask import Flask, render_template, request, jsonify, send_file, after_this_request
from pytube import YouTube
import os
import moviepy.editor as mp
from PyPDF2 import PdfReader
import pyttsx3
from PIL import Image
from rembg import remove
import io
import time
import threading

carpeta_videos ='static/video_downloads'
carpeta_musica ='static/music_downloads'
carpeta_imgs ='static/img_downloads'
carpeta_pdfs ='static/pdf_downloads'

app = Flask(__name__)

# metodo para borrar los archivos de la carpeta 

def borrar_video(ruta):
    
    time.sleep(10)
    os.remove(ruta)

# ruta principal

@app.route('/')

def principal():
    
    print ("hello world")
    return render_template('index.html')

# recibir el url para descargar videos

@app.route('/enviar-url', methods=['GET', 'POST'])

def submit_url():

    if request.method == 'POST':

        archivos = os.listdir(carpeta_videos)

        # hilo para borrar el video si hay arvhivos previos 

        if archivos:

            archivo_selecionado = archivos[0]
            ruta = os.path.join(carpeta_videos, archivo_selecionado)
            os.remove(ruta)

        url = request.form['url']
        url_used = url
        yt = YouTube(url_used)
        stream = yt.streams.get_highest_resolution()
        stream.download(carpeta_videos)
        url=""
    
    return jsonify({'success': True, 'message': 'Video descargado exitosamente.', 'video_filename': url_used})

#enviar a js la ruta para descargar el video y borrarlo de la carpeta 

@app.route('/descarga')

def descarga():

    archivos = os.listdir(carpeta_videos) # leer los archivos en la carpeta

    if archivos:

        archivo_selec = archivos[0] # se selecciona el primer archivo 
        ruta = os.path.join(carpeta_videos, archivo_selec) #ruta para descargar el video

        # hilo para borrar el video despues de 5 seg
        threading.Thread(target=borrar_video, args=(ruta,)).start()

        return send_file(ruta, as_attachment=True) # enviar la ruta a js
    
# recibir el url para descargar el audio de un video 

@app.route('/enviar-urlm', methods=['GET', 'POST'])

def submit_urlm():

    if request.method == 'POST':

        archivos = os.listdir(carpeta_musica)

        if archivos:
            archivo_selecionado = archivos[0]
            ruta = os.path.join(carpeta_videos, archivo_selecionado)
            os.remove(ruta)
        
        urlm = request.form['urlm']

        yt = YouTube(urlm)
        
        # Filtra las streams para obtener solo las de audio
        audio_streams = yt.streams.filter(only_audio=True)
        
        # Selecciona la mejor calidad de audio disponible
        audio_stream = audio_streams.first()
        
        # Descarga el audio en formato MP4 (esto no descargará el archivo MP4)
        audio_file_path = audio_stream.download(carpeta_musica)
        
        # Convierte el audio de MP4 a MP3
        mp3_file_path = audio_file_path.replace(".mp4", ".mp3")
        mp.AudioFileClip(audio_file_path).write_audiofile(mp3_file_path)

        os.remove(audio_file_path)
        
    return jsonify({'success': True, 'message': 'Audio descargado exitosamente.', 'audio_filename': urlm})
    
#enviar a js la ruta para descargar el video y borrarlo de la carpeta 

@app.route('/descarga-musica')

def descarga_musica():

    archivos = os.listdir(carpeta_musica) # leer los archivos en la carpeta

    if archivos:

        archivo_selec = archivos[0] # se selecciona el primer archivo 
        ruta = os.path.join(carpeta_musica, archivo_selec) #ruta para descargar el video

        # hilo para borrar el video despues de 5 seg
        threading.Thread(target=borrar_video, args=(ruta,)).start()

        return send_file(ruta, as_attachment=True) # enviar la ruta a js

# enviar imagen al servidor y procesarla

@app.route('/img-enviada', methods=['POST'])

def submit_image():

    if request.method == 'POST':

        archivos = os.listdir(carpeta_imgs)

        if archivos:
            archivo_selecionado = archivos[0]
            ruta = os.path.join(carpeta_imgs, archivo_selecionado)
            os.remove(ruta)

        imgs = request.files['img-enviada']
            
        img = Image.open(imgs.stream)
        output = remove(img)
        img_filename = imgs.filename.rsplit('.', 1)[0] + '.png'
        filepath = os.path.join(carpeta_imgs, img_filename)
        output.save(filepath)

        image_url = '/static/img_downloads/' + img_filename

        return jsonify({'success': True, 'message': 'Imagen enviada exitosamente.', 'filename': img_filename, 'url': image_url})

@app.route('/descarga-img')

def descarga_img():

    archivos = os.listdir(carpeta_imgs) # leer los archivos en la carpeta

    if archivos:

        archivo_selec = archivos[0] # se selecciona el primer archivo 
        ruta = os.path.join(carpeta_imgs, archivo_selec) #ruta para descargar el video

        # hilo para borrar el video despues de 5 seg
        threading.Thread(target=borrar_video, args=(ruta,)).start()

        return send_file(ruta, as_attachment=True) # enviar la ruta a js


if __name__ == '__main__':

    app.run(debug=True)