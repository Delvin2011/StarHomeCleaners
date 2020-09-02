import React from 'react';
import FilterResults from 'react-filter-search';
import Select from 'react-select';
import locations from './locations';



  
const options = locations;
class FilteredList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      value: false
    };
  }


  onChange = option => {

    this.setState({ value: option });
  
};
  render() {
    const { data, value } = this.state;
    console.log(locations);

    const customStyles = (width = 100, height = 20) => {
        return {
            container: (base) => ({
                ...base,
                display:'inline-block',
                minWidth: width,
            }),
            valueContainer: (base) => ({
                ...base,
                minHeight: height,
            })
        }
    }
    return (
      <div style = {{"width": "150px","height": "22px"}}>
        <Select
          styles={customStyles}
          onChange={this.onChange}
          options={options}
          value={this.state.value}
          placeholder="Location..."
        />
      </div>
    );
  }
}

export default FilteredList;