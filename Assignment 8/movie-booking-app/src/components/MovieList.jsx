import React from "react";

const movies = [
    { id: 1, title: "Movie 1", image: "/images/image1.jpg" },
    { id: 2, title: "Movie 2", image: "/images/image2.jpg" },
    { id: 3, title: "Movie 3", image: "/images/image3.jpg" },
    { id: 4, title: "Movie 4", image: "/images/image4.jpg" },
];

const MovieList = ({ onSelectMovie }) => {
    return (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px" }}>
            {movies.map((movie) => (
                <div
                    key={movie.id}
                    style={{ textAlign: "center", cursor: "pointer" }}
                    onClick={() => onSelectMovie(movie)}
                >
                    <img
                        src={movie.image}
                        alt={movie.title}
                        style={{ width: "90%", height: "400px", borderRadius: "8px" }}
                    />
                    <h3>{movie.title}</h3>
                </div>
            ))}
        </div>
    );
};

export default MovieList;
