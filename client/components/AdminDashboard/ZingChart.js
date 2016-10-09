var ZingChart = React.createClass({
    render : function(){
        return (
            <div id={this.props.id}></div>
        );
    },
    //Called after the render function.
    componentDidMount : function(){
        zingchart.render({
            id : this.props.id,
            width: (this.props.width || 600),
            height: (this.props.height || 400),
            data : this.props.data
        });
    },
    //Used to check the values being passed in to avoid unnecessary changes.
    shouldComponentUpdate : function(nextProps, nextState){
        //Lazy object comparison
        return !(JSON.stringify(nextProps.data) === JSON.stringify(this.props.data)) ;
    },
    componentWillUpdate : function(nextProps){
        zingchart.exec(this.props.id, 'setdata', {
            data : nextProps.data
        })
    }
}); 
