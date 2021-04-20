import React from 'react';
import PropTypes from 'prop-types';

const TagList = ({ tags, onClick, selectedTag }) => (
  <div className="flex flex-row flex-wrap space-x-2">
    {tags.map((tag) => {
      const Component = onClick ? 'button' : 'div';
      return (
        <Component
          type="button"
          key={tag}
          className={`rounded-full px-2 py-1 bg-yellow-200 text-black justify-self-start font-mono shadow ${
            selectedTag === tag ? 'ring-2 ring-blue-400 font-black focus:ring-amber-400' : null
          }`}
          onClick={() => onClick && onClick(tag)}
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
