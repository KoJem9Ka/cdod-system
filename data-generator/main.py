# id: number
# first_name: string
# last_name: string
# third_name: string
# birth_date: date
# course: ['C Sharp', '2D графика', 'Python', '3D графика', 'Робофабрика', 'Android']
# group:
#   C Sharp:
#     програм.1.C#:
#   2D графика
#     2D.1
#   Python
#     'програм.1.Python',
#     'програм.2.Python'
#   3D графика
#     3D.1
#   Робофабрика
#     Робо1.1
#     Робо1.2
#     Робо1.3
#     Робо2.1
#     Робо2.2
#   Android
#     Android
# phone_number: string
# notes: string
# Paid: boolean
# set_payment: Робофабрика && boolean || null
# request_date: date
# contract_status
import codecs

from arrays import FigureValues


def generate_student(id: int):
    last_name, first_name, patronymic = FigureValues.getFIO()
    course, group = FigureValues.getCourseAndGroup()

    return f'''
{{
    "id": {id},
    "last_name": "{last_name}",
    "first_name": "{first_name}",
    "patronymic": "{patronymic}",
    "birth_date": "{FigureValues.getDateBetweenYearsAgo(9, 15)}",
    "course": "{course}",
    "group": "{group}",
    "phone_number": "{FigureValues.getPhone()}",
    "notes": {FigureValues.getNotes()},
    "paid": {FigureValues.getPaid()},
    "materials_paid": {FigureValues.getMaterialsPaid(course)},
    "request_date": "{FigureValues.getDateBetweenYearsAgo(0, 3)}",
    "contract_status": "{FigureValues.getContractStatus()}"
}}
'''.strip()


if __name__ == '__main__':
    students = [generate_student(i) for i in range(1, 500 + 1)]
    sep = ',\n'
    json = f'''
{{
    "students": [
        {sep.join(students)}
    ]
}}
    '''.strip()
    # print(','.join(students[0:3]))
    with codecs.open('students.json', 'w', 'utf-8') as file:
        file.write(json)
