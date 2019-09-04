import React from "react";

const FilterBots = props => {

    return(
        <select onChange={props.filterBots}>
            <option value="">Select Bot Class</option>
            <option value="Support">Support</option>
            <option value="Defender">Defender</option>
            <option value="Assault">Assault</option>
        </select>
    )
}

export default FilterBots