
//Proptypes
import PropTypes from 'prop-types'

function Main({companyInfo}) {
  return (
    <div className='flex justify-center align-middle p-10 '    >
        <h1>
            Vista en construcción
        </h1>
    </div>
  )
}


Main.propTypes = {
    companyInfo: PropTypes.object.isRequired,
}

export default Main