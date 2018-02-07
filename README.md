# 🐶 &nbsp;PET HERO

[![LICENSE MIT](https://img.shields.io/badge/LICENSE-MIT-blue.svg)](https://opensource.org/licenses/MIT)

**Pet Hero** is an open-source project aimed to bring pet lovers together with animals who need loving homes.

## 🐾 &nbsp;Getting Started

Contributions to this project are welcomed and appreciated, we just ask that you abide by the [code of conduct](#code-of-conduct). If you'd like to contribute to this project, please read the [contribution instructions](#contributing).

## 😻 &nbsp;Installing Dependencies

Clone this repository and while in the root directory of the project folder run the `npm install` command in the terminal to install the server dependencies.

Once installation has completed, `cd client` to change into the client directory and run `npm install` to install the client dependencies.

Return to the project root directory with `cd ..` and run the command `npm run dev` to start the development server on http://localhost:8080

## 🐈 &nbsp;About the Application

### Minimum Viable Product (MVP)

The minimum viable product (MVP) describes the early stages of development to which the project satisfies the most basic functionality requirements.

* Frontend

  * Logo
  * Icon Packages
  * Static Website
    * Home Page
    * Search Page (dummy data)
    * About Page
    * Contact Page

* Backend
  * Basic Server
    * HTTP Routing for static pages
    * REST API Endpoints
    * Connection to external API(s)

### Features & Ideas

* The interface will:

  * Display a primary call-to-action

* Users will be able to:

  * Search for animals to adopt
    * By entering their zip code (?)
    * By filtering results by animal species, breed, age, color, and location.
  * View individual animal "profile" pages
  * Create a user account (via social media?)
  * Save favorite animals
  * View favorited animals
  * Connect with shelters housing animals
  * Share animals to social media outlets in need of adoption
  * Share lost animal flyers to social media outlets

* The application will:
  * Use an API of aggregated data of animals in shelters across the United States
  * Interface with a database to save users:
    * Favorited animals

### Technology Stack

For now we will keep this basic. HTML and CSS on the frontend with a NodeJS server running Express on the backend.

**Future Improvements:**

* Frontend

  * React + Redux
  * Styled Components
  * Babel
  * Webpack

* Backend
  * REST API
  * Isomorphic/Universal Rendering (?)
  * MongoDB or Postgres (undecided)
  * Mongoose or Sequelize (undecided)

**Progressive Enhancements:**

* Service Workers (offline enabled)
* Client-side caching strategies (IndexedDB?)

### Contributors

|                                                                                                                                                                                                                                                                                          |                                                                                                                                                                                                                                                                                 |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| [<img src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-1/p160x160/11006462_1119691051391147_8234870619860166121_n.jpg?oh=bbd7c952e3d72b79fe588eb010113de3&oe=5AE0AA18" height="48" style="border-radius: 100%;"><br><sub><b>Christopher Gates</b></sub>](https://github.com/tophergates) | [<img src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/16602756_10206479091895926_6441704552829543071_n.jpg?oh=23de49a9de17e510ace4fe89723d3538&oe=5B124E11" height="48" style="border-radius: 100%;"><br /><sub><b>Ryan C. Martin</b></sub>](https://github.com/ryancmartin) |

[code-of-conduct]: ./CODE_OF_CONDUCT.md
[contributing]: ./CONTRIBUTING.md
