# соединиться с БД
# выборка одним запросом (вместо статуса укажем r1,r2,z1.z2)
# сформировать 4 файла (2 запроса в чат и 2 для решений для формирования ДРЗ)
# вставить в таблицу историй
class dbSQL:
    def __init__(self): 
        self.db = MySQLdb.connect(host="localhost", user="123", passwd="55955", db="ucms",charset='utf8', init_command='SET NAMES UTF8')
        self.cursor = db.cursor()
        
    def query(self, ql):
        self.cursor.execute(ql)
        return self.cursor.fetchall()
 
    def __del__(self)
        self.db.close()
 
temp = dbSQL()
result = temp.query("""SELECT * FROM reys """)