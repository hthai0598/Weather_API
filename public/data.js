

class Weather extends React.Component {
    constructor(props) {
        super(props);
        var httpRequest = new XMLHttpRequest();

        var url = "https://api.weatherbit.io/v2.0/forecast/daily?city=Hanoi&key=aa4c74817c63473d9a3a4d7c0f2c3be1";

        httpRequest.open("GET", url, false);
        httpRequest.send(null);
        var cityWeather = JSON.parse(httpRequest.responseText);
        // var thu = ["Thứ Hai","Thứ Ba","Thứ Tư","Thứ Năm","Thứ Sáu","Thứ Bảy","Chủ Nhật"];
        // var datetime = thu[d.getDay()]
        
        this.state = {

            cityWeatherDaily: [
                {
                    temp: [cityWeather.data[1].temp],
                    max: [cityWeather.data[1].max_temp],
                    min: [cityWeather.data[1].min_temp],
                    // temp: [cityWeather.data[2].temp],
                    // max: [cityWeather.data[2].max_temp],
                    // min: [cityWeather.data[2].min_temp],
                    // temp: [cityWeather.data[3].temp],
                    // max: [cityWeather.data[3].max_temp],
                    // min: [cityWeather.data[3].min_temp],
                    // temp: [cityWeather.data[4].temp],
                    // max: [cityWeather.data[4].max_temp],
                    // min: [cityWeather.data[4].min_temp],
                    // temp: [cityWeather.data[5].temp],
                    // max: [cityWeather.data[5].max_temp],
                    // min: [cityWeather.data[5].min_temp],
                    // temp: [cityWeather.data[6].temp],
                    // max: [cityWeather.data[6].max_temp],
                    // min: [cityWeather.data[6].min_temp],
                    // temp: [cityWeather.data[7].temp],
                    // max: [cityWeather.data[7].max_temp],
                    // min: [cityWeather.data[7].min_temp],
                }

                // { description: cityWeather.data[1].weather.description },
                // { description: cityWeather.data[2].weather.description },
                // { description: cityWeather.data[3].weather.description },
                // { description: cityWeather.data[4].weather.description },
                // { description: cityWeather.data[5].weather.description },
                // { description: cityWeather.data[6].weather.description },
                // {description : cityWeather.data[6].weather.description},
                // {description : cityWeather.data[7].weather.description},
                // {description : cityWeather.data[8].weather.description},
                // {description : cityWeather.data[9].weather.description},
                // { date: cityWeather.data[1].datetime },
                // { date: cityWeather.data[2].datetime },
                // { date: cityWeather.data[3].datetime },
                // { date: cityWeather.data[4].datetime },
                // { date: cityWeather.data[5].datetime },
                // { date: cityWeather.data[6].datetime },
                // { date: cityWeather.data[7].datetime },
                // { date: cityWeather.data[8].datetime },
                // { date: cityWeather.data[9].datetime },
                // { minTemp: cityWeather.data[1].min_temp },
                // { minTemp: cityWeather.data[2].min_temp },
                // { minTemp: cityWeather.data[3].min_temp },
                // { minTemp: cityWeather.data[4].min_temp },
                // { minTemp: cityWeather.data[5].min_temp },
                // { minTemp: cityWeather.data[6].min_temp },
                // {minTemp: cityWeather.data[7].app_min_temp},
                // {minTemp: cityWeather.data[8].app_min_temp},
                // {minTemp: cityWeather.data[9].app_min_temp},
                // { maxTemp: cityWeather.data[1].max_temp },
                // { maxTemp: cityWeather.data[2].max_temp },
                // { maxTemp: cityWeather.data[3].max_temp },
                // { maxTemp: cityWeather.data[4].max_temp },
                // { maxTemp: cityWeather.data[5].max_temp },
                // { maxTemp: cityWeather.data[6].max_temp },
                // {maxTemp: cityWeather.data[7].max_temp},
                // {maxTemp: cityWeather.data[8].max_temp},
                // {maxTemp: cityWeather.data[9].max_temp},
            ],

            tempp: cityWeather.data[0].temp,
            datee: cityWeather.data[0].datetime,
            descriptionn: cityWeather.data[0].weather.description,
            maxx: cityWeather.data[0].max_temp,
            minn: cityWeather.data[0].min_temp,
            country: cityWeather.city_name,
            name: cityWeather.city_name

            // img : cityWeather.data[0].weather.icon
        };

    }


    Input = (e) => {
        this.setState({ country: e.target.value })
    }
    Click = () => {
        var httpRequest = new XMLHttpRequest();

        // this.state.country[0].toUpperCase();
        var namevar = "";

        for (var i = 0; i < this.state.country.length; i++) {
            if (i == 0) {
                namevar = namevar + this.state.country[i].toUpperCase();
            }
            else {
                namevar = namevar + this.state.country[i].toLowerCase();
            }
        }

        console.log(namevar)
        var url = "https://api.weatherbit.io/v2.0/forecast/daily?city=" + namevar + "&key=aa4c74817c63473d9a3a4d7c0f2c3be1";
        httpRequest.open("GET", url, false);
        httpRequest.send(null);
        var cityWeather = JSON.parse(httpRequest.responseText);
        if (namevar == cityWeather.city_name) {
            this.setState({
                cityWeatherDaily: [
                    {
                        temp: [cityWeather.data[1].temp],
                        max: [cityWeather.data[1].max_temp],
                        min: [cityWeather.data[1].min_temp],
                        temp: [cityWeather.data[2].temp],
                        max: [cityWeather.data[2].max_temp],
                        min: [cityWeather.data[2].min_temp],
                    }
                    // { description: cityWeather.data[1].weather.description },
                    // { description: cityWeather.data[2].weather.description },
                    // { description: cityWeather.data[3].weather.description },
                    // { description: cityWeather.data[4].weather.description },
                    // { description: cityWeather.data[5].weather.description },
                    // { description: cityWeather.data[6].weather.description },
                    // {description : cityWeather.data[6].weather.description},
                    // {description : cityWeather.data[7].weather.description},
                    // {description : cityWeather.data[8].weather.description},
                    // {description : cityWeather.data[9].weather.description},
                    // { date: cityWeather.data[1].datetime },
                    // { date: cityWeather.data[2].datetime },
                    // { date: cityWeather.data[3].datetime },
                    // { date: cityWeather.data[4].datetime },
                    // { date: cityWeather.data[5].datetime },
                    // { date: cityWeather.data[6].datetime },
                    // { date: cityWeather.data[7].datetime },
                    // { date: cityWeather.data[8].datetime },
                    // { date: cityWeather.data[9].datetime },
                    // { minTemp: cityWeather.data[1].min_temp },
                    // { minTemp: cityWeather.data[2].min_temp },
                    // { minTemp: cityWeather.data[3].min_temp },
                    // { minTemp: cityWeather.data[4].min_temp },
                    // { minTemp: cityWeather.data[5].min_temp },
                    // { minTemp: cityWeather.data[6].min_temp },
                    // {minTemp: cityWeather.data[7].app_min_temp},
                    // {minTemp: cityWeather.data[8].app_min_temp},
                    // {minTemp: cityWeather.data[9].app_min_temp},
                    // { maxTemp: cityWeather.data[1].max_temp },
                    // { maxTemp: cityWeather.data[2].max_temp },
                    // { maxTemp: cityWeather.data[3].max_temp },
                    // { maxTemp: cityWeather.data[4].max_temp },
                    // { maxTemp: cityWeather.data[5].max_temp },
                    // { maxTemp: cityWeather.data[6].max_temp },
                    // {maxTemp: cityWeather.data[7].max_temp},
                    // {maxTemp: cityWeather.data[8].max_temp},
                    // {maxTemp: cityWeather.data[9].max_temp},
                ],
                name: cityWeather.city_name,
                tempp: cityWeather.data[0].temp,
                datee: cityWeather.data[0].datetime,
                descriptionn: cityWeather.data[0].weather.description,
                maxx: cityWeather.data[0].max_temp,
                minn: cityWeather.data[0].min_temp,
                country: cityWeather.city_name
            })
            this.setState({
                country: this.state.name
            })
        }

    }


    render() {
        var list = this.state.cityWeatherDaily.map(e => (
            <Doc temp={e.temp} max={e.max} min={e.min} />



        ));
        // var images= "https://openweathermap.org/img/w/" + this.state.img + ".png";
        return (
            <div>
                <div>
                    <form class="form-inline">
                        <p class="col-md-8">Dự Báo Thời Tiết</p>
                        <div class="col-md-4 ">
                            <input type="text" onChange={this.Input.bind(this)} placeholder="Nhập thành phố..." />
                            <span>
                                <button onClick={this.Click} >
                                    <g>
                                        <path id="path1" transform="rotate(0,8,8) translate(1.6,1.6) scale(0.4,0.4)  " fill="#FFFFFF" d="M14.580002,23.394012L14.580002,26.235001 17.18399,26.235001 17.18399,23.394012z M16.117996,5.7660065C14.539993,5.7660065 13.278992,6.2390137 12.332993,7.1880035 10.991989,8.5250092 10.320999,10.223007 10.320999,12.27301L13.043991,12.27301C13.043991,10.695007 13.437988,9.5130005 14.22699,8.7230072 14.697998,8.25 15.289001,8.0130005 16,8.0130005 16.867996,8.0130005 17.537003,8.25 18.009995,8.7230072 18.561996,9.2750092 18.838989,10.106003 18.838989,11.207001 18.838989,12.077011 18.522995,12.827011 17.89299,13.455002 16.789001,14.561005 16.039001,15.429001 15.644989,16.061005 15.090988,16.92601 14.817001,18.228012 14.817001,19.964005L16.947998,19.964005C16.947998,18.545013 17.302002,17.478012 18.009995,16.767014 18.955994,15.824005 19.705994,15.074005 20.259995,14.522003 21.205002,13.574005 21.679001,12.432007 21.679001,11.090012 21.679001,9.5130005 21.166,8.2109985 20.14299,7.1880035 19.194992,6.2390137 17.853989,5.7660065 16.117996,5.7660065z M16,0C24.819992,0 32,7.178009 32,16.001007 32,24.822006 24.819992,32 16,32 7.1759949,32 0,24.822006 0,16.001007 0,7.178009 7.1759949,0 16,0z" />
                                    </g>

                                    <span>Search</span>
                                </button>
                            </span>
                        </div>
                    </form>
                </div>
                <div class="container">
                    <h3 id="thanhpho" classs="col-sm-12 col-md-12">{this.state.name}</h3>
                    <h1 id="thanhpho" class="col-sm-12 col-md-12">{this.state.tempp}°C</h1>
                    <p id="thanhpho" class="col-sm-12 col-md-12">{this.state.datee}</p>
                    <p id="thanhpho">{this.state.descriptionn}</p>
                    <div class="form-inline">{list}</div>
                </div>
            </div>


        );

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

ReactDOM.render(
    <Weather />,
    document.getElementById("root")
)