import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ResourceList = ({ resource }) => {
	const [ resources, setResources ] = useState([]);

	//state = { resources: [] };

	const fetchResource = async (resource) => {
		const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);

		setResources(response.data);
	};

	//ComponentDidMount + ComponentDidUpdate
	// useEffect(
	// 	() => {
	// 		fetchResource(resource);
	// 	},
	// 	[ resource ]
	// );

	useEffect(() => {
		(async (resource) => {
			const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);

			setResources(response.data);
		})(resource);
	});

	// componentDidUpdate = async (prevProps) => {
	// 	if (prevProps.resource !== this.props.resource) {
	// 		const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);

	// 		this.setState({ resources: response.data });
	// 	}
	// };

	//return <div>{resources.length}</div>;

	return <ul>{resources.map((record) => <li key={record.id}>{record.title}</li>)}</ul>;
};

export default ResourceList;
