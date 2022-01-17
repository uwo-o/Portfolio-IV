import smtplib
from decouple import config
from flask import Flask, render_template, request, redirect, url_for, flash, send_from_directory

app=Flask(__name__)
app.secret_key = config('SECRET_KEY')

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        name=request.form['name']
        email=request.form['email']
        phone=request.form['phone']
        message=request.form['message']
        try:
            server = smtplib.SMTP('smtp.gmail.com', 587)
            server.starttls()
            server.login(config('EMAIL'), config('PASSWORD'))
            message = 'Subject: Contacto\n\nNombre: {}\nCorreo: {}\nNumero: {}\n\n{}'.format(name, email, phone, message)
            server.sendmail(config('EMAIL'), config('EMAIL2'), message)
            server.quit()
            flash('Your message has been sent!')
        except:
            flash('An error occured. Please try again.')
        return redirect(url_for('index'))
    return render_template('index.html')

@app.route('/robots.txt')
@app.route('/sitemap.xml')
def static_from_root():
    return send_from_directory(app.static_folder, request.path[1:])

if __name__=='__main__':
    app.run(debug=True,host='0.0.0.0')