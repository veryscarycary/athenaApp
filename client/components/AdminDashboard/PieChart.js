var PieChart = React.createClass({
    render : function(){
        var obj = {
            "graphset": [
                {
                    "type": "pie",
                    "background-color" : "white",
                    "legend" : {
                        "alpha" : 0
                    },
                    "plot" :{
                        "legend-marker":{
                            "type" : "circle",
                            "border-width" : 2,
                            "border-color" : "white"
                        },
                        "rules":[
                            {"rule":"%p == 0","background-color":"#7ABF30 #5F9427"},
                            {"rule":"%p == 1","background-color":"#07BCDE #06A6C2"},
                            {"rule":"%p == 2","background-color":"#ed4e4e #bb4747"},
                            {"rule":"%p == 3","background-color":"#FFC107 #DAA506"},
                            {"rule":"%p == 4","background-color":"#ea794d #B96746"}
                        ]
                    },
                    "series": this.props.values
                }
            ]
        };
        return (
            <ZingChart id={this.props.id} height={this.props.height} width={this.props.width} data={obj}/>
        );
    }
});
