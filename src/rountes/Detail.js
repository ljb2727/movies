import React from "react";

// function Detail({ location }) {
//     console.log(location);
//     return <div>test</div>;
// }

class Detail extends React.Component {
    componentDidMount() {
        console.log(this.props);
        const { location, history } = this.props;
        if (location.state === undefined) {
            history.push("/");
        }
    }
    render() {
        const { location } = this.props;
        if (location.state) {
            return (
                <div>
                    <strong>{location.state.title}</strong>
                    <img src={location.state.poster} />
                </div>
            );
        } else {
            return null;
        }
    }
}

export default Detail;
