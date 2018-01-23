function ListItem(props){
	function showDetails(){
		props.onSelected(props.country.id);
	}
	return(
    	<li onClick={showDetails} key={props.country.id}>{props.country.name}</li>
    )
}
function CountriesList(props){
	function show(id){
		props.onCountryChange(id)
	}
    const listItems = props.countries.map((country) => <ListItem 
    	key={country.id} 
    	country={country} 
    	onSelected={show}/>);
    return(
    	<ul>{listItems}</ul>
    )

} 

function Details(props) {
	if(props.country){
		return (
			<div>
			<h2>{props.country.name}</h2>
			<p>The capital city of {props.country.name} is {props.country.capital}. {props.country.name} has a population of {props.country.population}.</p>
			</div>
			)
	}else{
		return <h2></h2>
	}
  
}

class App extends React.Component {
	constructor(props){
		super(props);
		this.changeCountry = this.changeCountry.bind(this);
		this.state = {
			countries:[],
    		chosenCountry:0
		}
	}
	componentDidMount() {
	    fetch("countries.json")
	      .then(res => res.json())
	      .then(
	        (result) => {
	          this.setState({
	            countries: result,
	            chosenCountry:0
	          });
	        },
	        (error) => {
          		console.log(error)
        	}
	      )
	  }

	changeCountry(id){
		console.log(this);
		this.setState({
      		chosenCountry: id
    	});
	}

  render(){
  	const { countries,chosenCountry } = this.state;
  	return (
	    <div>
	      <CountriesList countries={this.state.countries} onCountryChange={this.changeCountry}/>
	      <Details country={this.state.countries[this.state.chosenCountry]} />
	    </div>
	  );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);


