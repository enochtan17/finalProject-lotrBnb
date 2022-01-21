from app.models import db, Listing

def seed_listings():
    demo_listing1 = Listing(

    )

    demo_listing2 = Listing(

    )

    demo_listing3 = Listing(

    )

    demo_listing4 = Listing(

    )

    db.session.add(demo_listing1)
    db.session.add(demo_listing2)
    db.session.add(demo_listing3)
    db.session.add(demo_listing4)

    db.session.commit()


def undo_listings():
    db.session.execute('TRUNCATE servers RESTART IDENTITY CASCADE')
    db.session.commit()
