import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

class Polaroid extends React.Component {
    render() {

        const Polaroid = styled.div`
            background: white;
            padding:5px;
            width:100px;
            cursor:pointer;
            img {
                width:100%;
            }
            p {
                font-size:12px;
                font-style:italic;
            }
        `;

        const dateString = moment.unix(parseInt(this.props.date)).format("DD/MMMM/YYYY");


        

        return(
            <Polaroid>
                <img src={this.props.img} alt={this.props.loc} />
                <p>{dateString}</p>
            </Polaroid>
        )
    }
}

export default Polaroid;