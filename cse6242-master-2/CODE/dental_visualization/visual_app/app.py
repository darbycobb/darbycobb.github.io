# app.py
import json
import prep
import pylint.reporters.ureports.nodes
from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def index():
    '''
        Uses flask template and passes data to index.html
    '''
    df = prep.get_state_data()
    print(df)
    chart_data = df.to_dict(orient='records')
    chart_data = json.dumps(chart_data, indent=2)
    data = {'chart_data': chart_data}
    return render_template("index.html", data=data)


if __name__ == "__main__":
    app.run(debug=True)
