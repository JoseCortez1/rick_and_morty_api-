import React, { useEffect, useReducer, useState } from "react";
import "./Characters.css";
import { ReactComponent as Heart } from "../Assets/img/heart.svg";
import { SET_CHARACTERS, SET_FAVORITES } from "../Reducer/CharactersReducer";
import charactersReducer, { initialState } from "../Reducer/CharactersReducer";
const Characters = () => {
	const [characters, setCharacters] = useState([]);
	const [charactersR, dispatch] = useReducer(charactersReducer, initialState);

	useEffect(() => {
		fetch("https://rickandmortyapi.com/api/character")
			.then((response) => response.json())
			.then((data) =>
				dispatch({ type: SET_CHARACTERS, payload: data.results })
			);
	}, []);

	return (
		<div className="characters_container">
			{charactersR.favorites.map((character) => (
				<Character data={character} dispatch={dispatch} liked={true} />
			))}
			{charactersR.characters.map((character) => (
				<Character data={character} dispatch={dispatch} />
			))}
		</div>
	);
};

export default Characters;

const Character = ({ data, liked = false, dispatch }) => {
	const { name, image, id, species, status } = data;
	useEffect(() => {
		console.log(data);
	});
	const likeCharacter = (id) => {
		dispatch({ type: SET_FAVORITES, payload: id });
	};
	return (
		<div className="character_card " key={id}>
			{<img src={image} alt="" className="character_img" />}
			<div className="character_information">
				<div className={` title-heart ${liked ? "liked" : ""}`}>
					<Heart onClick={() => likeCharacter(id)} />
					<h2 className="character_name">{name}</h2>
				</div>
				<p className="character_status">Status: {status}</p>
				<p className="character_species">Species: {species}</p>
			</div>
		</div>
	);
};
