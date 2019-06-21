import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

/**
 * Renders GranuleDetailsTab.
 * @param {object} props - The props passed into the component.
 * @param {object} location - The location passed into the component from React Router.
 * @param {object} props.onFocusedGranuleChange - Function to call to reset the focused granule.
 */

export const GranuleDetailsTab = ({ location, onFocusedGranuleChange }) => (
  <span className="granule-results-tab">
    <Link
      className="granule-results-tab__button"
      type="button"
      to={{
        pathname: '/search/granules',
        search: location.search
      }}
      onClick={() => onFocusedGranuleChange('')}
    >
      <i className="fa fa-chevron-circle-left" />
      {' Back to Granules'}
    </Link>
  </span>
)

GranuleDetailsTab.propTypes = {
  location: PropTypes.shape({}).isRequired,
  onFocusedGranuleChange: PropTypes.func.isRequired
}

export default GranuleDetailsTab