// Movie class
class Movie {
  constructor(title, genre, director, releaseYear, availableCopies) {
    this.title = title;
    this.genre = genre;
    this.director = director;
    this.releaseYear = releaseYear;
    this.availableCopies = availableCopies;
  }

  rentMovie() {
    if (this.availableCopies > 0) {
      this.availableCopies--;
      return `You have successfully rented ${this.title}. Enjoy your movie!`;
    } else {
      return `Sorry, ${this.title} is currently out of stock.`;
    }
  }
}

// Customer class
class Customer {
  constructor(name, membershipType) {
    this.name = name;
    this.membershipType = membershipType;
  }

  rentMovie(movie) {
    return movie.rentMovie();
  }
}

// RentalStore class
class RentalStore {
  constructor() {
    this.movies = [];
  }

  addMovie(movie) {
    this.movies.push(movie);
  }

  findMovieByTitle(title) {
    return this.movies.find(movie => movie.title === title);
  }
}

// Usage
const rentalStore = new RentalStore();

const movie1 = new Movie('Alien', 'Sci-Fi', 'Christopher Nolan', 2010, 5);
const movie2 = new Movie('The Nun', 'Horror', 'Frank Darabont', 2023, 3);

rentalStore.addMovie(movie1);
rentalStore.addMovie(movie2);

const customer1 = new Customer('Alice', 'Gold');
const customer2 = new Customer('Bob', 'Silver');

console.log(customer1.rentMovie(rentalStore.findMovieByTitle('Alien')));
console.log(customer2.rentMovie(rentalStore.findMovieByTitle('The Nun')));

