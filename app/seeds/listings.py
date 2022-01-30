from app.models import db, Listing

def seed_listings():
    rivendell = Listing(
        owner_id = 7,
        name = 'Imladris',
        description = 'Secluded sanctuary in a beautiful hidden valley. Come rest under the protection of Elven magic and enjoy a peace of mind you cannot experience anywhere else in Middle Earth. Hike along the deep river valley and gaze upon breathtaking waterfalls. Three meals a day and live serene music included.',
        capacity = 100,
        bedrooms = 61,
        beds = 84,
        baths = 42,
        address = '1697 Peredhil Way',
        city = 'Rivendell',
        country = 'Eriador',
        latitude = -41.06,
        longitude = 175.19,
        price = 120,
        image_url = 'https://wallpapercave.com/wp/wp1947157.jpg'
    )

    bag_end = Listing(
        owner_id = 10,
        name = 'Bag End',
        description = 'The finest hobbit-hole in the South Farthing. Fully stocked with food and drink. Furnished with treasures recovered from Smaug at the Lonely Mountain. Beautiful gardens kept up by Samwise Gamgee. Just a stone\'s throw away from the Green Dragon.',
        capacity = 15,
        bedrooms = 8,
        beds = 12,
        baths = 6,
        address = '404 Bagshot Row',
        city = 'Hobbiton',
        country = 'Shire',
        latitude = -37.86,
        longitude = 175.68,
        price = 400,
        image_url = 'https://i.insider.com/5575ad2d6da811950fb7ee96?width=1000&format=jpeg&auto=webp'
    )

    # demo_listing3 = Listing(
    #     owner_id = '',
    #     name = '',
    #     description = '',
    #     address = '',
    #     capacity = '',
    #     bedrooms = '',
    #     beds = '',
    #     baths = '',
    #     city = '',
    #     country = '',
    #     latitude = '',
    #     longitude = '',
    #     price = '',
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
    db.session.add(bag_end)
    # db.session.add(demo_listing3)
    # db.session.add(demo_listing4)

    db.session.commit()


def undo_listings():
    db.session.execute('TRUNCATE listings RESTART IDENTITY CASCADE')
    db.session.commit()
