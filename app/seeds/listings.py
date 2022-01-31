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
        price = 1200,
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
        price = 799,
        image_url = 'https://i.insider.com/5575ad2d6da811950fb7ee96?width=1000&format=jpeg&auto=webp'
    )

    edoras = Listing(
        owner_id = 17,
        name = 'Guest Room in Great Hall of Edoras',
        description = 'Fully furnished guest quarters and private bath to yourself. Enjoy the views where the great plains of Rohan meet the foot of the White Mountains. Join in on the feasts, security provided by the Rohirrim. Complimentary horse riding lessons.',
        capacity = 4,
        bedrooms = 1,
        beds = 2,
        baths = 1,
        address = '7771 Mount Sunday Drive',
        city = 'Edoras',
        country = 'Rohan',
        latitude = -43.55,
        longitude = 170.89,
        price = 379,
        image_url = 'https://wallpaperaccess.com/full/4606208.jpg'
    )

    lakestone_lodge = Listing(
        owner_id = 8,
        name = 'Lakestone Lodge',
        description = 'Modernly furnished suite on the shores of the beautiful Sea of Rhun. Nestled in the heart of the port city of Lest, the Lakestone Lodge provides unique views and access, and is an ideal resting spot for traveling merchants.',
        capacity = 5,
        bedrooms = 2,
        beds = 3,
        baths = 2,
        address = '2444 Balchoth Street',
        city = 'Lest',
        country = 'Rhun',
        latitude = -44.18,
        longitude = 170.17,
        price = 499,
        image_url = 'https://resources.stuff.co.nz/content/dam/images/4/y/s/7/3/o/image.related.StuffLandscapeThreeByTwo.1464x976.4ys738.png/1619650061563.jpg'
    )

    torech_ungol = Listing(
        owner_id = 16,
        name = 'Shelob\'s Lair',
        description = 'Newly renovated caverns provide for a unique experience in the mountains of Ephel Duath. Shelob\'s Lair is strategically and conveniently situated between Minas Morgul, Cirith Ungol, and the Plains of Gorgoroth. Guests have full access to outer caverns - beware of traversing inwards too much and distrubing the host!',
        capacity = 3,
        bedrooms = 1,
        beds = 1,
        baths = 1,
        address = 'Cirith Ungol Passageway',
        city = 'Cirith Ungol',
        country = 'Mordor',
        latitude = -41.31,
        longitude = 174.82,
        price = 249,
        image_url = 'https://empire-s3-production.bobvila.com/slides/39764/vertical_slide_wide/Chic_Crete_Cave_airbnb.jpg?1603137428'
    )

    db.session.add(rivendell)
    db.session.add(bag_end)
    db.session.add(edoras)
    db.session.add(lakestone_lodge)
    db.session.add(torech_ungol)

    db.session.commit()


def undo_listings():
    db.session.execute('TRUNCATE listings RESTART IDENTITY CASCADE')
    db.session.commit()
