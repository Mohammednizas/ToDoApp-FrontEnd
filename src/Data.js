import React from 'react'

const Data = ({value}) => {
  return (
    <td>{typeof value == "boolean" ? value ? "true" : "false" : value}</td>
  )
}

export default Data;