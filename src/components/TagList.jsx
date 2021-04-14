import React from 'react';
import PropTypes from 'prop-types';

const TagList = ({ tags, onClick, selectedTag }) => (
  <div className="flex flex-row flex-wrap">
    {tags.map((tag) => {
      const Component = onClick ? 'button' : 'div';
      return (
        <Component
          type="button"
          key={tag}
          className={`rounded-full bg-yellow-200 text-black py-1 px-2 mx-1 my-1 justify-self-start ${selectedTag === tag ? 'border-2 border-black' : null}`}
          onClick={() => onClick(tag)}
        >
          {tag}
        </Component>
      );
    })}
  </div>
);

TagList.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
  onClick: PropTypes.func,
  selectedTag: PropTypes.string,
};

TagList.defaultProps = {
  tags: [],
  onClick: null,
  selectedTag: null,
};

export default TagList;
