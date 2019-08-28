import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';


class CountryDetails extends Component {
  
  state = {
  };

  getQuery(code) {
    return gql`
      {
        country(code: "${code}") {
          name
          native
          emoji
          currency
          phone
          languages {
            code
            name
          }
        }
      }
    `;
  }

  render() {
    const code = this.props.match.params.code;
    const query = this.getQuery(code);

    return (
      <Query query={query}>
        {({ loading, error, data: { country } }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>{error.message}</p>;

          return (
            <div>
              <p>Name: {country.name}</p>
              <p>Currency: {country.currency}</p>
              <p>Area Code: {country.phone}</p>
            </div>
          );
        }}
      </Query>
    );
  }
}

export default CountryDetails;
