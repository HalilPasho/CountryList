import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';


function getQuery() {
	return gql`
	{
		countries {
			code
			name
			native
			emoji
			currency
			continent {
				code
				name
			}
			languages {
				code
				name
			}
		}
	}
	`;
}

const List = () => {

	const query = getQuery();

	return (
		<Query query={query}>
			{({ loading, error, data }) => {
				if (loading) return <h1>Loading...</h1>
				if (error) return <h2>404. Looks like API is down!</h2>

				return data.countries.map(({ name, code, emoji, currency, continent, languages }) => (
					<div key={code}>
						<p>Name: {name}</p>
						<p>Flag: {emoji}</p>
						<p>Currency: {currency}</p>
						<p>Continent: {continent.name}</p>
						<p>Languages: {languages.map(({ name }) => name).join(', ')}</p>
						<a href={'/countries/' + code}>Details</a>
						<hr />
					</div>
				))
			}}
		</Query>
	);
}

export default List;
