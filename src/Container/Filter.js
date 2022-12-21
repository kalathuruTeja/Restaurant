import React from 'react'
import { connect } from 'react-redux'
import { setfilter,resetfilter } from '../Action'

const Filter = (filter_name,setfilter,resetfilter) => {
    const products = ["All Items", "Rice-Items", "Cold Drinks", "Pizza", "Hot Drinks"]
    const [filter,setFilter] = React.useState("All Items")
  return (
      <div>
          <center className="mt-3">
              <span className="h4 m-2">Filter : </span>
              <select name="filter" className="p-1" onChange={(event)=> setFilter(event.target.value)}>
                  {products.map((item, index) => (
                      <option value={item} key={index} >
                          {item}
                      </option>
                  ))}
              </select>
              <button className="btn btn-sm btn-primary m-2">Submit</button>
          </center>
      
    </div>
  )
}

const mapStateToProps = state => ({
    filter_name :state.filterreducer.filter_name
})

export default connect(mapStateToProps,{setfilter,resetfilter})(Filter)
