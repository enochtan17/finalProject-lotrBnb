from app.models import db, Listing

def seed_listings():
    rivendell = Listing(
        owner_id = 7,
        name = 'Imladris',
        description = 'Secluded sanctuary in a beautiful hidden valley. Come rest under the protection of Elven magic and enjoy a peace of mind you cannot experience anywhere else in Middle Earth. Hike along the deep river valley and gaze upon breathtaking waterfalls. Three meals a day and live serene music included.',
        address = '1697 Peredhil Way',
        city = 'Rivendell',
        country = 'Eriador',
        latitude = -41.06,
        longitude = 175.19,
        price = 120,
        image_url = 'https://wallpapercave.com/wp/wp1947157.jpg'
    )

    # demo_listing2 = Listing(
    #     owner_id = ''
    #     name = ''
    #     description = ''
    #     address = ''
    #     city = ''
    #     country = ''
    #     latitude = ''
    #     longitude = ''
    #     price = ''
    #     image_url = ''
    # )

    # demo_listing3 = Listing(
    #     owner_id = ''
    #     name = ''
    #     description = ''
    #     address = ''
    #     city = ''
    #     country = ''
    #     latitude = ''
    #     longitude = ''
    #     price = ''
    #     image_url = ''
    # )

    # demo_listing4 = Listing(
    #     owner_id = ''
    #     name = ''
    #     description = ''
    #     address = ''
    #     city = ''
    #     country = ''
    #     latitude = ''
    #     longitude = ''
    #     price = ''
    #     image_url = ''
    # )

    db.session.add(rivendell)
    # db.session.add(demo_listing2)
    # db.session.add(demo_listing3)
    # db.session.add(demo_listing4)

    db.session.commit()


def undo_listings():
    db.session.execute('TRUNCATE servers RESTART IDENTITY CASCADE')
    db.session.commit()
