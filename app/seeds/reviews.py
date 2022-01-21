from app.models import db, Review

def seed_reviews():
    review1 = Review(
        listing_id = 1,
        guest_id = 2,
        rating = 5,
        comment = 'Had a great stay. Elrond even healed my stab wound from the Nazgul.'
    )

    review2 = Review(
        listing_id = 1,
        guest_id = 10,
        rating = 5,
        comment = 'Came here to retire and work on my book - was not disappointed and could not think of a better retirement.'
    )

    db.session.add(review1)
    db.session.add(review2)
    db.session.commit()

def undo_reviews():
    db.session.execute('TRUNCATE servers RESTART IDENTITY CASCADE')
    db.session.commit()
