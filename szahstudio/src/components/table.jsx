import React from 'react'
import Button from './button';

export default function Table(props) {
const {
  headers = [], 
  datas = [],
  onEditClick, 
  onDeleteClick
} = props;

  return (
    <table className='table'>
      <thead>
        <tr>
          {headers.map((header, index) => (
          <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>

      <tbody className='bg-base-200'>
          {datas.map((data, index) => (
        <tr key={index}>
            <td>{`0${index + 1}/${data.id}`}</td>
            <td>{data.productName}</td>
            <td>{data.productCategory}</td>
            <td>{data.productImage}</td>
            <td>{data.productFreshness}</td>
            <td>{data.additionalDescription}</td>
            <td>{data.productPrice}</td>
            <td className='flex gap-1'>
              <Button label="Delete" onClick={() => onEditClick(data)}/>
              <Button label="Edit" onClick={() => onDeleteClick(data)}/>
            </td>
        </tr>
      ))}
      </tbody>
    </table>
  );
}
 