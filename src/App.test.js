import React from "react";
import Axios from "axios";

class App extends React.Component {
    state = {
        isLoading: true,
        movies: []
    };
    getMovies = async () => {
        const movies = await Axios.get(
            "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
        );
        this.setState({
            isLoading: false,
            movies
        });
    };

    render() {
        const { isLoading, movies } = this.state;
        return <div>{movies}</div>;
    }
}

export default App;
