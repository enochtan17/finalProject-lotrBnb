# Middle Earth BBnB (Bed Breakfast & Second Breakfast)

Website: https://lotrbnb-etan.herokuapp.com/

A spin on Airbnb for the people of Middle Earth. Users can browse, create, edit, and delete listings, as well as reviews.

## Technologies Used

- React / Redux
- Javascript
- CSS
- Python
- Flask
- SQL Alchemy
- PostgreSQL
- Werkzeug
- WT Forms
- CORS
- Heroku
- Docker

## Future Features

- [] Dynamic search bar
- [] More user interaction with Bookings
- [] Amenities list, ability to search / sort by amenities

## Documentation

* [DB Schema](https://github.com/enochtan17/finalProject-lotrBnb/wiki/DB-Schema)
* [Feature List](https://github.com/enochtan17/finalProject-lotrBnb/wiki/Feature-List)
* [User Stories](https://github.com/enochtan17/finalProject-lotrBnb/wiki/User-Stories)



## How to run this project

1. Clone this repository

2. Install dependencies

   -   ```cd app &&
       pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt
       ```

   -   ```cd react-app &&
       npm install
       ```

3. Create a **.env** file based on the example with proper settings for your
   development environment

4. Setup your PostgreSQL user, password and database and make sure it matches your **.env** file

5. Get into your pipenv, migrate your database, seed your database, and run your flask app

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```
   flask run
   ```

6. In the react-app folder, run ```npm start```.

***
*IMPORTANT!*
   If you add any python dependencies to your pipfiles, you'll need to regenerate your requirements.txt before deployment.
   You can do this by running:

   ```bash
   pipenv lock -r > requirements.txt
   ```

*ALSO IMPORTANT!*
   psycopg2-binary MUST remain a dev dependency because you can't install it on apline-linux.
   There is a layer in the Dockerfile that will install psycopg2 (not binary) for us.
***
