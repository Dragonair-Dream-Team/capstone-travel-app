import React from "react";

const initialState = {
  searchTerm: "",
  location: "",
  price: "",
};
class Searches extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    console.log("my props on search are", this.props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.clearSelections = this.clearSelections.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    const newCuisine = this.state.searchTerm.toLowerCase();
    console.log("newCuisine is", newCuisine);
    this.props.searchCuisine(newCuisine, this.props.lat, this.props.lng);
  }
  clearSelections(lat, long) {
    this.props.resClear(lat, long);
  }
  render() {
    return (
      <div>
        <form>
          <h1>Search By</h1>
          <h3>Cuisine: </h3>
          <input
            type="text"
            name="searchTerm"
            defaultValue=""
            onChange={this.handleChange}
          />
          <button type="submit" onClick={this.handleSubmit}>
            Search
          </button>
        </form>
        <button
          type="button"
          onClick={() => this.clearSelections(this.props.lat, this.props.lng)}
        >
          X
        </button>
      </div>
    );
  }
}

export default Searches;
