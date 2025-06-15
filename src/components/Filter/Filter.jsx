import './Filter.scss';

export default function Filter({value, onCharge}) {
    return (
          <label className="Filter__label">
            Name
            <input
              className="Filter__input"
              type="text"
              name="filter"
              required
              placeholder="filter name"
              onChange={onCharge}
              value={value}
            />
          </label>
    )
  }