class Stu extends React.Component {
	render() {
		
		return (
			<div className="col-md-1 col-sm-3">
				<img src={Icons[this.props.index]} height="35px;" width="35px;" alt="weather-icon"></img>
				<p id="pmax">Max Temp: {Max[this.props.index]} <sup>o</sup>C</p>
				<p id="pmin">Min Temp: {Min[this.props.index]}<sup>o</sup>C</p>
				
			</div>
		);
	}
}

var Icons = [];
var Temp = [];
var Description = [];
var AppTemp = [];
var WindSpeed = [];
var Humidity = [];
var Max = []
var Min = []
class Weather extends React.Component {
	constructor(props) {
		super(props);
		this.inputRef = React.createRef();

		this.state = ({
			WeatherDaily: [],
			CityNameSearch: "",
			number: [{ index: 1 },
			{ index: 2 },
			{ index: 3 },
			{ index: 4 },
			{ index: 5 },
			{ index: 6 },
			{ index: 7},
			{ index: 8 },
			{ index: 9 },
			{ index: 10 },
			,
				,]
		})
	}
	componentDidMount = () => {
		fetch("https://api.weatherbit.io/v2.0/forecast/daily?city=Hanoi&key=5bfc707ff7a64bf7a1ca737f8a3f47d1")
			.then(result => {
				if (result.status == 200) {
					return result.json()
				}
				else {
					alert(("error: " + result.statusText))
				}
			})
			.then(WeatherObject => {
				this.setState({
					WeatherDaily: WeatherObject
				});
			})
	}
	Output = () => {
		this.setState({ CityNameSearch: this.inputRef.current.value });
	}
	componentDidUpdate(prevProps, prevState) {
		if (this.state.CityNameSearch !== prevState.CityNameSearch) {
			fetch("https://api.weatherbit.io/v2.0/forecast/daily?city=" + this.state.CityNameSearch + "&key=5bfc707ff7a64bf7a1ca737f8a3f47d1")
				.then(result => {
					if (result.status == 200) {
						return result.json()
					}
					else {
						alert(("error: " + result.statusText))
					}
				})
				.then(WeatherObject => {
					this.setState({
						WeatherDaily: WeatherObject
					});
				})
		}
	}

	render() {
		var date = new Date();
		var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		// var Icons = [];
		// var Temp = [];
		// var Description = [];
		// var AppTemp = [];
		// var WindSpeed = [];
		// var Humidity = [];
		// var Max = []
		// var Min = []
		
		var listItem = this.state.number.map(e => (

			<Stu index={e.index} />
		));
		if (this.state.WeatherDaily.length != 0) {
			Icons[0] = "https://www.weatherbit.io/static/img/icons/" + this.state.WeatherDaily.data[0].weather.icon + ".png";
			Temp[0] = this.state.WeatherDaily.data[0].temp;
			Description[0] = this.state.WeatherDaily.data[0].weather.description;
			WindSpeed[0] = this.state.WeatherDaily.data[0].wind_spd.toFixed(2);
			AppTemp[0] = this.state.WeatherDaily.data[0].app_max_temp
			Humidity[0] = this.state.WeatherDaily.data[0].rh
			

			Icons[1] = "https://www.weatherbit.io/static/img/icons/" + this.state.WeatherDaily.data[1].weather.icon + ".png";
			Min[1] = this.state.WeatherDaily.data[1].min_temp
			Max[1] = this.state.WeatherDaily.data[1].max_temp


			Icons[2] = "https://www.weatherbit.io/static/img/icons/" + this.state.WeatherDaily.data[2].weather.icon + ".png";
			Min[2] = this.state.WeatherDaily.data[2].min_temp
			Max[2] = this.state.WeatherDaily.data[2].max_temp


			Icons[3] = "https://www.weatherbit.io/static/img/icons/" + this.state.WeatherDaily.data[3].weather.icon + ".png";
			Min[3] = this.state.WeatherDaily.data[3].min_temp
			Max[3] = this.state.WeatherDaily.data[3].max_temp


			Icons[4] = "https://www.weatherbit.io/static/img/icons/" + this.state.WeatherDaily.data[4].weather.icon + ".png";
			Min[4] = this.state.WeatherDaily.data[4].min_temp
			Max[4] = this.state.WeatherDaily.data[4].max_temp


			Icons[5] = "https://www.weatherbit.io/static/img/icons/" + this.state.WeatherDaily.data[5].weather.icon + ".png";
			Min[5] = this.state.WeatherDaily.data[5].min_temp
			Max[5] = this.state.WeatherDaily.data[5].max_temp


			Icons[6] = "https://www.weatherbit.io/static/img/icons/" + this.state.WeatherDaily.data[6].weather.icon + ".png";
			Min[6] = this.state.WeatherDaily.data[6].min_temp
			Max[6] = this.state.WeatherDaily.data[6].max_temp


			Icons[7] = "https://www.weatherbit.io/static/img/icons/" + this.state.WeatherDaily.data[7].weather.icon + ".png";
			Min[7] = this.state.WeatherDaily.data[7].min_temp
			Max[7] = this.state.WeatherDaily.data[7].max_temp

			Icons[8] = "https://www.weatherbit.io/static/img/icons/" + this.state.WeatherDaily.data[8].weather.icon + ".png";
			Min[8] = this.state.WeatherDaily.data[8].min_temp
			Max[8] = this.state.WeatherDaily.data[8].max_temp
			
			Icons[9] = "https://www.weatherbit.io/static/img/icons/" + this.state.WeatherDaily.data[9].weather.icon + ".png";
			Min[9] = this.state.WeatherDaily.data[9].min_temp
			Max[9] = this.state.WeatherDaily.data[9].max_temp
			
			Icons[10] = "https://www.weatherbit.io/static/img/icons/" + this.state.WeatherDaily.data[10].weather.icon + ".png";
			Min[10] = this.state.WeatherDaily.data[10].min_temp
			Max[10] = this.state.WeatherDaily.data[10].max_temp


		}

		return (
			
			<div>
				
				{/* <nav className="navbar navbar-dark bg-dark sticky-top" id="mainNav">
					<div className="form-inline mx-auto">
						<input className="form-control mr-sm-2" type="search" ref={this.inputRef} placeholder="City name..." aria-label="Search" />
						<button className="btn btn-outline-light" onClick={this.Output} >Search</button>
					</div>
				</nav> */}
				<nav className="navbar navbar-blue bg-light sticky-top" id="mainNav">
					<div className="col-sm-4 col-md-6 col-lg-8">
						<b>Weather</b>
					</div>
					<div className="input-group col-sm-8 col-md-6 col-lg-4">
						<input className="form-control search-box" type="search" ref={this.inputRef} placeholder="City name..." aria-label="Search" />
						<div className="input-group-btn">
							<button className="btn btn-outline-blue" onClick={this.Output} >Search</button>
						</div>
					</div>

				</nav>

				<div className="container-fluid padding">
					<div className="row text-center padding">
						<div className="col-lg-2"></div>
						<div className="col-lg-8">
							<h2>{this.state.WeatherDaily.city_name}, {this.state.WeatherDaily.country_code}</h2>
							<img src={Icons[0]} height="90px;" width="90px;" alt="weather-icon"></img>
							<h2>{Temp[0]}<sup>o</sup>C</h2>
							<h4>{Description[0]}</h4>
							<p>Today is: {date.getHours()}:{date.getMinutes()} {month[date.getMonth()]} {date.getDate()}</p>
							<div className="row">
								<div className="col-sm-6 col-md-4">
									<p>Feel like: {AppTemp[0]}<sup>o</sup>C</p>
								</div>
								<div className="col-sm-6 col-md-4">
									<p>Wind Speed: {WindSpeed[0]} m/s</p>
								</div>
								<div className="col-sm-12 col-md-4">
									<p>Humidity: {Humidity[0]}%</p>
								</div>
							</div>
						</div>
						<div className="col-lg-2">
						</div>
						<div>
							<br></br>

						</div>
					</div>
					<div className="row text-center padding">
					<div className="col-md-1 col-sm-1"></div>
					{listItem}
					<div className="col-md-1 col-sm-1"></div>

						{/* <div className="col-lg-2">
					<img src={Icons[1]} height="30px;" width="30px;" alt="weather-icon"></img>
					<p id="p">Max Temp: {Max[1]}</p>
					<p id="p">Min Temp: {Min[1]}</p>
					</div>
					<div className="col-lg-2">
					<img src={Icons[2]} height="30px;" width="30px;" alt="weather-icon"></img>
					<p id="p">Max Temp: {Max[2]}</p>
					<p id="p">Min Temp: {Min[2]}</p>
					</div>
					<div className="col-lg-2">
					<img src={Icons[3]} height="30px;" width="30px;" alt="weather-icon"></img>
					<p id="p">Max Temp: {Max[3]}</p>
					<p id="p">Min Temp: {Min[3]}</p>
					</div>
					<div className="col-lg-2">
					<img src={Icons[4]} height="30px;" width="30px;" alt="weather-icon"></img>
					<p id="p">Max Temp: {Max[4]}</p>
					<p id="p">Min Temp: {Min[4]}</p>
					</div>
					<div className="col-lg-2">
					<img src={Icons[5]} height="30px;" width="30px;" alt="weather-icon"></img>
					<p id="p">Max Temp: {Max[5]}</p>
					<p id="p">Min Temp: {Min[5]}</p>
					</div>
					<div className="col-lg-2">
					<img src={Icons[6]} height="30px;" width="30px;" alt="weather-icon"></img>
					<p id="p">Max Temp: {Max[6]}</p>
					<p id="p">Min Temp: {Min[6]}</p>
					</div> */}

					</div>

				</div>
			</div>
		);
	}
}

ReactDOM.render(
	<Weather />,
	document.getElementById("root")
)