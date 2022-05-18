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
from datetime import datetime, timedelta
from random import randint, random
from loremipsum import get_sentences

from arrays import male_first_names, female_first_names, female_third_names, female_last_names, male_last_names, male_third_names, courses, phone_numbers


def generate_student(id: int):
    gender = round(random()) == 1
    isNotes = random() <= 0.4
    isPaid = random() <= 0.8
    isSetPaid = random() <= 0.8
    names = (male_first_names if gender else female_first_names)
    surnames = (male_last_names if gender else female_last_names)
    patronymics = (male_third_names if gender else female_third_names)

    course = list(courses.keys())[randint(0, len(courses) - 1)]

    return f'''
{{
    "id": {id},
    "last_name": "{surnames[randint(0, len(surnames) - 1)]}",
    "first_name": "{names[randint(0, len(names) - 1)]}",
    "third_name": "{patronymics[randint(0, len(patronymics) - 1)]}",
    "birth_date": "{(datetime.today() - timedelta(days = 365 * randint(9, 15) + randint(0, 365))).date()}",
    "course": "{course}",
    "group": "{courses[course][randint(0, len(courses[course]) - 1)]}",
    "phone_number": "{phone_numbers[randint(0, len(phone_numbers) - 1)]}",
    "notes": "{' '.join(get_sentences(randint(0, 2))).replace("'", '') if isNotes else ''}",
    "paid": {str(isPaid).lower()},
    "set_payment": {str(isSetPaid).lower() if course == 'Робофабрика' else 'null'},
    "request_date": "{(datetime.today() - timedelta(days = 365 * randint(0, 3) + randint(10, 365))).date()}",
    "contract_status": "Учится"
}}
'''.strip()


if __name__ == '__main__':
    students = [generate_student(i) for i in range(500)]
    json = f'''{{"students": [{','.join(students)}]}}'''
    # print(','.join(students[0:3]))
    with codecs.open('students.json', 'w', 'utf-8') as file:
        file.write(json)
