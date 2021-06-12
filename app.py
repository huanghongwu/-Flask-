from flask import Flask
from flask import request
from flask import render_template
from flask import jsonify
from jieba.analyse import extract_tags
import utils

app = Flask(__name__)


@app.route('/')
def hello_world():
    return render_template("main.html")


@app.route('/tem')
def hello_world_3():
    return render_template("index.html")


@app.route('/ajax', methods=['get', 'post'])
def hello_world_4():
    return '10000'


@app.route('/time')
def hello_world_5():
    return utils.get_time()



@app.route('/c1')
def get_current():
    a=utils.get_current_data()
    return jsonify({'confirm':a[2],'heal':a[3],'dead':a[4]})

@app.route('/c2')
def get_c2_data():
    res = []
    for tup in utils.get_c2_data():
        # print(tup)
        res.append({'name':tup[0][0],'value':tup[0][1]})
    return jsonify({"data":res})

@app.route('/l1')
def get_l1_data():
    day,confirm,heal,dead = [],[],[],[]
    for tup in utils.get_l1_data():
        # print(tup)
        day.append(tup[0].strftime("%Y-%m-%d"))
        confirm.append(tup[1])
        heal.append(tup[2])
        dead.append(tup[3])
    #print(day,confirm,heal,dead)
    return jsonify({"day":day,"confirm":confirm,"heal":heal,"dead":dead})

@app.route('/l2')
def get_l2_data():
    day,confirm,heal,dead = [],[],[],[]
    for tup in utils.get_l2_data():
        # print(tup)
        day.append(tup[0].strftime("%Y-%m-%d"))
        confirm.append(tup[1])
        heal.append(tup[2])
        dead.append(tup[3])
    #print(day,confirm,heal,dead)
    return jsonify({"day":day,"confirm":confirm,"heal":heal,"dead":dead})

@app.route('/r1')
def get_r1_data():
    province,numbers = [],[]
    for tup in utils.get_r1_data():
        # print(tup)
        province.append(tup[1])
        numbers.append(tup[2])
        # list1.append(tup[0].strftime("%Y-%m-%d"))
        # print(list1)
    # print(list2)
    #print(day,confirm,heal,dead)
    return jsonify({"province":province,"numbers":numbers})

@app.route('/r2')
def get_r2_data():
    list1 = []
    for tup in utils.get_r2_data():
        # print(tup)
        ks = extract_tags(tup[0])
        for i in ks:
            list1.append({'name':i,'value':str(tup[1])})
        # list1.append(tup[0].strftime("%Y-%m-%d"))
        # print(list1)
    # print(list2)
    #print(day,confirm,heal,dead)
    print(list1)
    return jsonify({"data":list1})

@app.route('/login')
def hello_world_2():
    name = request.values.get("name")
    pwd = request.values.get("pwd")
    return f'name={name},pwd={pwd}'


@app.route('/abc')
def hello_world_1():
    id = request.values.get("id")
    return f"""
    <form action="/login">
        账号：<input name="name" value="{id}"><br>
        密码：<input name="pwd">
    <input type="submit">
    </form>"""


if __name__ == '__main__':
    app.run()