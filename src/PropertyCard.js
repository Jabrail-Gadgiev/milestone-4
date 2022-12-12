function PropertyCard(props) {
    
    const columnContainer = {
        margin: '10px'
    };

    const columnImg = {
        borderRadius: '12px',
        maxWidth: '100%',
        cursor: 'pointer',
        transition: '0.5s',
        marginBottom: '5px'
    };

    const columnBtn = {
        backgroundColor: '#9E7676',
        marginTop: '-5px'
    };

    function imgHover(e) {
        e.target.style.boxShadow = '#9E7676 0px 1px 4px, #9E7676 0px 0px 0px 3px'
    };

    function imgUnHover(e) {
        e.target.style.boxShadow = ''
    };

    function btnHover(e) {
        e.target.style.backgroundColor = '#815B5B'
        e.target.style.color = 'black'
    };

    function btnUnHover(e) {
        e.target.style.backgroundColor = '#9E7676'
    };

    return (
    <div style={columnContainer} className="column">
        <img onMouseOver={imgHover} onMouseOut={imgUnHover} style={columnImg} src={props.img} alt="house"/>
            <p><strong>{props.title}</strong><br/>
            {props.price}<br/>
            {props.description}</p>
        <button onMouseOver={btnHover} onMouseOut={btnUnHover} style={columnBtn} className="btn">Book now</button>
      </div>
    );
};

export default PropertyCard;