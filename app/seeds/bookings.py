from app.models import db, Booking

def seed_bookings():
    booking1 = Booking(
        listing_id = 1,
        guest_id = 2,
        start_date = '3018-10-24 10:00:00',
        end_date = '3018-12-25 10:00:00',
        num_guests = 1
    )

    booking2 = Booking(
        listing_id = 1,
        guest_id = 10,
        start_date = '3002-9-22 10:00:00',
        end_date = '3021-9-29 10:00:00',
        num_guests = 1
    )

    db.session.add(booking1)
    db.session.add(booking2)
    db.session.commit()


def undo_bookings():
    db.session.execute('TRUNCATE bookings RESTART IDENTITY CASCADE')
    db.session.commit()
