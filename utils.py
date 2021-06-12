import time
import pymysql

# 获取服务器时间
def get_time():
    time_str = time.strftime("%Y{}%m{}%d{} %X")
    return  time_str.format('年','月','日')


def get_conn():
    conn = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        password='123456',
        db='cov'
    )

    cursor = conn.cursor()

    return conn, cursor

def close_conn(conn,cursor):

    cursor.close()

    conn.close()


#从数据库获取当前详细感染数据

def query(sql,*args):

    conn,cursor=get_conn()

    cursor.execute(sql,args)

    res=cursor.fetchall()

    conn.commit()

    close_conn(conn,cursor)

    return  res

def get_current_data():


    sql1='select * from current_data where id=1'

    # sql2 = 'select heal from current_data'

    # sql3 = 'select dead from current_data'

    res=query(sql1)
    #list1.append(query(sql2)[0][0])
    #list1.append(query(sql3)[0][0])
    return res[0]
	
# 从表province_surplus中查询省份和剩余感染人数
def get_c2_data():
    # sql = 'select province,surplus1 from province_surplus'
    # res = query(sql)
    # return res

    res1=[]
    for i in range(1,32):
        sql = 'select province,surplus1 from province_surplus where id=%s'
        res=query(sql,i)
        res1.append(res)
    res1=tuple(res1)
    return res1

def get_l1_data():
    # sql = 'select province,surplus1 from province_surplus'
    # res = query(sql)
    # return res

    sql = 'select datetime1,confirm,heal,dead from total_trend'
    res = query(sql)
    return res



def get_l2_data():
    # sql = 'select province,surplus1 from province_surplus'
    # res = query(sql)
    # return res

    sql = 'select datetime1,confirm,heal,dead from add_trend'
    res = query(sql)
    return res


def get_r1_data():
    # sql = 'select province,surplus1 from province_surplus'
    # res = query(sql)
    # return res

    sql = 'select datetime1,province,surplus1 from top5'
    res = query(sql)
    return res

def get_r2_data():
    # sql = 'select province,surplus1 from province_surplus'
    # res = query(sql)
    # return res

    sql = 'select content,hot from baidu_hot_1'
    res = query(sql)
    return res





# if __name__ == '__main__':
#     for i in get_r2_data():
#         print(i[1])
    # print(get_c2_data())


    # for tup in get_c2_data():
    #     # print(tup)
    #     day.append(tup[0].strftime("%Y-%m-%d"))
    #     confirm.append({'confirm':tup[1]})
    #     heal.append({'heal': tup[2]})
    #     dead.append({'dead': tup[3]})

# if __name__ == '__main__':
#     print(get_l1_data()[2])