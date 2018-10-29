
var httpRequest = new XMLHttpRequest();

var url = "https://api.weatherbit.io/v2.0/forecast/daily?city=Hanoi&key=aa4c74817c63473d9a3a4d7c0f2c3be1";

httpRequest.open("GET", url, false);
httpRequest.send(null);
var cityWeather = JSON.parse(httpRequest.responseText);
class Weather extends React.Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef();
        this.state = ({

            CityWeatherDaily: [{ temp: [cityWeather.data[1].temp],
                max: [cityWeather.data[1].max_temp],
                min: [cityWeather.data[1].min_temp],}],
            CityNameSearch: "",
        });
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
    render(){
        <Doc/ >

    }
}
class Doc extends React.Component {
    render() {
        return (
            <div>
                <div class="text-center">
                {this.props.temp}
                </div>
                <div class="form-inline">
              <div class="col-3">
              <b> {this.props.max}</b>
               
              </div>
              <div class="col-2"></div>
              <div class="col-3"> {this.props.min}</div>
                </div>
            </div>

        )
    }
}
    
