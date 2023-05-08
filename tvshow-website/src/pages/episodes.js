import React from "react";
import image from "../img/home_new1.jpg"
import './page.css';

const Episodes = () => {
return (
	<div style={{backgroundImage:`url(${image})`}} className='page-background'>
	<div className="container"> 
		<Child data={epiDetails}/>
	</div>
	</div>
);
};

const epiDetails=[
	{
		name:'Episode 1',
		details:'As Tariq St. Patrick begins his new life at Stansfield University, he\'s torn between two worlds.',
		Genres: 'Crime, Drama',
		Network: 'STARZ',
		Air_Date: 'Sep 6, 2020',
		Directed_By: 'Anthony Hemingway',
		Written_By: 'Courtney A. Kemp'
	},
	{
		name:'Episode 2',
		details:'Haunted by the legacy of his father, Tariq tries to understand who James St. Patrick was to the people in his life.',
		Genres: 'Crime, Drama',
		Network: 'STARZ',
		Air_Date: 'Sep 13, 2020',
		Directed_By: 'Anthony Hemingway',
		Written_By: 'Monica Mitchell'
	},
	{
		name:'Episode 3',
		details:'Tariq struggles with the weight of providing for his mother\'s mounting legal defense while juggling the rigors of Ivy League life.',
		Genres: 'Crime, Drama',
		Network: 'STARZ',
		Air_Date: 'Sep 20, 2020',
		Directed_By: 'Hernan Otaño',
		Written_By: 'Aixsha Hiciano, Gabriela Uribe'
	}
]

  const Child = (props) => {
    return (
        <div >
            <div>
                {props.data.map((value,key)=>
                       <div className="child-container" >
						<p className="episode-title" >{value.name}</p>
						<p className="episode-details"><b>Episode Info:</b><br></br> {value.details}</p>
						<p className="episode-details"><b>Genres:</b> {value.Genres}<br/>
						<b>Network: </b>{value.Network}<br/>
						<b>Air Date: </b>{value.Air_Date}<br/>
						</p>
					   </div>
                   )}
            </div>
        </div>
    )
}
export default Episodes;