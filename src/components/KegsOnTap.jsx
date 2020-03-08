import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

class KegsOnTap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      kegList: kegListData
    };
  }

  // componentDidMount() {
  //   // if (this.state.keglist === null) {
  //     const kegListWithID = kegListData.map(keg => {
  //       return {name: keg.name,
  //         brand: keg.brand,
  //         type: keg.type,
  //         price: keg.price,
  //         alcoholContent: keg.alcoholContent,
  //         pintsAvailable: keg.pintsAvailable,
  //         tapLocation: keg.tapLocation,
  //         id: v4()}
  //       });
  //       this.setState({kegList: kegListWithID});
  //     // }
  //   }


    render() {

      return(
      <div>
        <p>This is KegsOnTap</p>
        <table>
          <tr>
            <th>Name</th>
            <th>Brand</th>
            <th>Type</th>
            <th>Price</th>
            <th>Alcohol Content</th>
            <th>Pints Available</th>
          </tr>



          {this.state.kegList.map((keg) =>
            <Keg
            name={keg.name}
            brand={keg.brand}
            type={keg.type}
            price={keg.price}
            alcoholContent={keg.alcoholContent}
            pintsAvailable={keg.pintsAvailable}
            // id={keg.id}
            // key={keg.id}
            />
            )}
          </table>
        </div>
        );
      }
    }

    KegsOnTap.propTypes = {
      kegList: PropTypes.array.isRequired
    };

    export default KegsOnTap;
