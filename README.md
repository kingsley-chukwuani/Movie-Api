**MOVIE RENTAL SYSTEM**

This simple javascript code represents a basic movie rental system with three main classes: *'Movie'*, *'Customer'*, and *'RentalStore'*. Here's a brief overview of each class:


**`MOVIE CLASS`**

The `Movie` class is responsible for creating movie objects with properties such as title, genre, director, release year and available copies. it also includes a method, `rentMovie()`, which allows customers to rent a movie if copies are available.



**`CUSTOMER CLASS`**

The `Customer` class creates customer objects with properties like name and membership type. It includes a method, `rentMovie(movie)`, that delegates the renting functionality to the `Movie` class.



**`RENTALSTORE CLASS`**

The `RentalStore` class represents the movie rental store, storing an array of movies. It includes methods to add a movie (`addMovie(movie)`) and fnd a movie by its title (`findMovieByTitle(title)`).


**`USAGE EXAMPLE`**

*const rentalStore = new RentalStore();*

*const movie1 = new Movie('Alien', 'Sci-Fi', 'Christopher Nolan', 2010, 5);*
*const movie2 = new Movie('The Nun', 'Horror', 'Frank Darabont', 2023, 3);*

*rentalStore.addMovie(movie1);*
*rentalStore.addMovie(movie2);*

*const customer1 = new Customer('Alice', 'Gold');*
*const customer2 = new Customer('Bob', 'Silver');*

*console.log(customer1.rentMovie(rentalStore.findMovieByTitle('Alien')));*
*console.log(customer2.rentMovie(rentalStore.findMovieByTitle('The Nun')));*

