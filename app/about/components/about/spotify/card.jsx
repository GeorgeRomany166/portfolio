import React, { useEffect, useState } from "react";
import getNowPlayingItem from "./fetch";



const Card = () => {
	const [loading, setLoading] = useState(true);
	const [result, setResult] = useState({});

useEffect(() => {
	const fetchData = async () => {
		const results = await Promise.all([getNowPlayingItem()]);
		console.log(results);
		setResult(results[0]);
		setLoading(false);
	};
	fetchData(); // Fetch data immediately on component mount

	const intervalId = setInterval(fetchData, 60 * 1000); // ! Fetch data every minute: temporary 

	return () => clearInterval(intervalId); 
}, []);

	
};

export default Card;
