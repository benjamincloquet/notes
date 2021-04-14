import React from 'react';
import PropTypes from 'prop-types';

const TagList = ({ tags }) => (
  <div className="flex flex-row flex-wrap">
    {tags.map((tag) => (
      <div key={tag} className="rounded-full bg-yellow-200 py-1 px-2 mx-1 my-1 justify-self-start">
        {tag}
      </div>
    ))}
  </div>
);

TagList.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
};

TagList.defaultProps = {
  tags: [],
};

export default TagList;
