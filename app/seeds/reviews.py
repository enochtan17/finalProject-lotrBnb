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
        comment = 'Came here to retire and work on my book - was not disappointed and could not think of a better way to spend my time.'
    )

    review3 = Review(
        listing_id = 1,
        guest_id = 3,
        rating = 5,
        comment = 'Great communcation and hospitality. Always good to see an old friend.'
    )

    review4 = Review(
        listing_id = 1,
        guest_id = 6,
        rating = 3,
        comment = 'People rave about the serene beauty of Rivendell but it is nothing like the mountain halls of our great mines. Plus the food was a little lacking - all green stuff.'
    )

    review5 = Review(
        listing_id = 1,
        guest_id = 11,
        rating = 5,
        comment = 'Elrond\'s home is an inspiration for other Elf-hosts like myself. Certainly lives up to its name of The Last Homely House East of the Sea.'
    )

    review6 = Review(
        listing_id = 2,
        guest_id = 3,
        rating = 4,
        comment = 'One of the coziest and cheery places I have ever stayed at, although I did knock my head on the low ceilings a few times, which will result in the knocking off of one star.'
    )

    review7 = Review(
        listing_id = 2,
        guest_id = 2,
        rating = 5,
        comment = 'My uncle is a great host. What people may see as a cluttered mess is really just organized chaos. Ever since that trip to the mountains, he has been very meticulous about keeping things in order... particularly a peculiar golden ring of his.'
    )

    db.session.add(review1)
    db.session.add(review2)
    db.session.add(review3)
    db.session.add(review4)
    db.session.add(review5)
    db.session.add(review6)
    db.session.add(review7)
    db.session.commit()

def undo_reviews():
    db.session.execute('TRUNCATE reviews RESTART IDENTITY CASCADE')
    db.session.commit()
