from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Demo', email='demo@lotr.io', hashed_password='password')
    frodo = User(
        username='Frodo', email='frodo@lotr.io', hashed_password='password')
    gandalf = User(
        username='Gandalf', email='gandalf@lotr.io', hashed_password='password')
    aragorn = User(
        username='Aragorn', email='aragorn@lotr.io', hashed_password='password')
    legolas = User(
        username='Legolas', email='legolas@lotr.io', hashed_password='password')
    gimli = User(
        username='Gimli', email='gimli@lotr.io', hashed_password='password')
    elrond = User(
        username='Elrond', email='elrond@lotr.io', hashed_password='password')
    sauron = User(
        username='Sauron', email='sauron@lotr.io', hashed_password='password')
    saruman = User(
        username='Saruman', email='saruman@lotr.io', hashed_password='password')
    bilbo = User(
        username='Bilbo', email='bilbo@lotr.io', hashed_password='password')
    galadriel = User(
        username='Galadriel', email='galadriel@lotr.io', hashed_password='password')
    faramir = User(
        username='Faramir', email='faramir@lotr.io', hashed_password='password')
    dainironfoot = User(
        username='Dain Ironfoot', email='dainironfoot@lotr.io', hashed_password='password')
    thranduil = User(
        username='Thranduil', email='thranduil@lotr.io', hashed_password='password')
    tombombadil = User(
        username='Tom Bombadil', email='tombombadil@lotr.io', hashed_password='password')
    shelob = User(
        username='Shelob', email='shelob@lotr.io', hashed_password='password')


    db.session.add(demo)
    db.session.add(frodo)
    db.session.add(gandalf)
    db.session.add(aragorn)
    db.session.add(legolas)
    db.session.add(gimli)
    db.session.add(elrond)
    db.session.add(sauron)
    db.session.add(saruman)
    db.session.add(bilbo)
    db.session.add(galadriel)
    db.session.add(faramir)
    db.session.add(dainironfoot)
    db.session.add(thranduil)
    db.session.add(tombombadil)
    db.session.add(shelob)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
