
const numbers = [1, 2, 3, 4, 5]
const Mapping_of_array = () => {

  return (
    <div>
      {numbers.map((number) => (
          <ul key={number}>
            <li>{number}</li>
          </ul>
        ))}
      
    </div>
  )
  
}


export default Mapping_of_array
