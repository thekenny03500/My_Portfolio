from flask import Flask,render_template
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('Index.html')

@app.route('/PPE2_Mission_1')
def PPP2_Mission_1():
    return render_template('SISIO/PPE2_Mission_1.html')

@app.route('/PPE2_Mission_2')
def PPP2_Mission_2():
    return render_template('SISIO/PPE2_Mission_2.html')

@app.route('/PPE2_Mission_3')
def PPP2_Mission_3():
    return render_template('SISIO/PPE2_Mission_3.html')

@app.route('/PPE2_Mission_4')
def PPP2_Mission_4():
    return render_template('SISIO/PPE2_Mission_4.html')

@app.route('/Stage_S1SIO')
def Stage_S1SIO():
    return render_template('SISIO/Stage_S1SIO.html')

@app.route('/PPE3_Mission_1')
def PPP3_Mission_1():
    return render_template('SISIO/PPE3_Mission_1.html')

@app.route('/PPE3_Mission_2')
def PPP3_Mission_2():
    return render_template('SISIO/PPE3_Mission_2.html')

@app.route('/PPE3_Mission_3')
def PPP3_Mission_3():
    return render_template('SISIO/PPE3_Mission_3.html')

@app.route('/PPE3_Mission_4')
def PPP3_Mission_4():
    return render_template('SISIO/PPE3_Mission_4.html')

@app.route('/Stage_S2SIO')
def Stage_S2SIO():
    return render_template('SISIO/Stage_S2SIO.html')

@app.errorhandler(404)
def ma_page_404(error):
    return render_template('Error404.html'), 404

#
#if __name__ == '__main__':
#    app.run(debug=True)